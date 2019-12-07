//レンダラープロセスなのでremoteつける
var dialog = require('electron').remote.dialog;
var button = document.getElementById('button');
//ダイアログの選択肢とか
var dialogList = ["🍜", "🍣", "🥞"];
//押した時
button.onclick = function () {
    dialog.showMessageBox(null, {
        type: "info",
        message: "TypeScriptだぞ",
        buttons: dialogList
    });
};
//# sourceMappingURL=renderer.js.map