# archive-repositories
## 使い方
- リポジトリを取得
```
git clone git@github.com:monjara/archive-repositories.git
cd archive-repositories
```

- 完了したリポジトリを追加
```
git remote add $REPOSITORY git@github.com:monjara/$REPOSITORY.git
git fetch $REPOSITORY
git read-tree --prefix=$REPOSITORY/ $REPOSITORY/main
git checkout -- .
git add .
git commit -m "add $REPOSITORY"
git merge -s subtree $REPOSITORY/main --allow-unrelated-histories -m "Merge remote-tracking branch "\'"$REPOSITORY/main"\'" into main"
git push -u origin main
```

- リポジトリの切り出し
```
git clone git@github.com:monjara/archive-repositories.git git@github.com:monjara/$REPOSITORY.git
cd $REPOSITORY
git filter-branch --subdirectory-filter subdir HEAD
```
