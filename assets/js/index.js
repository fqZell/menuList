const menuBtn = document.querySelector('.menuBtn')
const menuList = document.querySelector('.menuList')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show')
})