
function PageComponent(bind,args) {

  bind(this);

  fs.mix(this,'ui/sidebar/SideBar');
  fs.mix(this,'ui/navbar/NavBar');
  this.breadCrumbs = fs.mixList(this, '.breadCrumbs');

  let model = [
    { 'url': "/", 'text': 'Cardiovascular  >  ', 'active': false },
    { 'url': "/", 'text': 'Physiology:Cardiovascular Physiology  >  ', 'active': false },
    { 'url': "/", 'text': 'Electrocardiography', 'active': true }
  ];

  model.forEach(e => this.breadCrumbs.push('ui/breadcrumb/Breadcrumb', e));
  fs.mix(this,'ui/Content');

}

module.exports = PageComponent;

