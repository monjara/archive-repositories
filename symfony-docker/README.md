# Symfony5系 + MySQL8.0 + Docker 環境構築
### プロジェクトをクローン
```
git clone git@github.com:monjara/symfony-docker.git
```
### Dockerfile docker-compose.yml default.conf 内のプロジェクト名変更
各ファイル内のsymfony-appを任意のプロジェクト名に変更
### docker 立ち上げ
```
docker-compose up -d
```
### カウントディレクトリのパスを確認
```
docker-compose exec php pwd
```
### プロジェクト作成
```
docker-compose exec php composer create-project symfony/website-skelton .
```