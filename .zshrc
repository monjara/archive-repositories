# Set up the prompt

autoload -Uz promptinit
promptinit
prompt adam1

setopt histignorealldups sharehistory

# Use emacs keybindings even if our EDITOR is set to vi
bindkey -e

# Keep 1000 lines of history within the shell and save it to ~/.zsh_history:
HISTSIZE=1000
SAVEHIST=1000
HISTFILE=~/.zsh_history

# Use modern completion system
autoload -Uz compinit
compinit

zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' menu select=2
eval "$(dircolors -b)"
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'
zstyle ':completion:*' menu select=long
zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
zstyle ':completion:*' use-compctl false
zstyle ':completion:*' verbose true

zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'
zstyle ':completion:*:kill:*' command 'ps -u $USER -o pid,%cpu,tty,cputime,cmd'

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# git
function rprompt-git-current-branch {
local branch_name st branch_status

if [ ! -e ".git" ]; then
return
fi
branch_name=`git rev-parse --abbrev-ref HEAD 2> /dev/null`
st=`git status 2> /dev/null`
if [[ -n `echo "$st" | grep "^nothing to"` ]]; then
branch_status="%F{green}"
elif [[ -n `echo "$st" | grep -E "^追跡されていないファイル:|^Untracked files"` ]]; then
branch_status="%F{red}?"
elif [[ -n `echo "$st" | grep "^Changes not staged for commit"` ]]; then
branch_status="%F{red}+"
elif [[ -n `echo "$st" | grep -E "^コミット予定の変更点:|^Changes to be committed"` ]]; then
branch_status="%F{yellow}!"
elif [[ -n `echo "$st" | grep "^rebase in progress"` ]]; then
echo "%F{red}!(no branch)"
return
else
branch_status="%F{blue}"
fi
echo "${branch_status}[$branch_name]"
}

setopt prompt_subst
RPROMPT='`rprompt-git-current-branch`'

GIT_PS1_SHOWDIRTYSTATE=true
GIT_PS1_SHOWUNTRACKEDFILES=true
GIT_PS1_SHOWSTASHSTATE=true
GIT_PS1_SHOWUPSTREAM=auto

# alias設定
alias vi='nvim'
alias vv='nvim ~/.config/nvim/local_init.vim'
alias vvb='nvim ~/.config/nvim/local_bundle.vim'
alias cv='cd ~/.config/nvim'
alias vz='nvim ~/.zshrc'
alias vlz='nvim ~/.zshrc_local'
alias sz='source ~/.zshrc'
alias cz='cd ~/Develop/Zsh'
alias ga='git add'
alias gc='git commit'
alias gp='git push -u'
alias gl='git log'
alias gs='git status'
alias t='test'

# .zsh_local読み込み
[ -f $ZDOTDIR/.zshrc_local ] && . $ZDOTDIR/.zshrc_local
