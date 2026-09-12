const whatsappNumber = "";


// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if(menuToggle && mobileNav)
{
    menuToggle.addEventListener("click",() =>
    {
        mobileNav.classList.toggle("open");
    });


    mobileNav.querySelectorAll("a").forEach(link =>
    {
        link.addEventListener("click",() =>
        {
            mobileNav.classList.remove("open");
        });
    });
}


// =========================
// HEADER AO ROLAR
// =========================

const header = document.querySelector(".site-header");

window.addEventListener("scroll",() =>
{
    if(window.scrollY > 40)
    {
        header.classList.add("scrolled");
    }
    else
    {
        header.classList.remove("scrolled");
    }
});


// =========================
// ANO DO FOOTER
// =========================

const year = document.querySelector("#year");

if(year)
{
    year.textContent = new Date().getFullYear();
}


// =========================
// ANIMAÇÕES
// =========================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries =>
    {
        entries.forEach(entry =>
        {
            if(entry.isIntersecting)
            {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold:.12
    }
);


revealElements.forEach(element =>
{
    observer.observe(element);
});


// =========================
// LIGHTBOX
// =========================

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

const projectItems = document.querySelectorAll(".project-item");


projectItems.forEach(item =>
{
    item.addEventListener("click",() =>
    {
        const image = item.dataset.image;

        if(!image || !lightbox || !lightboxImage)
        {
            return;
        }

        lightboxImage.src = image;

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden","false");

        document.body.style.overflow = "hidden";
    });
});


function closeLightbox()
{
    if(!lightbox)
    {
        return;
    }

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden","true");

    document.body.style.overflow = "";

    if(lightboxImage)
    {
        lightboxImage.src = "";
    }
}


lightboxClose?.addEventListener("click",closeLightbox);


lightbox?.addEventListener("click",event =>
{
    if(event.target === lightbox)
    {
        closeLightbox();
    }
});


document.addEventListener("keydown",event =>
{
    if(event.key === "Escape")
    {
        closeLightbox();
    }
});


// =========================
// WHATSAPP
// =========================

const whatsappLinks = document.querySelectorAll(".whatsapp-link");


whatsappLinks.forEach(link =>
{
    link.addEventListener("click",event =>
    {
        event.preventDefault();

        if(!whatsappNumber)
        {
            alert("Adicione o número de WhatsApp da empresa no arquivo script.js.");
            return;
        }


        const message = encodeURIComponent(
            "Olá! Gostaria de conhecer melhor o trabalho da César Plantas & Paisagismo."
        );


        window.open(
            `https://wa.me/${whatsappNumber}?text=${message}`,
            "_blank"
        );
    });
});