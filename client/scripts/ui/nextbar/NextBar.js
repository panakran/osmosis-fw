function NextBar(bind, args) {
    bind(this);

    let model = [
        { thumbnail: '/dsds', url: '/ds', title: 'Electrocardiography Handwritten', author: 'Youtube' },
        { thumbnail: '/dsds', url: '/ds', title: 'Electrocardiography Khan Academy', author: 'Youtube' },
        { thumbnail: '/dsds', url: '/ds', title: '12 Lead Contiguous Leads-Lateral Wall MI', author: 'Picmonic' }
    ]
    model.forEach(e => fs.mixAppend($('.nextbar-element', this.dom), 'ui/nextbar/MemoryAnchorElement', e))
}


NextBar.prototype.clickElement = function () {
    alert("Next bar element clicked");
}

module.exports = NextBar;