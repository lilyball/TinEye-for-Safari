window.addEventListener("contextmenu", menuHandler, false);

function menuHandler(event) {
    var userInfo = {
        name: event.target.nodeName,
        url: event.target.src,
        width: event.target.width,
        height: event.target.height
    }
    safari.self.tab.setContextMenuEventUserInfo(event, userInfo)
}
