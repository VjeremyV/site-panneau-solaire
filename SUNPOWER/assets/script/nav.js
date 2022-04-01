
(()=> {
    let count = 1;
    let lastScrollTop = 0;
    navbar = document.querySelector('.navContainer'); 
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-100px";
        } else {
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    })
})()