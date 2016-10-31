var code1 = document.getElementById('code1');
var code2 = document.getElementById('code2');
var code3 = document.getElementById('code3');
var code4 = document.getElementById('code4');

var code1Button = document.getElementById('code1Button');
var code2Button = document.getElementById('code2Button');
var code3Button = document.getElementById('code3Button');
var code3Button = document.getElementById('code4Button');

code1.style.display = 'none';
code2.style.display = 'none';
code3.style.display = 'none';
code4.style.display = 'none';

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block'){
        e.style.display = 'none';
        if(e.id == 'code1')
            code1Button.innerHTML = "Show Code";
        if(e.id == 'code2')
            code2Button.innerHTML = "Show Code";
        if(e.id == 'code3')
            code3Button.innerHTML = "Show Code";
        if(e.id == 'code4')
            code3Button.innerHTML = "Show Code";
    }
    else {
        e.style.display = 'block';
        if(e.id == 'code1')
            code1Button.innerHTML = "Hide Code";
        if(e.id == 'code2')
            code2Button.innerHTML = "Hide Code";
        if(e.id == 'code3')
            code3Button.innerHTML = "Hide Code";
        if(e.id == 'code4')
            code3Button.innerHTML = "Hide Code";
    }
}