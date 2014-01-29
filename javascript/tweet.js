function selectionTweet() {
    var selection = window.getSelection().toString(),
        href = window.location.href,
        tweetMaxLength = 140,
        tweetUrl = 'https://twitter.com/intent/tweet?text=',
        meta = {
            s: selection.length,
            h: href.length
        };
    if (meta.s > (tweetMaxLength - meta.h)) {
        var extraCharacters = tweetMaxLength - meta.h;
        selection = selection.slice(0, extraCharacters - 1);
    }

    if (selection != '') {
        tweet = tweetUrl + selection + ' ' + href;
        return tweet
    }
}

document.onmouseup = function () {
    var selection = window.getSelection();
    if (selection.type == 'Range' && selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        var tweet = document.createElement('a');
        tweet.href = selectionTweet();
        range.surroundContents(tweet);
    }
}