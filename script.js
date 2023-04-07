let burger = document.getElementsByClassName('menu_burger')[0]
let menu = document.getElementsByClassName('header_menu')[0]
let text = document.getElementsByClassName('menu_button_text')[0]
let menu_buttton = document.getElementsByClassName('menu_buttton')[0]
let body = document.querySelector('body')
let list_item = document

menu.childNodes[1].addEventListener('click', ()=>{
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    text.classList.toggle('active')
    menu_buttton.classList.toggle('active')
    body.classList.toggle('lock')
})
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    text.classList.toggle('active')
    menu_buttton.classList.toggle('active')
    body.classList.toggle('lock')
})