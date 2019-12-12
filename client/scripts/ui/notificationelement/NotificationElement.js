function NotificationElement(bind, args) {
    this.iconClass = args.iconClass;
    this.notificationNumber = args.notificationNumber;
}

NotificationElement.prototype.topMenuClick = function () {
    alert(`You have ${this.notificationNumber} notifications`);
}

module.exports = NotificationElement;