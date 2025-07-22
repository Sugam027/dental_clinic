import gallery from './gallery.js';

function about(){

    let outPut = `<section class="about-coverpage-background">
    <div class="container">
        <div class="about-coverpage coverpage">`

    let homeDatas = [
        {'title': 'Hi! We’re <br> Family Dental…',
        'slogan': 'Local dentists who love <br> to make you smile.<br> Join our family of patients for life.',
        'contact' : 'Call or text +977 9823454159',
        },
    ]
    outPut += `<p>Get to Know Us</p>`
        
        homeDatas.map(homeData =>{
            outPut += `<h3>${homeData.title}</h3>
            <p class="slogan">${homeData.slogan}</p>
            <p>Let us brighten your smile!</p>
            <a href="./contact.html#appointment-table" class="btn btn-transparent">Appointment</a>
            <a href="#" class="btn">${homeData.contact}</a>`
        })
        outPut += `</div>   
        </div>
    </section>`

// about-us-homepage starts

    function aboutHomesection(){
        let outPut = `<section class="about-homepage-background">
        <div class="container">
            <div class="about-homepage">`

        let homeLefts = [
            {'title': 'Giving Our Community Another Reason to Smile',
            'description': 'Family Dental Care was established to make taking care of your teeth safe, convenient, and enjoyable. You don’t have to drive far for high-quality dental care — everything you need and more is available right here at your local dentist office.<br> We are an especially comfortable and safe environment for families and those with dental anxiety. No white coats, no pressure, and no judgment. Just safe, accessible, and high-quality care when you need it.',
            'phone': '+977 9823454159',
        },
        ]
        outPut += `<div class="about-homepage-left">`
        homeLefts.map(homeLeft =>{
            outPut += `<div class="about-homepage-left-detail">
            <h3>${homeLeft.title}</h3>
            <p>${homeLeft.description}</p>
            <p>Call <a href="#">${homeLeft.phone}</a> today with questions.</p>
        </div>`
        })
        outPut += `</div>`

        let homeRights =[
            {image: '../images/on-time.png',
            title: 'On Time, every Time',
            description : 'We know how busy your schedule is, so your appointment will always start on time with no waiting.',
            },
            {image: '../images/billing.png',
            title: 'Easy to understand billing',
            description : 'Get answers to your questions about insurance or paying for your care. We’ll file all the paperwork and accept most insurances.',
            },
            {image: '../images/smiling.png',
            title: 'Modern care with a smile',
            description : 'You may not get as excited as we do about our CEREC machine and 3D x-rays. But you’ll smile when you see how great you look and feel.',
            },
        ]

        outPut += `<div class="about-homepage-right">`

        homeRights.map(homeRight =>{
            outPut += `<div class="about-homepage-features">
            <div class="about-homepage-features-title">
                <img src="${homeRight.image}" alt="">
                <h4>${homeRight.title}</h4>
            </div>
            <p>${homeRight.description}</p>               
        </div>`
        })

        outPut += `</div>`

        outPut += `</div>
        </div>
        </section>`
    
    return outPut;
    }
    outPut += aboutHomesection();

// about-us-homepage ends

// <!-- team section starts -->

    function teamSection(){
        let outPut = `<section class="our-team-background">
        <div class="container">
            <div class="our-team">
                <div class="our-team-title">
                    <h1>Meet Our Team</h1>
                    <p>Our people set us apart. We’re passionate, <br> dedicated, and friendly. Oh yeah, and we’re great <br> at what we do!</p>
                </div>`

        let teamDatas = [
            {image: '../images/our-dentist3.jpg', name: 'Jonh Rana Magar, Dentist', role: 'Owner of Family Dental Care Since 2009', description: 'I love my patients and the people with whom I work. I see everyone, from young kiddos to adults and everyone in between. My patients help me grow as a dentist and make me excited for the future of our practice.<br> I’m a hockey dad, a figure skating dad, and a soccer dad. My kids love to play outside and stay active. I am right there to watch, play with them, and encourage my kids as they grow! Did I mention I love wine, too?!'},
            {image: '../images/our-dentist1.jpg', name: 'Gopal Bahadur, Hygienist', role: 'At Family Dental Care Since 2018', description: 'So far, my favorite part about working at Bowles Dental is getting to meet all of the patients. I truly enjoy forming relationships with them as well as helping them have a beautiful smile. I love spending time with my husband, Stephen, and our dog, Max.<br> I love the many great patients I’ve gotten to know over the years. I’m so grateful to work two days a week and to work with such an awesome team.'},
            {image: '../images/our-dentist2.jpg', name: 'Smriti Ghale, Assistant', role: 'At Family Dental Care Since 2015', description: 'I love my patients and the people with whom I work. I see everyone, from young kiddos to adults and everyone in between.My patients help me grow as a dentist and make me excited for the future of our practice.<br> In my short time working at Bowles Dental, I have enjoyed every minute of it. Dr. Bowles and the team have been so welcoming and are great to work with. There’s never a dull moment and someone’s always laughing. It’s a great work environment, they put their patients first but they know how to have fun. I have also loved getting to know all the amazing patients. The patients I have met so far have been wonderful and I look forward to building a relationship with them for years to come.'},
            {image: '../images/our-dentist4.jpg', name: 'Bindiya Sakhya, Dentist', role: 'At Family Dental Care Since 2016', description: 'I love working at Family Dental because being in the dental field has always been my dream. Getting to work with such wonderful people every day makes it even better! My hobbies are spending time with family, working out, and eating.<br> I’m a hockey dad, a figure skating dad, and a soccer dad. My kids love to play outside and stay active. I am right there to watch, play with them, and encourage my kids as they grow! Did I mention I love wine, too?!'},
            
        ]

        teamDatas.map(teamData =>{
            outPut += `<div class="our-team-content">
            <div class="our-team-images">
                <img src="${teamData.image}" alt="" width="100%">
            </div>
            <div class="our-team-description">
                <h3>${teamData.name}</h3>
                <h4>${teamData.role}</h4><br>
                <p>${teamData.description}</p>
            </div>
        </div>
`
        })

        outPut += `</div>
        </div>
        </section>`

    return outPut;
    }
    outPut += teamSection();

// <!-- team section ends -->

// <!-- gallery section starts -->

outPut += gallery();

// <!-- gallery section ends -->


return outPut;    
}
export default about;