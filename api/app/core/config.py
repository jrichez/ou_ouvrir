from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = (
        "postgresql+psycopg://implantation_user:"
        "implantation_password@localhost:5433/implantation"
    )

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()