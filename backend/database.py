import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# DATABASE_URL can be provided by Railway (e.g. postgresql://user:pass@host:port/dbname)
# or Supabase / Neon / Render Postgres.
# Fallback to local SQLite if no external DB url is configured yet.
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./vallter_shop.db")

# Railway / Heroku often provide postgres://, which SQLAlchemy expects as postgresql://
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# SQLite needs connect_args for multithreading
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(
    DATABASE_URL,
    connect_args=connect_args,
    pool_pre_ping=True
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
