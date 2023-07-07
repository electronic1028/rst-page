/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu');




/* 新添加
* 仓库:https://github.com/codingstartup/app
-store-expandable-card */




$('.card').on('click', function (e) {
  let card = $(e.currentTarget)
  let card_offset_scrolltop = $(card).offset().top - $(window).scrollTop()
  
  $(card).css('--data-offset-top', card_offset_scrolltop * -1 + 'px')
  
  $(card).toggleClass('active')
  
  let ratio = 480/420
  let height = $(window).height()
  height -= $(card).find('img').outerHeight() * ratio
  height -= $(card).find('h4').outerHeight() * ratio
  height /= ratio
  
  $(card).find('.content').css('height', height)
  
  if ($(card).hasClass('active')) {
    $('body').addClass('noscroll')
  } else {
    $('body').removeClass('noscroll')
  }
})


/* Activity */
fetch('../../activity/activity.json')
  .then(response => response.json())
  .then(data => {
    const title = document.querySelector('#ac_title')
    const time = document.querySelector('#ac_time')
    const split_line = document.querySelector('#ac_split_line')
    const body = document.querySelector('#ac_body')
    title.innerText = data.title
    time.innerText = data.time
    split_line.innerText = data.split_line
    body.innerHTML = data.body
  })
  .catch(console.error)


fetch('../../activity/activity_2.json')
  .then(response => response.json())
  .then(data => {
    const title_2 = document.querySelector('#ac_title_2')
    const time_2 = document.querySelector('#ac_time_2')
    const split_line_2 = document.querySelector('#ac_split_line_2')
    const body_2 = document.querySelector('#ac_body_2')
    title_2.innerText = data.title
    time_2.innerText = data.time
    split_line_2.innerText = data.split_line
    body_2.innerHTML = data.body
  })
  .catch(console.error)
