function paginator(url) {
    var params = {
        scrolled: window.pageYOffset || document.documentElement.scrollTop,
        height: document.body.scrollHeight,
        windowHeight: document.documentElement.clientHeight
    };

    var nextArticle = {
        start: function () {
            var i = 0;
            window.progress = setInterval(function () {
                document.getElementById('progress').style.width = i + '%';
                i++;
                if (i > 100) {
                    clearInterval(progress);
                    window.location.href = url;
                }
            }, 10);
        },
        stop: function () {
            clearInterval(progress);
            document.getElementById('progress').style.width = '0%';
        }
    }

    if (params.height - params.scrolled - params.windowHeight == 0) {
        nextArticle.start(200);
    } else {
        nextArticle.stop();
    }
}