function footer(){
    let outPut = `<section class="footer-menu-background">
        <div class="container">
            <div class="footer-menu">
                <div class="footer-contact">
                    <h3>Contact Info</h3>`
     
    let contactInfo = [
        {name: 'contact', image: '../images/phone.png', value: '9843127392'},
        {name: 'mail', image: '../images/mail.png', value: 'familydental@gmail.com'},
    ]
    contactInfo.map(info =>{
        outPut += `<div class="${info.name}">
            <img src="${info.image}" alt="">
            <p>${info.value}</p>
        </div>`
    })



    outPut += `</div>
                <div class="opening-hour">
                    <h3>Opening Hour</h3>
                    <p>Sunday - Friday <em>12:00 pm to 8:00 pm</em></p>
                    <p>Saturday <em>Closed</em></p>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="copyright">
                <p>Copyright &copy; 2023 <strong>Dental Care and RCT Center</strong></p>
            </div>
        </div>
    </footer>`

return outPut;    
}
export default footer;