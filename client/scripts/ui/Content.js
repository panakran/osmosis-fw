function Content(bind, args) {
  bind(this);

  fs.mix(this, 'ui/nextbar/NextBar');
  fs.mixAppend($('.addtoquizbar', this.dom), 'ui/addtoquizbar/AddToQuizBar', {flashcards:'26', questions:'0'})
  this.breadCrumbs = fs.mixList(this, '.breadCrumbs');

  let model = [
    { 'url': "/", 'text': 'Cardiovascular >', 'active': false },
    { 'url': "/", 'text': 'Physiology:Cardiovascular Physiology >', 'active': false },
    { 'url': "/", 'text': 'Electrocardiography', 'active': true }
  ];

  model.forEach(e => this.breadCrumbs.push('ui/breadcrumb/Breadcrumb', e));
}

module.exports = Content;