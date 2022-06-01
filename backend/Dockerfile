FROM python:3.9.13-slim-bullseye

WORKDIR app/backend

COPY requirements.txt ./

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . ./