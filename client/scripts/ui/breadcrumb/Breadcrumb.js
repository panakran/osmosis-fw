function Breadcrumb(bind, args) {
    this.url = args.url;
    this.text = args.text;
    this.active = args.active;
  }
  
  
  Breadcrumb.prototype.breadCrumClick = function () {
    alert(`${this.text} clicked`);
  }
  
module.exports = Breadcrumb;