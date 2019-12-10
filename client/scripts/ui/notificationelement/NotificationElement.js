function NotificationElement(bind, args) {
    this.imgUrl = args.imgUrl;
    this.notificationNumber = args.notificationNumber;
}

NotificationElement.prototype.topMenuClick = function () {
    alert(`You have ${this.notificationNumber} notifications`);
}

module.exports = NotificationElement;