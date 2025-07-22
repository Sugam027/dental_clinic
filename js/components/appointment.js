function appointment(){
    let outPut = `<form reset(); method="POST" class="appointment-table" id="appointment-table">
    <h3>Book An Appointment</h3>
    <div class="appointment-item">
        <input type="text" id="appService" placeholder="Choose Services"><br>
        <span id="serviceError" class='error'></span>
        </div>
    <div class="appointment-item">
        <input type="text" placeholder="Your name" id="appName">
        <span id="nameError" class='error'></span>
    </div>
    <div class="appointment-item">
        <input type="email" placeholder="Your email" id="appEmail">
        <span id="emailError" class='error'></span>
    </div>
    <div class="appointment-item">
        <input type="text" placeholder="Your number" id="appPhone">
        <span id="phoneError" class='error'></span>
    </div>
    
    <div class="appointment-item choose-date-time">
        <div>
            <input type="date" id="appDate">
            <span id="dateError" class='error'></span>
       </div> 
       <div>
            <input type="time" id="appTime">
            <span id="timeError" class='error'></span>
       </div>
    </div>
    <div class="submit-cancel">
        <input type="submit" id="submitAppointment" value="Submit">
        <input type="reset" value="Reset" id="resetBtn">
    </div>
</form>`




return outPut;
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('submitAppointment').addEventListener('click', function(event){
        event.preventDefault();

        let service = document.getElementById('appService').value;
        let name = document.getElementById('appName').value;
        let email = document.getElementById('appEmail').value;
        let phone = document.getElementById('appPhone').value;
        let date = document.getElementById('appDate').value;
        let time = document.getElementById('appTime').value;
    
        let serviceError = document.getElementById('serviceError');
        let nameError = document.getElementById('nameError');
        let emailError = document.getElementById('emailError');
        let phoneError = document.getElementById('phoneError');
        let dateError = document.getElementById('dateError');
        let timeError = document.getElementById('timeError');
    
        if(service == ''){
            serviceError.innerHTML= "Service is required";
        }else if(!service.match(/^[a-zA-Z]/)){
            serviceError.innerHTML= "Only use alphaber"
        }else{
            serviceError.innerHTML = ''
        }

        if(name == ''){
            nameError.innerHTML= "Name is required";
        }else if(!name.match(/^[a-zA-Z]/)){
            nameError.innerHTML= "Only use alphabet"
        }else if(name.length < 3){
            nameError.innerHTML="Name must be longer than 3"
        }else{
            nameError.innerHTML = ''
        }
        


        if(email == ''){
            emailError.innerHTML = 'Email is required';
        }else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
            emailError.innerHTML = 'Must in format someone@gmail.com';
        }else{
            emailError.innerHTML = '';
        }

        if(phone == ''){
            phoneError.innerHTML = 'Phone is required';
        }else if(!phone.match(/^[0-9\s\-()\+]+$/)){
            phoneError.innerHTML = 'Phone number must be a number';
        }else if(phone.length < 10){
            phoneError.innerHTML = 'Phone must be at least 10 characters';
        }else{
            phoneError.innerHTML = '';
        }

        if(date == ''){
            dateError.innerHTML= "Date is required";
        }else{
            dateError.innerHTML = "";
        }
        if(time == ''){
            timeError.innerHTML= "Time is required";
        }else{
            timeError.innerHTML = "";
        }
        const errorElements = document.querySelectorAll('.error');
        const hasErrors = Array.from(errorElements).some(element => element.textContent.trim() !== '');

        if (!hasErrors) {
            document.getElementById('appointment-table').reset();
            alert("Appointment book successfully!!")

                // Email.send({
                //     SecureToken : "09013450-a014-44cd-be40-b7cabc5033a9",
                //     Host: "smtp.elasticemail.com",
                //     Username: "shresthasugam2060@gmail.com",
                //     Password: "Dreambig2023",
                //     To : 'shresthasugam2060@gmail.com',
                //     From : email,
                //     Subject : "This is the subject",
                //     Body : "And this is the body",
                //     Secure: true,
                //     Port: 465,  
                // }).then(
                //   message => alert(message)
                // );

            
        }
    })
})



export default appointment;