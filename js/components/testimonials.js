import comments from "./comments.js"
import gallery from "./gallery.js"

function testimonials(){
    let outPut = `<section class="testimonials-coverpage-background">
    <div class="container">
        <div class="testimonials-coverpage coverpage">`

    let coverDatas = [
        {'slogan': 'A caring positive experience.',
        'contact' : 'Call or text +977 9823454159',
        },
    ]
        
        coverDatas.map(coverData =>{
            outPut += `<p class="slogan">${coverData.slogan}</p>
            <p>A genuine smile comes from the heart, but a healthy smile needs good dental care.</p>
            <a href="./contact.html#appointment-table" class="btn btn-transparent">Appointment</a>
            <a href="#" class="btn">${coverData.contact}</a>`
        })
        outPut += `</div>   
        </div>
    </section>`


    outPut += comments();
    outPut += gallery();


return outPut;    
}
export default testimonials;