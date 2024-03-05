let menuContent = document.getElementById('menuContent')
let btnNav = document.getElementById('btnNav')

btnNav.addEventListener('click', ()=>{
    menuContent.classList.toggle('is-active')
    btnNav.classList.toggle('is-active')
})
