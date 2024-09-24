document.addEventListener('DOMContentLoaded', function () {
    function addClass(elemento) {
        elemento.classList.add("gold-background", "gradient-text-background");
    }
    
    function removeClass(elemento) {
        elemento.classList.remove("gold-background", "gradient-text-background");
    }

    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function (link) {
        link.addEventListener('mouseover', function () {
            addClass(link);
        });

        link.addEventListener('mouseout', function () {
            removeClass(link);
        });
    });
    


var faqs = document.querySelectorAll('.accordion-button');
faqs.forEach(function (faq) {
    if (!faq.classList.contains('collapsed')) {
        addClass(faq);
    }

    faq.addEventListener('click', function () {
        if (!faq.classList.contains('collapsed')) {
            faqs.forEach(el => removeClass(el));
            addClass(faq);
        }
    });

    faq.addEventListener('mouseover', function () {
        if (faq.classList.contains('collapsed')) {
            addClass(faq);
        }
    });

    faq.addEventListener('mouseout', function () {
        if (faq.classList.contains('collapsed')) {
            removeClass(faq);
        }
    });
});
});