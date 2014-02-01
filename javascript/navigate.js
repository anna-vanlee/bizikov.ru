document.onkeydown = NavigateThrough;


function NavigateThrough(event) {
    var link;
    switch (event.keyCode ? event.keyCode : event.which ? event.which : null) {
        case 0x25:
            link = document.getElementById('previous');
            console.log("Нажал на левую стрелку");
            break;
        case 0x27:
            link = document.getElementById('next');
            console.log("Нажал на правую стрелку");
            break;
    }
    if (link && link.href) document.location = link.href;
}