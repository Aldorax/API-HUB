from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from src.database import get_db
from src.middleware.auth import get_current_user
from src.services.user_service import add_role_to_user
from src.models import User

router = APIRouter(prefix="/users", tags=["Users"])


class RoleResponse(BaseModel):
    roles: list
    message: str


@router.post("/make-provider", response_model=RoleResponse)
async def become_provider(
    current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)
):
    """Upgrade current user to provider role."""
    if "provider" in current_user.roles:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="User is already a provider"
        )

    updated_user = await add_role_to_user(db, current_user, "provider")
    return RoleResponse(roles=updated_user.roles, message="Provider role added successfully")


@router.get("/me/roles", response_model=RoleResponse)
async def get_my_roles(current_user: User = Depends(get_current_user)):
    """Get current user's roles."""
    return RoleResponse(roles=current_user.roles, message="")
