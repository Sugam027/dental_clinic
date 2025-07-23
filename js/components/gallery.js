// function gallery() {
//   let images = [
//     '../images/our-office-1.jpg',
//     '../images/our-office-2.jpg',
//     '../images/our-office-3.jpg',
//     '../images/our-office-4.jpg',
//     '../images/our-office-5.jpg',
//     '../images/our-office-6.jpg'
//   ];

//   let outPut = `<section class="large-office">
//     <div class="our-office-background">
//       <div class="container">
//         <div class="our-office">
//           <div class="our-office-title">
//             <h1>Our Office</h1>
//           </div>
//           <div class="our-office-content">`;

//   images.forEach((image) => {
//     outPut += `<div class="our-office-images" style="display: none;">
//       <img src="${image}" alt="Office Image">
//     </div>`;
//   });

//   outPut += `
//     <span class="prev" id="prev">&#8249;</span>
//     <span class="next" id="next">&#8250;</span>
//     </div>
//   </div>
//   </div>
//   </section>`;

//   return outPut;
// }


// document.addEventListener('DOMContentLoaded', () => {
//   // Inject gallery into container
//   const container = document.getElementById('gallery-container');
//   container.innerHTML = gallery(); // now HTML is in DOM

//   // Now that gallery is in DOM, initialize slider
//   let i = 0;
//   const slider = document.querySelectorAll('.our-office-images');
//   const len = slider.length;

//   function showSlide(index) {
//     slider.forEach((slide, idx) => {
//       slide.style.display = idx === index ? 'block' : 'none';
//     });
//   }

//   showSlide(i); // show first image initially

//   document.getElementById('prev').addEventListener('click', () => {
//     i = (i - 1 + len) % len;
//     showSlide(i);
//   });

//   document.getElementById('next').addEventListener('click', () => {
//     i = (i + 1) % len;
//     showSlide(i);
//   });
// });
// export default gallery;