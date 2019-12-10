
function SideBarElement(bind, args) {
    this.imgUrl = args.imgUrl;
    this.text = args.text;
}

SideBarElement.prototype.leftMenuClick = function () {
    alert(`${this.text} button clicked`);
}

module.exports = SideBarElement;