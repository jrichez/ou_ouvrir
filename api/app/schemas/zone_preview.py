from pydantic import BaseModel, Field


class ZonePreviewRequest(BaseModel):
    lat: float = Field(..., ge=-90, le=90)
    lon: float = Field(..., ge=-180, le=180)
    radius_m: int = Field(..., ge=100, le=10000)
    activity: str = "restaurant"
    address: str | None = None