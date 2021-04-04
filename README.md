# nvim
## 使い方
### プラグイン

| プラグイン | 説明                                                                        |
|:----------:|:----------------------------------------------------------------------------|
| NERDTree   | F2: NERDTreeを開く <br> F3: NERDTreeを閉じる                                |
| commentary | gcc: 行をコメント <br> gc + motion: motionをコメントアウト                  |
| fugitive   | gitコマンド補完（[Gitマッピング](https://github.com/monjara/nvim#git)参照） |
| airline    | |


### マッピング
#### Git

| コマンド   | 説明                    |
|:----------:|:------------------------|
| ,ga        | git add .               |
| ,gc        | git commit .            |
| ,gsh       | git push                |
| ,gll       | git pull                |
| ,gs        | git status              |
| ,gb        | git blame               |
| ,gd        | git vdiff               |
| ,gr        | git remove              |

#### Split

現在開いているファイルに対して作用する。

| コマンド   | 説明                    |
|:----------:|:------------------------|
| ,h         | split                   |
| ,v         | vsplit                  |

#### session management

| コマンド   | 説明                    |
|:----------:|:------------------------|
| ,so        | :OpenSession            |
| ,ss        | :SaveSession            |
| ,sd        | :DeleteSession          |
| ,sc        | :CloseSession           |

#### session management

| コマンド   | 説明                    |
|:----------:|:------------------------|
| \<Tab\>      | gt                      |
| \<S-Tab\>    | gT                      |
| \<S-t\>      | tabnew                  |

