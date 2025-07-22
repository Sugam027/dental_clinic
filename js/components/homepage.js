import appointment from "./appointment.js";
import comments from "./comments.js";

function homepage(){
    // background
let outPut = `<section class="background">
<img src="../images/brushing.webp">
</section>`

    outPut += `<section class="homepage-background">
    <div class="container">
        <div class="homepage coverpage">`

    let homeDatas = [
        {'slogan': 'We’re your dental defenders.',
        'contact' : 'Call or text +977 9823454159',
        },
    ]
    outPut += `<h3>Welcome to Best Dental <br> Care In Your City</h3>`
        homeDatas.map(homeData =>{
            outPut += `<p class="slogan">${homeData.slogan}</p>
            <a href="#appointment-table" class="btn btn-transparent">Appointment</a>
            <a href="#" class="btn">${homeData.contact}</a>`
        })
        outPut += `</div>
        </div>
    </section>`


// <!-- table section starts -->

    function tablesection(){
        let outPut = `<section class="table-background">
        <div class="container">
            <div class="table">`
        let cards = [
            {title: 'Opening Hour', image: '../images/clock.png', description: 'Sunday - Friday <br> 12:00 pm - 8:00 pm', moreBtn: '', link: '#'},
            {title: 'Appointment', image: '../images/appointment.png', description: 'At Family Dental Care, we\'re here when you need us most. That\'s why we\'re bringing you more ways to get the care you need than ever before.', moreBtn: 'Requests', link: '#appointment-table'},
            {title: 'Urgent <br> Care', image: '../images/dentist.png', description: 'Search for a care facility near you to find the shortest wait and get in line ahead of time.', moreBtn: 'Search', link: '#'},
            {title: 'Find<br> Location', image: '../images/location.png', description: 'We’re located in the heart of the beautiful Hattigauda area.', moreBtn: 'Visits', link: './contact.html#map'},
        ]
        cards.map(card =>{
            outPut += `<div class="card">
                <div class="card-header">
                    <h3 class="card-title">${card.title}</h3>
                    <img src="${card.image}" alt="">
                </div>
                <p>${card.description}</p>    
            <a class="learn-more" href="${card.link}">${card.moreBtn}</a>
        </div>`
    
        })
        outPut += `</div>
        </div>
        </section>`
        
    return outPut;
    }
    outPut += tablesection();

// <!-- table section ends -->

// <!-- about section starts -->
    function about(){
        let outPut = `<section class="about-background">
        <div class="container">
        <div class="about-us">`
        outPut += `<div class="about-us-image">
        <img src="../images/aboutus.jpg" alt="" width="100%">
        </div>
        <div class="about-us-content">
        <h1 class="about-us-title">About us</h1>
        <h3>Best Medical Care For<br> Yourself and Your Family</h3>
            <p>Welcome to Family Dental Care, where you’ll find high-quality dental care for your whole family. From your dentists, Drs. Chad Bowles and Brad Higgerson, to your hygienist and front office team, everyone here is committed to exceeding your expectations.<br>
            You’ll feel right at home in our convenient Overland Park family dentist office thanks to our focus on your comfort, health, and happiness.</p>
            <a href="./about.html" class="btn learn-more">Learn more</a>
            
            <div class="about-us-detail">`
            let specialities =[
                {image: '../images/qualified-dentist.png', title:'Qualified <br> Dentsists'},
            {image: '../images/emergency.png', title:'Emergency <br> Services'},
            {image: '../images/accurate.png', title:'Accurate <br> Testing'},
        ]
        specialities.map(spec =>{
            outPut += `<div class="about-us-detail-circle">
                            <a href="#">
                                <img src="${spec.image}" alt="" >
                                <p>${spec.title}</p>
                            </a>
                            
                        </div>`
        })

        outPut += `</div>
        </div>
        </div>
        </div>
        </section>`
    return outPut;
    }
    outPut += about();

    // <!-- about section ends -->
    
// <!-- quote section starts -->
    function quote(){
        let outPut = `<section class="quote-background">
        <div class="container">
            <p>BRUSH 2X’S A DAY TO KEEP BACTERIA AWAY</p>
        </div>
    </section>`

    return outPut;
    }

    outPut += quote();
    
// <!-- quote section ends -->

// <!-- service section starts -->

    function homeservice(){
        let outPut = `<section class="services-background">
            <div class="container">
                <div class="services">
                <div class="services-header">
                    <h1 class="services-title">Services</h1>
                    <h3>Our Dental Services</h3>
                </div>`
        outPut += `<div class="services-content">
                <div class="services-detail-left">`
        let services =[
            {image: '../images/regular-check.png', title: 'Periodic <br>check up'},
            {image: '../images/scaling.png', title: 'Scaling and Root Planing'},
            {image: '../images/filling.png', title: 'Tooth Filing'},
            {image: '../images/bleaching.png', title: 'Bleaching'},
            {image: '../images/covering.png', title: 'Covering of Tooth'},
            {image: '../images/rct.png', title: 'Root Canal Treatment (RCT)'},
            {image: '../images/extraction.png', title: 'Tooth Extraction'},
            {image: '../images/implants.png', title: 'Implants'},
        ]
        services.map(service =>{
            outPut += `<div class="card">
                <div class="card-image">
                    <img src="${service.image}" alt="">
                </div>  
                <p>${service.title}</p>
            </div>`
        })
        outPut += `</div>`

        let serviceRight = [
            {image: '../images/braces.jpg', title: 'Orthodontic Treatment - Correction of Irregular Teeth', description: 'Orthodontics is a dental specialty focused on aligning your bite. Orthodontic treatments include traditional braces, clear aligners and removable retainers. Clear braces work the same as traditional metal braces, but they’re less noticeable. They consist of clear ceramic brackets and tooth-colored wire. Braces can correct a wide range of dental issues, including crooked, gapped, rotated or crowded teeth.'},
        ]
        serviceRight.map(serv =>{
            outPut += `<div class="services-detail-right">
                <div class="services-detail-image">
                    <img src="${serv.image}" alt="" width="100%">
                </div>
                <div class="services-detail-description">
                    <h3>${serv.title}</h3>
                    <p>${serv.description}</p>
                    <a href="#" class="learn-more">Learn more</a>
                </div>
            </div>`
        })

        outPut += `</div>`
        outPut += `</div>
        </div>
        </section>`


    return outPut;
    }
    outPut += homeservice();

// <!-- service section ends -->

// <!-- appointment section starts -->

    function homeAppointment(){
        let outPut = `<section class="appointment-background">
        <div class="container">
            <div class="appointment-section">
                <div class="appointment-content">
                    <div class="appointment-header">
                        <h1 class="appointment-title">Appointment</h1>
                        <h3>Make An Appointment<br> For Your Family</h3>
                    </div>
                    <p>At Family Dental Care, we're here when you need us most. That's why we're bringing you more ways to get the care you need than ever before.</p>
                </div>`
                outPut += appointment();


        outPut += `</div>
        </div>
        </section>`

    return outPut;
    }
    outPut += homeAppointment();

// <!-- appointment section ends -->

// <!-- our dentists section starts -->

    function dentists(){
        let outPut = `<section class="our-dentists-background">
            <div class="container">
                <div class="our-dentists">
                    <h1 class="dentists-title">Our Dentists</h1>
                    <h3>Our Specialist Dentists</h3>
                    <div class="dentists-content">`

        let dentists = [
            {image: '../images/our-dentist1.jpg', name: 'Gopal Bahadur', field: 'Orthopedics Expert', description: 'Hello guys, I am Gopal from Sirbistana. I am senior art director and founder of Violetta.'},
            {image: '../images/our-dentist2.jpg', name: 'Smriti Ghale', field: 'Orthopedics Expert', description: 'Hello guys, I am Gopal from Sirbistana. I am senior art director and founder of Violetta.'},
            {image: '../images/our-dentist3.jpg', name: 'John Rana Magar', field: 'Orthopedics Expert', description: 'Hello guys, I am Gopal from Sirbistana. I am senior art director and founder of Violetta.'},
        ]
        dentists.map(dentist =>{
            outPut += `<div class="dentists-detail">
                <div class="dentists-image">
                    <img src="${dentist.image}" alt="" width="100%">
                </div>
                <h3>${dentist.name}</h3>
                <p class="dentists-service">${dentist.field}</p>
                <p>${dentist.description}</p>
            </div>`
        })


        outPut += `</div>
        </div>
        </div>
        </section>`
        
    return outPut;
    }
    outPut += dentists();

// <!-- our dentists section ends -->

// <!-- testimonials section ends -->

    outPut += comments();

// <!-- testimonials section ends -->


return outPut;
}



export default homepage;