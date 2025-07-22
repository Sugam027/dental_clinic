function header(){
    let outPut = `<header>
        <div class="header-contact-section">
            <div class="container">`
        outPut += `<div class="header-contact">`
            let headerContacts = [
                {'image': '<img src="../images/phone.png">', 'name': 'phone', 'value': 9842085129},
                {'image': '<img src="../images/mail.png">', 'name': 'email', 'value': 'familydental@gmail.com'},
                {'image': '<img src="../images/clock.png">', 'name': 'schedule', 'value': '12:00 pm - 8:00 pm'}
            ]

            headerContacts.map((contact,index)=>{
                outPut += `<div class="contact-${contact.name}">
                    <div>${contact.image}</div>
                    <p>${contact.value}</p>
                </div>`
            })
        outPut += `</div>
            </div>
        </div>
        </header>`



    return outPut;
}

export default header;
