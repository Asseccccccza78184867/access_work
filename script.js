

const langBtn = document.getElementById("langBtn");

let arabic = true;

langBtn.onclick = function () {

    if (arabic) {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        langBtn.innerHTML = "AR";

       
        document.querySelector(".menu").children[0].innerHTML = "<a href='index.html'>Home</a>";
        document.querySelector(".menu").children[1].innerHTML = "<a href='about.html'>About Us</a>";
        document.querySelector(".menu").children[2].innerHTML = "<a href='servis.html'>Services</a>";
        document.querySelector(".menu").children[3].innerHTML = "<a href='#contact'>Contact</a>";

       
        document.getElementById("title").innerHTML =
            "Building Your Digital Future Step by Step";

        document.getElementById("desc").innerHTML =
            "Professional digital marketing and web solutions.";

        document.getElementById("startBtn").innerHTML =
            "Get Started";

      
        document.querySelector(".about h2").innerHTML =
            "About Us";

        document.querySelector(".about p").innerHTML =
            "We provide professional services in digital marketing, graphic design, website development and social media management.";

        
        document.querySelector(".services-show h2").innerHTML =
            "Our Services";

        document.querySelectorAll(".service-item")[0].innerHTML =
            "Digital Marketing <span>{01}</span>";

        document.querySelectorAll(".service-item")[1].innerHTML =
            "Graphic Design <span>{02}</span>";

        document.querySelectorAll(".service-item")[2].innerHTML =
            "Event Management <span>{03}</span>";

        document.querySelectorAll(".service-item")[3].innerHTML =
            "Website Development <span>{04}</span>";

        document.querySelector("#service1 p").innerHTML =
            "Professional Digital Marketing Campaigns.";

        document.querySelector("#service2 p").innerHTML =
            "Brand Identity, Motion Graphics and Social Media Designs.";

        document.querySelector("#service3 p").innerHTML =
            "Professional Event Organization and Management.";

        document.querySelector("#service4 p").innerHTML =
            "Modern Responsive Website Development.";

    } else {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        langBtn.innerHTML = "EN";

  
        document.querySelector(".menu").children[0].innerHTML =
            "<a href='#'>الرئيسية</a>";

        document.querySelector(".menu").children[1].innerHTML =
            "<a href='#about'>من نحن</a>";

        document.querySelector(".menu").children[2].innerHTML =
            "<a href='#services'>خدماتنا</a>";

        document.querySelector(".menu").children[3].innerHTML =
            "<a href='#contact'>تواصل معنا</a>";

      
        document.getElementById("title").innerHTML =
            "نبني مستقبلك الرقمي خطوة بخطوة";

        document.getElementById("desc").innerHTML =
            "من الرياض إلى العالم نصنع هوية رقمية مميزة.";

        document.getElementById("startBtn").innerHTML =
            "ابدأ الآن";

       
        document.querySelector(".about h2").innerHTML =
            "من نحن";

        document.querySelector(".about p").innerHTML =
            "نقدم حلولاً احترافية في التسويق الرقمي والتصميم وتطوير المواقع وإدارة الفعاليات.";

     
        document.querySelector(".services-show h2").innerHTML =
            "ماذا نقدم";

        document.querySelectorAll(".service-item")[0].innerHTML =
            "التسويق الرقمي <span>{01}</span>";

        document.querySelectorAll(".service-item")[1].innerHTML =
            "التصميم الجرافيكي <span>{02}</span>";

        document.querySelectorAll(".service-item")[2].innerHTML =
            "إدارة الفعاليات <span>{03}</span>";

        document.querySelectorAll(".service-item")[3].innerHTML =
            "تطوير المواقع <span>{04}</span>";

        document.querySelector("#service1 p").innerHTML =
            "إدارة الحملات الإعلانية والتسويق الرقمي على جميع المنصات.";

        document.querySelector("#service2 p").innerHTML =
            "هوية بصرية، موشن جرافيك، وتصاميم سوشيال تجذب الأنظار وتعكس شخصيتك.";

        document.querySelector("#service3 p").innerHTML =
            "تنظيم وإدارة الفعاليات والمعارض والمؤتمرات باحترافية.";

        document.querySelector("#service4 p").innerHTML =
            "تصميم وتطوير مواقع إلكترونية حديثة ومتوافقة مع جميع الأجهزة.";

    }

    arabic = !arabic;

};


function showService(num){

    const boxes = document.querySelectorAll(".service-box");
    const items = document.querySelectorAll(".service-item");

    boxes.forEach(box=>{
        box.classList.remove("active");
    });

    items.forEach(item=>{
        item.classList.remove("active");
    });

    document.getElementById("service"+num).classList.add("active");
    items[num-1].classList.add("active");
}


const hiddenElements = document.querySelectorAll(
".about,.services-show,.vision,.values"
);

hiddenElements.forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(80px)";
    el.style.transition="1s";
});

window.addEventListener("scroll",()=>{

    hiddenElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            el.style.opacity="1";
         
            el.style.transform="translateY(0)";

        }
    });          
});