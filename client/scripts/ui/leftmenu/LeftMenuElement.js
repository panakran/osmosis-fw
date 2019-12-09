
function LeftMenuElement(bind, args) {
    console.log(args.imgUrl)
    this.imgUrl = ko.observable(args.imgUrl);
    this.text = args.text;
}

LeftMenuElement.prototype.leftMenuClick = function () {
    alert(`${this.text} button clicked`);
}

module.exports = LeftMenuElement;