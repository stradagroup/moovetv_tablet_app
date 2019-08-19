
let app = {
    isLive: false,
    start() {
        app.isLive = true;
        app.keepAwake();

    },
    keepAwake() {
        window.plugins.insomnia.keepAwake();
    }
}
document.addEventListener("deviceready", app.start, false);

window.loadUrl = function (url) {
    if(app.isLive){
        var ref = cordova.InAppBrowser.open(url, "_blank", {});
    }
    else {
        alert(url);
    }

}
