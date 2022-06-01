FROM python:3.9.13-slim-bullseye

WORKDIR /backend

COPY requirements.txt /backend/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /backend/requirements.txt

COPY . /backend