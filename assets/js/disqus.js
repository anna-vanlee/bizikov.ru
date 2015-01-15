var btn = document.getElementById('showBtn');
btn.addEventListener('click', function () {
    btn.style.display = 'none';
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + 'bizikov.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
});