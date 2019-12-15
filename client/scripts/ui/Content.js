function Content(bind, args) {
  bind(this);

  fs.mix(this, 'ui/nextbar/NextBar');
  fs.mixAppend($('.addtoquizbar', this.dom), 'ui/addtoquizbar/AddToQuizBar', {flashcards:'26', questions:'0', flashcardsText:'   FLASHCARDS', questionsText:'   QUESTIONS'})
}

module.exports = Content;