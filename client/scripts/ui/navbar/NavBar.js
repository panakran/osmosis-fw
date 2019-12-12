function NavBar(bind, args) {
    bind(this);

    let model = [
        { iconClass: 'fi-flashcards fi', notificationNumber: 73 },
        { iconClass: 'fi-doc-search fi', notificationNumber: 0 },
        { iconClass: 'fi-rep-clock fi', notificationNumber: 97 }
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