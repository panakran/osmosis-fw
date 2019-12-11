function SideBar(bind, args) {
  bind(this);

  let model = [
    { imgUrl: 'https://knockoutjs.com/img/ko-logo.png', text: 'Library' },
    { imgUrl: '/dsds', text: 'Step 1 Schedule' },
    { imgUrl: '/dsds', text: 'Quiz Builder' },
    { imgUrl: '/dsds', text: 'Team Workspace' },
    { imgUrl: '/lorempixel.com/300/200', text: 'Library' },
    { imgUrl: '/dsds', text: 'Add Tools' },
    { imgUrl: '/dsds', text: 'Help' },
  ];
  model.forEach(elem => fs.mixAppend($('.left-menu-element', this.dom), 'ui/sidebar/SideBarElement', elem));
}


SideBar.prototype.clickMenu = function () {
  alert("Menu button clicked");
}

module.exports = SideBar;