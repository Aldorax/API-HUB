from sqlalchemy import Column, Integer, String, Float, JSON, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from src.database import Base


class APIVariant(Base):
    __tablename__ = "api_variants"

    id = Column(Integer, primary_key=True, index=True)
    provider_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    category = Column(String(50), nullable=False)
    subcategory = Column(String(50), nullable=False)
    name = Column(String(200), nullable=False)
    description = Column(String(1000), nullable=True)
    base_url = Column(String(500), nullable=False)
    auth_type = Column(String(20), default="api_key")  # api_key, bearer, none
    auth_value_encrypted = Column(String(500), nullable=True)
    pricing = Column(JSON, nullable=False)  # {"free": 100, "paid": [{"price": 500, "per": 1000}]}
    status = Column(String(20), default="pending")  # pending, active, rejected
    uptime_percent = Column(Float, default=100.0)
    avg_latency_ms = Column(Integer, default=0)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())

    provider = relationship("User", backref="apis")
