import comments from "./comments.js"
import gallery from "./gallery.js"
import appointment from "./appointment.js"

function contact(){
    let outPut = `<section class="contact-coverpage-background">
    <div class="container">
        <div class="contact-coverpage coverpage">`

    let coverDatas = [
        {'slogan': 'We help you to smile with confidence',
        'contact' : 'Call or text +977 9823454159',
        },
    ]
        
        coverDatas.map(coverData =>{
            outPut += `<p class="slogan">${coverData.slogan}</p>
            <p>We'll do our best to deliver the best possible healthcare and customer service to you!</p>
            <a href="#" class="btn btn-transparent">Appointment</a>
            <a href="#" class="btn">${coverData.contact}</a>`
        })
        outPut += `</div>   
        </div>
    </section>`

// <!-- appointment table starts -->

    outPut += `<section class="contact-appointment">
    <div class="container">`
        outPut += appointment();
    outPut += `</div>
    </section>`

// <!-- appointment table ends -->

// <!-- mapContact section starts -->

    function mapContact(){
        let outPut = `<section class="map-contact-background">
        <div class="container">
            <div class="map-contact">
                <div class="map" id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.7298675406546!2d85.34905119999999!3d27.756476799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1fad607d6037%3A0xbc69ee8447c21ccd!2sFamily%20Dental%20Care%20%26%20RCT%20Centre!5e0!3m2!1sen!2snp!4v1675361323837!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>`


        let mapContacts = [
            {name : 'Address', value : 'Hattigauda, Budhanilkantha, Kathmandu, Nepal'},
            {name : 'Phone', value : '+977 9823454159'},
            {name : 'Email', value : 'familydental@gmail.com'},
            {name : 'URL', value : 'Hattigauda, Budhanilkantha, Kathmandu, Nepal'},
        ]
        outPut += `<div class="contact-table">
        <h2 class="contact-table-title">Contact Us</h2>`
            mapContacts.map(mapContact =>{
                outPut += `<div class="contact-item">
                <h3>${mapContact.name}</h3>
                <p>${mapContact.value}</p>
            </div>`
            })
        outPut += `</div>   
        </div>`


        outPut += `</div>   
            </div>
        </section>`



    return outPut;
    }
    outPut += mapContact();

// <!-- mapContact section ends -->

// <!-- quaries section starts -->

    function quaries(){
        let outPut = `<section class="quaries-background">
            <div class="container">
                <div class="quaries">
                    <div class="quaries-title">
                        <h1>Any Messages or Question</h1>
                    </div>
                    <form action="" method="POST" id="quaries">
                        <div class="form-control">
                            <p>Name<span id="quarynameError" class='error'></span></p>
                            <input type="text" id="quariesName" placeholder="Enter Your Name">
                            
                        </div>
                        <div class="form-control">
                            <p>Email<span id="quaryemailError" class='error'></span></p>
                            <input type="email" id="quariesEmail" placeholder="Enter Your email">
                            
                        </div>
                        <div class="form-control">
                            <p>Phone number<span id="quaryphoneError" class='error'></span></p>
                            <input type="text" id="quariesPhone" placeholder="Enter Your Phone number">
                            
                        </div>
                        <div class="form-control">
                            <p>Messages<span id="quarymessageError" class='error'></span></p>
                            <textarea name="Messages" id="quariesMessage" placeholder="Your Messages" cols="30" rows="5"></textarea>
                            
                        </div>
                        <div class="send-btn">
                            <input type="submit" id="submitQuaries" class="btn" value="Send">
                        </div>
                    </form>
                </div>
            </div>
        </section>`

    return outPut;    
    }
    outPut += quaries();


    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('submitQuaries').addEventListener('click', function(event){
            event.preventDefault();
            let name = document.getElementById('quariesName').value;
            let email = document.getElementById('quariesEmail').value;
            let phone = document.getElementById('quariesPhone').value;
            let message = document.getElementById('quariesMessage').value;
        
            let nameError = document.getElementById('quarynameError');
            let emailError = document.getElementById('quaryemailError');
            let phoneError = document.getElementById('quaryphoneError');
            let messageError = document.getElementById('quarymessageError');
        
            if(name == ''){
                nameError.innerHTML= "*Name is required";
            }else if(!name.match(/^[a-zA-Z]/)){
                nameError.innerHTML= "*Only use alphabet"
            }else if(name.length < 3){
                nameError.innerHTML="*Name must be longer than 3"
            }else{
                nameError.innerHTML = ''
            }
    
            if(email == ''){
                emailError.innerHTML = '*Email is required';
            }else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
                emailError.innerHTML = '*Must in format someone@gmail.com';
            }else{
                emailError.innerHTML = '';
            }
    
            if(phone == ''){
                phoneError.innerHTML = '*Phone is required';
            }else if(!phone.match(/^[0-9\s\-()\+]+$/)){
                phoneError.innerHTML = '*Phone number must be a number';
            }else if(phone.length < 10){
                phoneError.innerHTML = '*Phone must be at least 10 characters';
            }else{
                phoneError.innerHTML = '';
            }
    
            if(message == ''){
                messageError.innerHTML= "*Message is required";
            }else{
                messageError.innerHTML = "";
            }
            const errorElements = document.querySelectorAll('.error');
        const hasErrors = Array.from(errorElements).some(element => element.textContent.trim() !== '');

        if (!hasErrors) {
            document.getElementById('quaries').reset();
            alert("Your quaries send successfully!!")
        }
        
        })
    })

// <!-- quaries section ends -->


    
    outPut += gallery();

return outPut;    
}
export default contact;