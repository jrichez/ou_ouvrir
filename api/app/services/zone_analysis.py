from pathlib import Path
from typing import Any

from sqlalchemy import text

from app.db.session import engine
from app.schemas.zone_preview import ZonePreviewRequest


SQL_FILE = (
    Path(__file__).resolve().parents[1]
    / "db"
    / "queries"
    / "zone_preview.sql"
)


def get_zone_preview(payload: ZonePreviewRequest) -> dict[str, Any]:
    sql = SQL_FILE.read_text(encoding="utf-8")

    params = {
        "lat": payload.lat,
        "lon": payload.lon,
        "radius_m": payload.radius_m,
    }

    with engine.begin() as conn:
        result = conn.execute(text(sql), params).scalar_one()

    return result