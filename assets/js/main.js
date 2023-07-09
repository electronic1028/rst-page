/*=============== SHOW MENU ===============*/
function menu(){
    
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
}
setTimeout(menu, 0);

/* 新添加
* 仓库:https://github.com/codingstartup/app
-store-expandable-card */

(function card(){
$('.click_card').on('click', function (e) {
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
})();

(function vue_config(){
new Vue({
      el: '#config',
      data() {
        return {
          title: ''
        }
      },
      mounted() {
        this.fetchs();
      },
      methods: {
        fetchs() {
          fetch('config.json')
            .then(response => response.json())
            .then(data => {
              this.title = data.title;
            })
            .catch(console.error);
        }
      }
    });
})();


console.log('main.js引入正常。');
  
  