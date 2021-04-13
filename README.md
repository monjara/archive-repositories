# nvim
## 使い方
### 追加設定

追加する設定は下記ファイルに記述する。
- local_init.vim
- local_bundles.vim

プラグイン追加後は以下コマンド実行
```
:PlugInstall
```
### プラグイン

| プラグイン | 説明                                                                        |
|:----------:|:----------------------------------------------------------------------------|
| NERDTree   | F2: NERDTreeを開く <br> F3: NERDTreeを閉じる                                |
| commentary | gcc: 行をコメント <br> gc + motion: motionをコメントアウト                  |
| fugitive   | gitコマンド補完（[Gitマッピング](https://github.com/monjara/nvim#git)参照） |
| gitgutter  | 差分表示                                                                    |
| airline    | ステータスバーデザイン変更                                                  |
| grep.vim   | 検索機能([詳細](https://github.com/vim-scripts/grep.vim))                   |


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

