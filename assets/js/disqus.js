var btn = document.getElementById('showBtn');
if (btn) {
    btn.addEventListener('click', function () {
        var disqus = document.getElementById('dsq-2');
        if (!disqus) {
            btn.text = 'Скрыть комментарии';
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + 'bizikov.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        } else {
            btn.text = 'Оставить комментарий';
            document.getElementById('disqus_thread').innerHTML = '';
        }
    });
}