import header from "./components/header.js";
import menu from "./components/menu.js";
import homepage from "./components/homepage.js";
import about from "./components/about.js";
import service from "./components/service.js";
import testimonials from "./components/testimonials.js";
import contact from "./components/contact.js";
import footer from "./components/footer.js";

function app(page) {
  let outPut = "";
  if (page != "") {
    // header section starts
    outPut += header();
    // header section ends

    // navigation section starts
        outPut += menu(page);
    // navigation section ends
    if (page == "home") {
      // homepage section starts
      outPut += homepage();
      // homepage section ends
    }
    if (page == "about") {
      // about page starts
      outPut += about();
      // about page ends
    }
    if(page == 'service'){
        // service page starts
        outPut += service();
        // service page ends
    }
    if(page == 'testimonials'){
        // testimonials page starts
        outPut += testimonials();
        // testimonials page ends
    }
    if(page == 'contact'){
        // contact page starts
        outPut += contact();
        // contact page ends
    }

    // footer section starts
    outPut += footer();
    // footer section ends
  }

  return outPut;
}

export default app;
