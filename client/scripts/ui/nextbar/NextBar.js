function NextBar(bind, args) {
    bind(this);

    let model = [
        {
            thumbnail: 'https://d16qt3wv6xm098.cloudfront.net/5s6MQgmrSD_2Q3GjhxabpBgGRwuSghw6/_.jpg',
            title: 'Electrocardiography Handwritten',
            author: 'Youtube',
            icon: 'https://blog.hootsuite.com/wp-content/uploads/2018/09/yt_icon_rgb-310x219.png'
        },
        {
            thumbnail: 'https://d16qt3wv6xm098.cloudfront.net/uwKvi18vTIiR2orcrbtJaM7FS3uxCfR4/_.jpg',
            title: 'Electrocardiography Khan Academy',
            author: 'Youtube',
            icon: 'https://blog.hootsuite.com/wp-content/uploads/2018/09/yt_icon_rgb-310x219.png'
        },
    ]
    model.forEach(e => fs.mixAppend($('.nextbar-element', this.dom), 'ui/nextbar/MemoryAnchorElement', e))
}


NextBar.prototype.clickElement = function () {
    alert("Next bar element clicked");
}

module.exports = NextBar;