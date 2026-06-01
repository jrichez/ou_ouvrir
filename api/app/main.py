from fastapi import FastAPI

app = FastAPI(title="Carte Implantation API")

@app.get("/health")
def health_check():
    return {"status": "ok"}
