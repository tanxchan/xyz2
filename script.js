
let l = document.getElementsByClassName('language');
for (let i = 0; i<l.length;i++){
    l[i].addEventListener('click', ()=>{document.getElementsByClassName('languages')[0].scrollIntoView()})
}
let s = document.getElementsByClassName('data-sci');
for (let i = 0; i<s.length;i++){
    s[i].addEventListener('click', ()=>{document.getElementsByClassName('data-scis')[0].scrollIntoView()})
}
let b = document.getElementsByClassName('business');
for (let i = 0; i<b.length;i++){
    b[i].addEventListener('click', ()=>{document.getElementsByClassName('businesses')[0].scrollIntoView()})
}

document.onscroll