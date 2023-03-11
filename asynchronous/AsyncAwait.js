import fetch from 'node-fetch';

// 関数を定義するときにはasyncをつけて、その中で非同期にしたい処理にawait
// 非同期処理をおこなう関数を宣言
const getGitUsername = async () => {
    const message = 'GitのユーザーIDは';
    const url = 'https://api.github.com/users/deatiger'

    const json = await fetch(url)
        .then(res => {
            console.log('これは非同期処理成功時のメッセージです')
            return res.json()
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです。', error)
            return null
        });

    const username = json.login;
    console.log(message + username)
}

getGitUsername()
