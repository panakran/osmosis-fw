function NextBarElement(bind, args) {
    this.thumbnail = args.thumbnail;
    this.title = args.title;
    this.author = args.author;
    this.icon = args.icon;
}


NextBarElement.prototype.clickElement = function () {
    alert(`Next bar element ${this.title} clicked`);
}

module.exports = NextBarElement;