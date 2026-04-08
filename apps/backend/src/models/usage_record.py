from sqlalchemy import Column, Integer, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from src.database import Base


class UsageRecord(Base):
    __tablename__ = "usage_records"

    id = Column(Integer, primary_key=True, index=True)
    subscription_id = Column(Integer, ForeignKey("subscriptions.id"), nullable=False)
    consumer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    api_variant_id = Column(Integer, ForeignKey("api_variants.id"), nullable=False)
    request_count = Column(Integer, default=1)
    period_start = Column(DateTime, nullable=False)
    period_end = Column(DateTime, nullable=False)
    created_at = Column(DateTime, server_default=func.now())

    subscription = relationship("Subscription", backref="usage_records")
    consumer = relationship("User", foreign_keys=[consumer_id])
    api_variant = relationship("APIVariant")
