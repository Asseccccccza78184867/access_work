const langBtn = document.getElementById("langBtn");

let arabic = true;

langBtn.onclick = function () {

    if (arabic) {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        langBtn.innerHTML = "AR";

        // القائمة
        document.querySelector(".menu li:nth-child(1) a").innerHTML = "Home";
        document.querySelector(".menu li:nth-child(2) a").innerHTML = "About Us";
        document.querySelector(".menu li:nth-child(3) a").innerHTML = "Services";
        document.querySelector(".menu li:nth-child(4) a").innerHTML = "Contact";

        // عنوان من نحن
        if(document.querySelector(".about h2"))
            document.querySelector(".about h2").innerHTML="About Us";

        if(document.querySelector(".about p"))
            document.querySelector(".about p").innerHTML=
            "ACCESS is a digital marketing agency specializing in branding, website development and social media management.";

        // الخدمات
        if(document.querySelector(".services-show h2"))
            document.querySelector(".services-show h2").innerHTML="Our Services";

        document.querySelectorAll(".service-item")[0].innerHTML="Digital Marketing <span>{01}</span>";
        document.querySelectorAll(".service-item")[1].innerHTML="Graphic Design <span>{02}</span>";
        document.querySelectorAll(".service-item")[2].innerHTML="Social Media Management <span>{03}</span>";
        document.querySelectorAll(".service-item")[3].innerHTML="Website Development <span>{04}</span>";

    } else {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        langBtn.innerHTML = "EN";

        // القائمة
        document.querySelector(".menu li:nth-child(1) a").innerHTML = "الرئيسية";
        document.querySelector(".menu li:nth-child(2) a").innerHTML = "من نحن";
        document.querySelector(".menu li:nth-child(3) a").innerHTML = "خدماتنا";
        document.querySelector(".menu li:nth-child(4) a").innerHTML = "تواصل";

        // عنوان من نحن
        if(document.querySelector(".about h2"))
            document.querySelector(".about h2").innerHTML="من نحن";

        if(document.querySelector(".about p"))
            document.querySelector(".about p").innerHTML=
            "ACCESS وكالة متخصصة في التسويق الرقمي والهوية البصرية وتطوير المواقع وإدارة حسابات السوشيال ميديا.";

        // الخدمات
        if(document.querySelector(".services-show h2"))
            document.querySelector(".services-show h2").innerHTML="خدماتنا";

        document.querySelectorAll(".service-item")[0].innerHTML="التسويق الرقمي <span>{01}</span>";
        document.querySelectorAll(".service-item")[1].innerHTML="التصميم الجرافيكي <span>{02}</span>";
        document.querySelectorAll(".service-item")[2].innerHTML="إدارة السوشيال ميديا <span>{03}</span>";
        document.querySelectorAll(".service-item")[3].innerHTML="تطوير المواقع <span>{04}</span>";

    }

    arabic = !arabic;
};

// تغيير الخدمات
function showService(num){

    const boxes = document.querySelectorAll(".service-box");
    const items = document.querySelectorAll(".service-item");

    boxes.forEach(box=>box.classList.remove("active"));
    items.forEach(item=>item.classList.remove("active"));

    document.getElementById("service"+num).classList.add("active");
    items[num-1].classList.add("active");
}

// Animation
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

        if(el.getBoundingClientRect().top < window.innerHeight-100){

            el.style.opacity="1";
            el.style.transform="translateY(0)";
        }

    });

});
