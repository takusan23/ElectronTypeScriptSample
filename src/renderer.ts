//レンダラープロセスなのでremoteつける
const { dialog } = require('electron').remote

const button: HTMLElement = document.getElementById('button')

//ダイアログの選択肢とか
const dialogList: string[] = ["🍜", "🍣", "🥞"]

//押した時
button.onclick = function () {
    dialog.showMessageBox(null, {
        type: "info",
        message: "TypeScriptだぞ",
        buttons: dialogList
    })
}
