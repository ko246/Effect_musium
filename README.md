# hg_site
個人で作ったハーバリウムを投稿したり、オリジナルエフェクトを制作していきたいと考えています。


# 実行手順
(事前に/app_flask/containersに遷移してください。)
1. Dockerイメージを作成
    docker-compose build

2. 1.で作成したキャッシュを使い、イメージの構築から、コンテナの構築・起動
    docker-compose up

# 補足事項
1. 初めて立ち上げる場合は、下記コマンドでも問題ありません。
    docker-compose up --build

2. Dockerfileを変更した場合のイメージの修正
    docker-compose build --no-cache

※docker-compose.yamlを変更した場合上記コマンドを実行する必要はないが、コンテナの方の再作成を行う必要がある

3. 立ち上げたコンテナの停止
    docker-compose stop

4. 既存コンテナを再度起動
    docker-compose start

5. コンテナの停止・削除
    docker-compose down