function menu(page){
    let navs = [
        {pagevalue: 'home', pagename: 'Home', link: './index.html'},
        {pagevalue: 'about', pagename: 'About us', link: './about.html'},
        {pagevalue: 'service', pagename: 'Services', link: './service.html'},
        {pagevalue: 'testimonials', pagename: 'Testimonials', link: './testimonials.html'},
        {pagevalue: 'contact', pagename: 'Contacts', link: './contact.html'},
    ];
    let outPut = `<div class="navigation-background">
        <div class="container">`;
        outPut += `<div class="navigation">`;
        outPut += `<div class="logo">
        <img src="../images/logo.png" width="100%">
        </div>`;
        outPut += `<div class="menu-s" id="nav-btn">
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
        </div> `
        outPut += `<nav>
        <ul>`
        navs.map((nav) =>{
            outPut += `<li><a href='${nav.link}' class="${classActive(page, nav.pagevalue)}">${nav.pagename}</a></li>`
        
            })
            outPut +=`</ul>
            </nav>`
            outPut += `</div>
            </div>
            </div>`;
            
            
            return outPut;
        }
        function classActive(currentPage, navPageValue){
            return currentPage === navPageValue ? 'active' : '';
        }
        document.addEventListener('DOMContentLoaded', function(){
            let nav = document.querySelector('.navigation')
            document.getElementById('nav-btn').addEventListener('click', function(){
                nav.classList.toggle('toggle');
            })
        })

       
export default menu;