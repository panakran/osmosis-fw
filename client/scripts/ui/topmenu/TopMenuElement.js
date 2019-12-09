function TopMenuElement(bind, args) {
    this.imgUrl = args.imgUrl;
    this.notificationNumber = args.notificationNumber;
}

TopMenuElement.prototype.topMenuClick = function () {
    alert(`You have ${this.notificationNumber} notifications`);
}

module.exports = TopMenuElement;