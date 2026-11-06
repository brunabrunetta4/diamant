import datetime
from sqlalchemy import Column, Integer, String, Float, Text, DateTime, Boolean
from database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False, index=True)
    category = Column(String(100), nullable=False, index=True)
    description = Column(Text, nullable=False)
    price = Column(Float, nullable=False)
    tag = Column(String(50), nullable=True) # e.g. Bestseller, Unikat, Signature
    image_url = Column(String(500), nullable=False)
    in_stock = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class ConsultationInquiry(Base):
    __tablename__ = "consultation_inquiries"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), nullable=False)
    name = Column(String(255), nullable=True)
    phone = Column(String(100), nullable=True)
    message = Column(Text, nullable=True)
    status = Column(String(50), default="NEW") # NEW, CONTACTED, ARCHIVED
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    customer_email = Column(String(255), nullable=False)
    customer_name = Column(String(255), nullable=False)
    shipping_address = Column(Text, nullable=False)
    total_amount = Column(Float, nullable=False)
    status = Column(String(50), default="PENDING") # PENDING, PAID, SHIPPED, CANCELLED
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
