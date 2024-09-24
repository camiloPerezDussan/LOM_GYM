window.addEventListener("load", () => {
    const loader = document.querySelector('#loader');
    const page = document.querySelector('#page');

    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            page.classList.add('showPage');
        }, 500);
    }, 2000);
});