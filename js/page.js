/**
 * Created by Deepak on 26-03-2017.
 */
window.onload = function () {
    selection("page1");
};

function selection(id) {

    if (id == "page1"){
        hide(0);
    }
    else if(id == "page2"){
        hide(2);
    }
    else if(id == "page3"){
        hide(4);
    }
    else if(id == "page4"){
        hide(6);
    }
    else if(id == "page5"){
        hide(8);
    }
}

function hide(j) {
    var c = document.querySelectorAll(".content-row2");
    for (var i = c.length - 1; i >= 1; i-=2) {
        if (i == j+1) {
            c[j].style.display = 'block';
            c[j+1].style.display = 'block';
        }
        else {
            c[i].style.display = 'none';
            c[i-1].style.display = 'none';
            console.log(c[i].getAttribute('id'));
        }
    }
}