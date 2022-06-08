import sys
from fastapi.testclient import TestClient

sys.path.append("..")
from main import app

client = TestClient(app)

def test_read_users():
    response = client.get("/api/users/")
    assert response.status_code == 200