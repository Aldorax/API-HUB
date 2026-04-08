import secrets
from datetime import datetime, timedelta
from jose import JWTError, jwt
from src.config import settings


def generate_magic_link_token(email: str) -> str:
    """Generate a JWT token for magic link authentication."""
    expire = datetime.utcnow() + timedelta(minutes=settings.MAGIC_LINK_EXPIRY_MINUTES)
    payload = {"sub": email, "exp": expire, "type": "magic_link"}
    return jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def verify_magic_link_token(token: str) -> str | None:
    """Verify magic link token and return email if valid."""
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        if payload.get("type") != "magic_link":
            return None
        return payload.get("sub")
    except JWTError:
        return None


def create_access_token(email: str) -> str:
    """Create long-lived access token (30 days) for API authentication."""
    expire = datetime.utcnow() + timedelta(days=30)
    payload = {"sub": email, "exp": expire, "type": "access"}
    return jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def verify_access_token(token: str) -> str | None:
    """Verify access token and return email."""
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        if payload.get("type") != "access":
            return None
        return payload.get("sub")
    except JWTError:
        return None


def generate_api_key() -> str:
    """Generate a random API key for consumers."""
    return f"nk_{secrets.token_urlsafe(32)}"
