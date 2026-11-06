from typing import Optional
from datetime import datetime
from pydantic import BaseModel, EmailStr

# Product Schemas
class ProductBase(BaseModel):
    title: str
    category: str
    description: str
    price: float
    tag: Optional[str] = None
    image_url: str
    in_stock: bool = True

class ProductCreate(ProductBase):
    pass

class ProductResponse(ProductBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Inquiry Schemas
class InquiryCreate(BaseModel):
    email: EmailStr
    name: Optional[str] = None
    phone: Optional[str] = None
    message: Optional[str] = None

class InquiryResponse(InquiryCreate):
    id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

# Order Schemas
class OrderCreate(BaseModel):
    customer_email: EmailStr
    customer_name: str
    shipping_address: str
    total_amount: float

class OrderResponse(OrderCreate):
    id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
