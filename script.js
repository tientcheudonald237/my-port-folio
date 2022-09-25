var li = document.querySelectorAll('.links');
var section = document.querySelectorAll('section');

function activeli(){
    var len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop ){}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}
activeli();

window.addEventListener('scroll',activeli);