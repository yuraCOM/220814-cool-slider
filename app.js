

function slidesPlag(num = 0) {
    const slides = document.querySelectorAll('.slide')
    slides[num].classList.add('active')


    slides.forEach(slide => {

        slide.addEventListener('click', () => {
            clearActiveClasse()
            slide.classList.add('active')
        })
    });

    function clearActiveClasse() {
        console.log('clear');
        slides.forEach(slide => {
            slide.classList.remove('active')
        });
    }
}

slidesPlag()
