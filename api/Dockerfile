FROM python:3.9.13-slim-bullseye

ENV PYTHONUNBUFFERED 1

WORKDIR /app/api

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .