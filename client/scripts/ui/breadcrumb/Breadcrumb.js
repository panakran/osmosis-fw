function Breadcrumb(bind, args) {
    this.url = args.url;
    this.text = args.text;
    this.active = args.active;
  }
  
  
  Breadcrumb.prototype.clickMenu = function () {
      console.log("ds", this);
    // alert(`${this.breadCrumbs} button clicked`);
  }
  
module.exports = Breadcrumb;