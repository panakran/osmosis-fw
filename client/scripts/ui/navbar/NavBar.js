function NavBar(bind, args) {
    
    bind(this);
    let model = [
        { iconClass: 'fi-flashcards fi notificationicon', notificationNumber: 73 },
        { iconClass: 'fi-doc-search fi notificationicon', notificationNumber: 0 },
        { iconClass: 'fi-rep-clock fi notificationicon', notificationNumber: 97 }
    ];
    
    model.forEach(e => fs.mixAppend($('.top-menu-element', this.dom), 'ui/notificationelement/NotificationElement', e));
}


NavBar.prototype.clickSearch = function (e,r) {
    alert("Search clicked")
}

NavBar.prototype.clickProfile = function () {
    alert("Profile button clicked");
}

module.exports = NavBar;