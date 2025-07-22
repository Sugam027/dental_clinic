function comments(){
    let outPut = `<section class="testimonial-background">
        <div class="container">
            <div class="testimonial">
                <h1 class="testimonial-title">Testimonials</h1>
                <h3>What Our Patients<br> Say About Us</h3>
                <div class="testimonial-content">`
    let comments = [
        {title: 'The amazing clinic! Wonderful support!', description: 'They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.', image: '../images/testimonial-profile.jpg', name: 'Anisha Shrestha'},
        {title: 'The amazing clinic! Wonderful support!', description: 'They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.', image: '../images/our-dentist3.jpg', name: 'Binod Pariyar'},
        {title: 'The amazing clinic! Wonderful support!', description: 'They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.', image: '../images/services-description2.jpg', name: 'Sipal Paudel'},
        {title: 'The amazing clinic! Wonderful support!', description: 'They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.', image: '../images/our-dentist1.jpg', name: 'Ramesh Nepali'},
    ];

    comments.map(comment =>{
        outPut += `<div class="testimonial-detail">
            <div class="testimonial-comment">
                <h3><img src="../images/quote.png" alt="">${comment.title}</h3>
                <p>${comment.description}</p>
            </div>
            <div class="testimonial-comment-name">
                <img src="${comment.image}" alt="">
                <p>${comment.name}</p>
            </div>
        </div>`
    })


    outPut += `</div>
    </div>
    </div>
    </section>`

return outPut;
}
export default comments;