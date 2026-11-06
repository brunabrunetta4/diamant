import os
from typing import List
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, Base, get_db
import models
import schemas

# Create database tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Vallter Diamonds API",
    description="Luxury Jewellery & Fine Diamonds E-Commerce Backend for Railway Deployment",
    version="1.0.0"
)

# Enable CORS for React frontend (both local dev and production URLs)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust with specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Seed initial luxury products if database is fresh
def seed_initial_products(db: Session):
    if db.query(models.Product).first() is None:
        sample_items = [
            models.Product(
                title="The Solitaire Eternity",
                category="Verlobungsringe",
                description="Handgefertigte Platin-Fassung mit einem makellosen Brillanten im Idealschliff für maximale Lichtbrechung.",
                price=4850.0,
                tag="Bestseller",
                image_url="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
            ),
            models.Product(
                title="Royal Marquise Cascade",
                category="High Jewellery",
                description="Ein Collier von royaler Anmut – kunstvoll gefasste Diamanten im Navette-Schliff, die zeitlose Exklusivität verkörpern.",
                price=12400.0,
                tag="Unikat",
                image_url="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
            ),
            models.Product(
                title="Aurum Pavé Symphony",
                category="Ohrschmuck & Ohrringe",
                description="18 Karat Feingold umrahmt von Hunderten mikroskopisch präzise gefassten Diamanten im Pavé-Stil.",
                price=3200.0,
                tag="Signature",
                image_url="https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80"
            ),
            models.Product(
                title="Vallter Celestial Bangle",
                category="Armbänder",
                description="Zeitgenössische Eleganz trifft höchste Goldschmiedekunst mit fließenden goldenen Reflexen.",
                price=6100.0,
                tag="Neuheit",
                image_url="https://images.unsplash.com/photo-1611591475819-79b8b73ff2f3?auto=format&fit=crop&w=800&q=80"
            )
        ]
        db.add_all(sample_items)
        db.commit()

# On Startup
@app.on_event("startup")
def on_startup():
    db = next(get_db())
    seed_initial_products(db)

# Healthcheck endpoint (Crucial for Railway health checks)
@app.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "online",
        "service": "Vallter Diamonds Backend",
        "database": os.getenv("DATABASE_URL", "sqlite")[:15] + "..."
    }

# Products API
@app.get("/api/products", response_model=List[schemas.ProductResponse], tags=["Products"])
def get_products(db: Session = Depends(get_db)):
    """Fetch all jewellery and diamond collections"""
    return db.query(models.Product).all()

@app.get("/api/products/{product_id}", response_model=schemas.ProductResponse, tags=["Products"])
def get_product(product_id: int, db: Session = Depends(get_db)):
    """Fetch a single product by ID"""
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.post("/api/products", response_model=schemas.ProductResponse, status_code=status.HTTP_201_CREATED, tags=["Products"])
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    """Admin endpoint to create a new product"""
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

# Consultation Inquiries API
@app.post("/api/inquiries", response_model=schemas.InquiryResponse, status_code=status.HTTP_201_CREATED, tags=["Consultations"])
def create_inquiry(inquiry: schemas.InquiryCreate, db: Session = Depends(get_db)):
    """Endpoint for the VIP Consultation booking form on the homepage"""
    db_inquiry = models.ConsultationInquiry(**inquiry.dict())
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)
    return db_inquiry

@app.get("/api/inquiries", response_model=List[schemas.InquiryResponse], tags=["Consultations"])
def get_inquiries(db: Session = Depends(get_db)):
    """Admin endpoint to view inquiries"""
    return db.query(models.ConsultationInquiry).order_by(models.ConsultationInquiry.created_at.desc()).all()

# Orders API
@app.post("/api/orders", response_model=schemas.OrderResponse, status_code=status.HTTP_201_CREATED, tags=["Orders"])
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    """Create a shop order"""
    db_order = models.Order(**order.dict())
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    return db_order
