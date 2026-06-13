import json
from pathlib import Path

from sqlalchemy import create_engine, text


ROOT_DIR = Path(__file__).resolve().parents[1]

SQL_FILE = (
    ROOT_DIR
    / "app"
    / "db"
    / "queries"
    / "zone_preview.sql"
)

DATABASE_URL = "postgresql+psycopg://implantation_user:implantation_password@localhost:5433/implantation"


def main() -> None:
    sql = SQL_FILE.read_text(encoding="utf-8")

    params = {
        "lat": 50.6369,
        "lon": 3.0635,
        "radius_m": 1000,
    }

    engine = create_engine(DATABASE_URL)

    with engine.begin() as conn:
        result = conn.execute(text(sql), params).scalar_one()

    print(json.dumps(result, indent=2, ensure_ascii=False, default=str))


if __name__ == "__main__":
    main()