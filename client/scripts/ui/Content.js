function Content(bind, args) {
    bind(this);
    this.breadCrumbs = fs.mixList(this,'.breadCrumbs');

    this.breadCrumbs.push('ui/breadcrumb/Breadcrumb',{ 'url': "/", 'text': 'Cardiovascular >', 'active': false });
    this.breadCrumbs.push('ui/breadcrumb/Breadcrumb',{ 'url': "/", 'text': 'Physiology:Cardiovascular Physiology >', 'active': false });
    this.breadCrumbs.push('ui/breadcrumb/Breadcrumb',{ 'url': "/", 'text': 'Electrocardiography', 'active': true });
  }
  
  
//   LeftMenu.prototype.clickMenu = function () {
//     alert("Menu button clicked");
//   }
  
module.exports = Content;