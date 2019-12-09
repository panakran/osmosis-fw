function TopMenu(bind, args) {
    bind(this);

    fs.mixAppend($('.top-menu-element', this.dom), 'ui/topmenu/TopMenuElement', { imgUrl: '/dsds', notificationNumber: 73 });
    fs.mixAppend($('.top-menu-element', this.dom), 'ui/topmenu/TopMenuElement', { imgUrl: '/dsds', notificationNumber: 0 });
    fs.mixAppend($('.top-menu-element', this.dom), 'ui/topmenu/TopMenuElement', { imgUrl: '/dsds', notificationNumber: 97 });
}


TopMenu.prototype.clickSearch = function () {
    alert("Search button clicked");
}

TopMenu.prototype.clickProfile = function () {
    alert("Profile button clicked");
}

module.exports = TopMenu;