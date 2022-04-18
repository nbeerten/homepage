var animations = {
    reveal: function() {
        var reveals = document.querySelectorAll("#revealOnScroll");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = -10;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("reveal-active");
            } else {
                reveals[i].classList.remove("reveal-active");
            }
        }
    }
};

try {
    window.addEventListener("scroll", animations.reveal);
} catch (error) {
    console.error("Error accured upon creating eventlistener for scroll animation.")   
}