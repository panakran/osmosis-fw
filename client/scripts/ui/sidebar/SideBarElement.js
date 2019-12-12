
function SideBarElement(bind, args) {
    this.iconClass = args.iconClass;
    this.text = args.text;
}

SideBarElement.prototype.leftMenuClick = function () {
    alert(`${this.text} button clicked`);
}

module.exports = SideBarElement;