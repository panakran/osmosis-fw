function NextBarElement(bind, args) {
    this.thumbnail = args.thumbnail;
    this.url = args.url;
    this.title = args.title;
    this.author = args.author;
}


NextBarElement.prototype.clickElement = function () {
    alert(`Next bar element ${this.title} clicked`);
}

module.exports = NextBarElement;