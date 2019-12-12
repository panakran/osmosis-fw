function SideBar(bind, args) {
  bind(this);

  let model = [
    { iconClass: 'fi-clinical fi', text: 'Library' },
    { iconClass: 'fi-schedule-nav fi', text: 'Step 1 Schedule' },
    { iconClass: 'fi-builder fi', text: 'Quiz Builder' },
    { iconClass: 'fi-group fi', text: 'Team Workspace' },
    { iconClass: 'fi-more fi', text: 'Add Tools' },
    { iconClass: 'fi-question-nav fi', text: 'Help' }
  ];
  
  model.forEach(elem => fs.mixAppend($('.left-menu-element', this.dom), 'ui/sidebar/SideBarElement', elem));
}


SideBar.prototype.clickMenu = function () {
  alert("Menu button clicked");
}

module.exports = SideBar;