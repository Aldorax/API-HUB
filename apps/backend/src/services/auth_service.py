from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.models import User
from src.core.security import create_access_token, generate_magic_link_token
from src.services.email_service import send_magic_link_email


async def request_magic_link(db: AsyncSession, email: str) -> bool:
    """Request a magic link for the given email."""
    # Normalize email
    email = email.lower().strip()

    # Create or get user
    result = await db.execute(select(User).where(User.email == email))
    user = result.scalar_one_or_none()

    if not user:
        user = User(email=email, roles=["consumer"])
        db.add(user)
        await db.commit()
        await db.refresh(user)

    # Generate token and send email
    token = generate_magic_link_token(email)
    success = await send_magic_link_email(email, token)

    return success


async def verify_magic_link(db: AsyncSession, token: str) -> str | None:
    """Verify magic link token and return access token."""
    from src.core.security import verify_magic_link_token

    email = verify_magic_link_token(token)
    if not email:
        return None

    # Ensure user exists
    result = await db.execute(select(User).where(User.email == email))
    user = result.scalar_one_or_none()
    if not user:
        return None

    # Create access token
    access_token = create_access_token(email)
    return access_token


async def get_user_by_email(db: AsyncSession, email: str) -> User | None:
    """Retrieve user by email."""
    result = await db.execute(select(User).where(User.email == email))
    return result.scalar_one_or_none()
