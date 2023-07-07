// 创建导航栏组件
const Navbar = {
               template: `
<header class="header">
         <nav class="nav container">
            <div class="nav__data">
               <a href="/" class="nav__logo">
                   RSTeam
               </a>
               
               <div class="nav__toggle" id="nav-toggle">
                  <i class="ri-menu-line nav__burger"></i>
                  <i class="ri-close-line nav__close"></i>
               </div>
            </div>

            <!--=============== NAV MENU ===============-->
            <div class="nav__menu" id="nav-menu">
               <ul class="nav__list">
                  <li><a href="/" class="nav__link">首页</a></li>


                  <!--=============== DROPDOWN 1 ===============-->
                  <li class="dropdown__item">
                     <div class="nav__link">
                        项目 <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul class="dropdown__menu">
                        <li>
                           <a href="/projectproject/ultra" class="dropdown__link">
                               Ultra
                           </a>                          
                        </li>

                        <li>
                           <a href="/project/ultra" class="dropdown__link">
                              Leaping
                           </a>
                        </li>

                        <!--=============== DROPDOWN SUBMENU ===============
                        <li class="dropdown__subitem">
                           <div class="dropdown__link">
                              <i class="ri-bar-chart-line"></i> Reports <i class="ri-add-line dropdown__add"></i>
                           </div>

                           <ul class="dropdown__submenu">
                              <li>
                                 <a href="#" class="dropdown__sublink">
                                    <i class="ri-file-list-line"></i> Documents
                                 </a>
                              </li>
      
                              <li>
                                 <a href="#" class="dropdown__sublink">
                                    <i class="ri-cash-line"></i> Payments
                                 </a>
                              </li>
      
                              <li>
                                 <a href="#" class="dropdown__sublink">
                                    <i class="ri-refund-2-line"></i> Refunds
                                 </a>
                              </li>
                           </ul>
                        </li>
                      -->
                     </ul>
                  </li>
                  <li><a href="/posts" class="nav__link">文章</a></li>
                  <li><a href="/policy" class="nav__link">政策&协议</a></li>
                  <li><a href="/about" class="nav__link">关于</a></li>

                  <!--=============== DROPDOWN 2 ===============
                  <li class="dropdown__item">
                     <div class="nav__link">
                        Users <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul class="dropdown__menu">
                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-user-line"></i> Profiles
                           </a>                          
                        </li>

                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-lock-line"></i> Accounts
                           </a>
                        </li>

                        <li>
                           <a href="#" class="dropdown__link">
                              <i class="ri-message-3-line"></i> Messages
                           </a>
                        </li>
                     </ul>
                  </li>
-->
                  <li><a href="https://chatbot.weixin.qq.com/webapp/h8zkTvBoZEMALLAQYTg8sY6118uKOV?robotName=%E5%B0%8F%E5%93%8D" class="nav__link">帮助</a></li>
               </ul>
            </div>
         </nav>
      </header>
    `
  };


  // 创建App组件
  const App = {
    components: {
      Navbar
    },
    template: `
      <div>
        <Navbar />
        <router-view />
      </div>
    `
  };

  // 创建Vue实例，并挂载到页面上
  const app = Vue.createApp(App);
  app.mount('#header');
  
console.log('nav.js引入是正常的。');