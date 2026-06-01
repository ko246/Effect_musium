# ベースとなるOSとPython（3.12）を用意する
FROM python:3.12

# コンテナ内に「app」という作業用のフォルダを作る
WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

# コンテナが立ち上がった時に、Pythonでアプリを起動する
CMD ["python", "src/app.py"]