from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel, EmailStr
from src.database import get_db
from src.services.auth_service import request_magic_link, verify_magic_link
from src.middleware.auth import get_current_user
from src.models import User

router = APIRouter(prefix="/auth", tags=["Authentication"])


# Request/Response Models
class MagicLinkRequest(BaseModel):
    email: EmailStr


class MagicLinkVerifyRequest(BaseModel):
    token: str


class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserResponse(BaseModel):
    id: int
    email: str
    roles: list
    is_active: bool
    provider_name: str | None

    class Config:
        from_attributes = True


# Endpoints
@router.post("/magic-link", status_code=status.HTTP_200_OK)
async def request_magic_link_endpoint(
    request: MagicLinkRequest, db: AsyncSession = Depends(get_db)
):
    """Send a magic link to the user's email."""
    success = await request_magic_link(db, request.email)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to send email"
        )
    return {"message": "Magic link sent if email exists"}


@router.post("/verify", response_model=AuthResponse)
async def verify_magic_link_endpoint(
    request: MagicLinkVerifyRequest, db: AsyncSession = Depends(get_db)
):
    """Exchange magic link token for access token."""
    access_token = await verify_magic_link(db, request.token)
    if not access_token:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired token"
        )
    return AuthResponse(access_token=access_token)


@router.get("/me", response_model=UserResponse)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    """Get the current authenticated user's info."""
    return UserResponse(
        id=current_user.id,
        email=current_user.email,
        roles=current_user.roles,
        is_active=current_user.is_active,
        provider_name=current_user.provider_name,
    )
