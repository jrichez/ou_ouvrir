from fastapi import APIRouter, HTTPException

from app.schemas.zone_preview import ZonePreviewRequest
from app.services.zone_analysis import get_zone_preview


router = APIRouter(
    prefix="/analyses",
    tags=["analyses"],
)


@router.post("/zone-preview")
def zone_preview(payload: ZonePreviewRequest):
    try:
        return get_zone_preview(payload)
    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Erreur pendant le calcul de zone : {exc}",
        ) from exc