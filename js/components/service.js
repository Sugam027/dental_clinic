import gallery  from "./gallery.js"


function service(){
    let outPut = `<section class="services-coverpage-background">
    <div class="container">
        <div class="services-coverpage coverpage">`

    let coverDatas = [
        {'slogan': 'You are only<br> a click away from the <br> most amazing smile',
        'contact' : 'Call or text +977 9823454159',
        },
    ]
        
        coverDatas.map(coverData =>{
            outPut += `<p class="slogan">${coverData.slogan}</p>
            <p>Special People For Special Smiles</p>
            <a href="./contact.html#appointment-table" class="btn btn-transparent">Appointment</a>
            <a href="#" class="btn">${coverData.contact}</a>`
        })
        outPut += `</div>   
        </div>
    </section>`


// <!-- services homepage starts -->

    function serviceHomeSection(){
        let outPut = `<section class="services-homepage-background">
        <div class="container">
            <div class="services-homepage">`

        let homeDatas = [
            {image: '../images/services-description1.jpg',
            title: 'With you, every step<br> of the way',
            description: 'Even the best cared for teeth need some TLC to keep them sparkling clean and healthy. Whether you need a routine checkup, filling, or gum disease treatment, we’ll meet your general dentistry needs with high-quality, one-on-one service.<br> We welcome patients of all ages, backgrounds, and dental health histories. Our local general dentists look forward to treating you like family. Get ready to relax, feel good, and look good. Request an <a href="#">appointment</a>  today.',
            
        },
        ]
        homeDatas.map(homeData =>{
            outPut += `<div class="services-homepage-images">
            <img src="${homeData.image}" alt="" width="300px" height="300px">
        </div>
        <div class="services-homepage-content">
            <h3>${homeData.title}</h3>
            <p>${homeData.description}</p>
        </div>`
        })

        outPut += `</div>
        </div>
        </section>`
    
    return outPut;
    }
    outPut += serviceHomeSection();

// <!-- services homepage starts -->

// <!-- services process starts -->

    function serviceProcessSection(){
        let outPut = `<section class="services-process-background">
        <div class="container">
            <div class="services-process">`

        let processDatas = [
            {image: '../images/services-description2.jpg',
            title: 'Our process is simple',
            description: ['We focus on the prevention and early detection of decay and disease', 'Catching issues early gives you more treatment options', 'Your comfort and satisfaction come first — and you won’t believe how good your teeth look and feel!'],
            
        },
        ]
        processDatas.map(processData =>{
            outPut += `
            <div class="services-process-content">
            <h3>${processData.title}</h3>`
                for(let i = 0 ; i < processData.description.length; i++){
                    outPut += `<p>${processData.description[i]}</p>`
                }
            outPut += `</div>
            <div class="services-process-images">
                <img src="${processData.image}" alt="" width="300px" height="300px">
            </div>` 
                
        })

        outPut += `</div>
        </div>
        </section>`

    return outPut;
    }
    outPut += serviceProcessSection();

// <!-- services process ends -->

// <!-- services help starts -->
    function helpSection(){
        let outPut = `<section class="services-help-background">
        <div class="container">
            <div class="services-help">
                <div class="services-help-title">
                    <h1>How can we help you today?</h1>
                </div>`

        let helpDatas = [
            {image: '../images/services1.webp',
            title: 'Periodic Check Up',
            description: 'Dental cleanings are essential for maintaining optimal oral health and function. These preventive visits can help stop dental issues before they get worse.',
            },
            {image: '../images/services2.webp',
            title: 'Scaling and Root Planing',
            description: 'Tooth scaling and root planing are nonsurgical deep-cleaning treatments for periodontitis. This severe gum disease can cause you to lose teeth, gums and bone.',
            },
            {image: '../images/services3.webp',
            title: 'Tooth Filing',
            description: 'Dental fillings are single or combinations of metals, plastics, glass or other materials used to repair or restore teeth. Popular questions about fillings are answered.',
            },
            {image: '../images/services4.webp',
            title: 'Bleaching',
            description: 'Teeth whitening is the most popular elective dental treatment on the market. Discoloration can occur for a number of reasons and may be extrinsic or intrinsic.',
            },
            {image: '../images/services5.webp',
            title: 'Covering of Tooth',
            description: 'Dental crowns are permanent caps placed on weak or damaged teeth to protect and cover a tooth. They can be made of materials like metal, ceramic or porcelain.',
            },
            {image: '../images/services6.webp',
            title: 'Root Canal Treatment (RCT)',
            description: 'Root canal therapy/treatment (RCT) is used to treat an infected or abscessed tooth. It eliminates infection by removing the nerves and tissues inside of a tooth.',
            },
            {image: '../images/services7.webp',
            title: 'Tooth Extraction',
            description: 'A tooth extraction may be necessary for many reasons, including severe damage or decay. One of the most common dental procedures, a tooth extraction can eliminate bacteria.',
            },
            {image: '../images/services8.webp',
            title: 'Implants',
            description: 'A titanium screw (like a tooth root ) that is surgically positioned into the jawbone beneath the gum line. A natural tooth colored crown is then placed over the Dental Implant.',
            },
            {image: '../images/braces.jpg',
            title: 'Orthodontic Treatment',
            description: 'Orthodontics is a dental specialty focused on aligning your bite. Orthodontic treatments include traditional braces, clear aligners and removable retainers.',
            },
        ]

        outPut += `<div class="services-help-content">` 

        helpDatas.map(helpData =>{
            outPut += `<div class="services-help-item">
            <div class="hovereffect">
                <div class="services-help-images">
                    <img src="${helpData.image}" alt="" width="100%">
                </div>
                <div class="services-help-description">
                    <h3>${helpData.title}</h3>
                    <a href="#" class="info">${helpData.description}</a>
                </div>
            </div>
        </div>
`
        })

        outPut += `<div>`

        outPut += `</div>
        </div>
        </section>`

    return outPut;   
    }
    outPut += helpSection();
// <!-- services help ends -->



return outPut;    
}
export default service;