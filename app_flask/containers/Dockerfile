# ベースとなるOSとPython（3.12）を用意する
FROM python:3.12

# コンテナ内に作業用のフォルダを設定
WORKDIR /app

# 依存関係ファイルをコピー
COPY requirements.txt .

# 依存関係をインストール
RUN pip install -r requirements.txt

# コンテナが立ち上がった時に、Pythonでアプリを起動する
CMD ["python", "src/app.py"]