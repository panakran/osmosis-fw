function NavBar(bind, args) {
    bind(this);

    let model = [
        { imgUrl: '/dsds', notificationNumber: 73 },
        { imgUrl: '/dsds', notificationNumber: 0 },
        { imgUrl: '/dsds', notificationNumber: 97 }
    ];

    model.forEach(e => fs.mixAppend($('.top-menu-element', this.dom), 'ui/notificationelement/NotificationElement', e));
}


NavBar.prototype.clickSearch = function () {
    alert("Search button clicked");
}

NavBar.prototype.clickProfile = function () {
    alert("Profile button clicked");
}

module.exports = NavBar;