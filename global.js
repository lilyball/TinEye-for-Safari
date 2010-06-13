safari.application.addEventListener("command", commandHandler, false);
safari.application.addEventListener("validate", validateHandler, false);

function commandHandler(event) {
    if (event.command == "open-image") {
        // open the image in TinEye
        // the window is event.target.contextMenu.tab.browserWindow
        open_tab_for_image(event.userInfo.url, event.currentTarget.activeBrowserWindow)
    }
}

function validateHandler(event) {
    if (event.command == "open-image") {
        // validate the menu item
        // the window is event.target.contextMenu.tab.browserWindow
        // event.target.disabled = true to disable
        event.target.disabled = !validateNode(event.userInfo)
    }
}

function validateNode(userInfo) {
    const MAX_SIZE = 30
    if (userInfo.name != "IMG") {
        return false
    }
    if (userInfo.width < MAX_SIZE || userInfo.height < MAX_SIZE) {
        return false
    }
    if (!userInfo.url || userInfo.url.substring(0,7) != 'http://') {
        return false
    }
    return true
}

function open_tab_for_image(url, window) {
    url = "http://www.tineye.com/search/?url=" + escape(url)
    var tab = window.openTab()
    tab.url = url
}
