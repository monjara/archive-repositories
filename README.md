# archive-repositories
完了したリポジトリを追加
```
git remote add $REPOSITORY git@github.com:$ACCOUNT/$REPOSITORY
git fetch $REPOSITORY
git read-tree --prefix=$REPOSITORY/ $REPOSITORY/master
git checkout -- .
git add .
git commit -m "add $REPOSITORY"
git merge -s subtree $REPOSITORY/master --allow-unrelated-histories
```
