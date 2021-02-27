const input = document.querySelector(".contact-us .contact-us__container .cta .input-wrapper input");
const input_btn = document.querySelector(".contact-us .contact-us__container .cta .cta__btn");

// input_btn.addEventListener("click", checkEmail);
input_btn.addEventListener("click", () => {
    if (!validateEmail(input.value) && input.value != "") {
        input.parentElement.classList.add("error");
    } else {
        input.parentElement.classList.remove("error");
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const triggers = document.querySelectorAll(".trigger");
triggers.forEach((t) => {
    window.addEventListener("scroll", ()=>{
        // console.log(t.getBoundingClientRect().top)
        if (t.getBoundingClientRect().top - window.innerHeight + 100 <= 0) {
            t.classList.add("show");
        }else {
            if (t.getBoundingClientRect().top - window.innerHeight >= 0){
                t.classList.remove("show");
            }
        }

    })
})

// SVG SCRIPTS
const svg = document.querySelector(".svg-check");
const inside_svg = svg.querySelectorAll("*");

inside_svg.forEach((elem) => {
    setTimeout(() => {
        elem.classList.add("show");
    }, 1000);
})