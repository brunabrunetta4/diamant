# Vallter Diamonds — Backend API

Modernes, performantes Python-Backend mit **FastAPI**, **SQLAlchemy** und **PostgreSQL** (Docker & Railway ready).

---

## 🚀 Features

- **FastAPI**: Schnelle, asynchrone REST-Endpunkte mit automatischer Swagger/OpenAPI-Dokumentation (`/docs`).
- **SQLAlchemy ORM**: Unterstützt Remote-SQL-Datenbanken (z. B. **PostgreSQL** auf Railway, Supabase oder Neon) mit automatischem Fallback auf lokales SQLite für Offline-Entwicklung.
- **Docker-Optimiert**: Schlankes `Dockerfile` (Python 3.12-slim) mit Multi-Process Uvicorn-Support und dynamic `PORT`-Handling.
- **Shop & Consultation Models**:
  - `Product`: Schmuck-Kollektionen, Preise, Kategorien, Tags.
  - `ConsultationInquiry`: Speichert VIP-Konsultationsanfragen der Homepage.
  - `Order`: Bestellungen & Checkout-Abwicklung.

---

## 🛠️ Lokale Entwicklung

### 1. Virtuelle Umgebung erstellen
```bash
cd backend
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate
```

### 2. Abhängigkeiten installieren
```bash
pip install -r requirements.txt
```

### 3. Server starten
```bash
uvicorn main:app --reload --port 8000
```
- Swagger API Docs: `http://localhost:8000/docs`
- Healthcheck: `http://localhost:8000/health`

---

## 🚂 Deployment auf Railway (Docker)

1. **Repository auf GitHub pushen** (inklusive des `/backend` Ordners).
2. Auf [railway.app](https://railway.app) ein neues Projekt anlegen.
3. **PostgreSQL Service hinzufügen**:
   - Klicke auf `+ New` -> `Database` -> `Add PostgreSQL`.
4. **Backend Service deployen**:
   - Klicke auf `+ New` -> `GitHub Repo` -> Wähle dieses Repository aus.
   - In den Service-Einstellungen als **Root Directory**: `backend` angeben.
   - Railway erkennt die `Dockerfile` und `railway.toml` automatisch.
5. **Environment Variables**:
   - Railway verknüpft die `DATABASE_URL` deiner Postgres-Datenbank automatisch mit dem Backend-Service, wenn du `${{Postgres.DATABASE_URL}}` als Variable setzt (oder innerhalb desselben Projekts verbindest).
