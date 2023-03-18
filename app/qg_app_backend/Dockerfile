FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir /qg_app_backend
WORKDIR /qg_app_backend

COPY . /qg_app_backend/

RUN apt-get update

RUN apt-get install -y cmake

RUN git clone https://github.com/google/sentencepiece.git \
    && cd sentencepiece \
    && mkdir build \
    && cd build \
    && cmake .. -DSPM_ENABLE_SHARED=OFF -DCMAKE_INSTALL_PREFIX=./root \
    && make install \
    && cd ../python \
    && python setup.py bdist_wheel \
    && pip install dist/sentencepiece*.whl

RUN pip install -r requirements.txt

EXPOSE 80