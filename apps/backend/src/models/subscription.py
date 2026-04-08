from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from src.database import Base


class Subscription(Base):
    __tablename__ = "subscriptions"

    id = Column(Integer, primary_key=True, index=True)
    consumer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    api_variant_id = Column(Integer, ForeignKey("api_variants.id"), nullable=False)
    plan = Column(String(50), nullable=False)  # free, hobby, pro
    status = Column(String(20), default="active")  # active, cancelled, expired
    current_period_start = Column(DateTime, nullable=False)
    current_period_end = Column(DateTime, nullable=False)
    cancel_at_period_end = Column(Boolean, default=False)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())

    consumer = relationship("User", foreign_keys=[consumer_id])
    api_variant = relationship("APIVariant", backref="subscriptions")
