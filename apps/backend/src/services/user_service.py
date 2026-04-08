from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.models import User


async def add_role_to_user(db: AsyncSession, user: User, role: str) -> User:
    """Add a role to a user (e.g., 'provider')."""
    if role not in user.roles:
        user.roles.append(role)
        db.add(user)
        await db.commit()
        await db.refresh(user)
    return user


async def remove_role_from_user(db: AsyncSession, user: User, role: str) -> User:
    """Remove a role from a user."""
    if role in user.roles:
        user.roles.remove(role)
        db.add(user)
        await db.commit()
        await db.refresh(user)
    return user


async def get_user_by_id(db: AsyncSession, user_id: int) -> User | None:
    result = await db.execute(select(User).where(User.id == user_id))
    return result.scalar_one_or_none()
