document.addEventListener('DOMContentLoaded', function () {
    const headerTitle = document.querySelector('header h1');
    let isScrolling = false;

    function checkScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop === 0) {
            showHeaderTitle();
        } else {
            hideHeaderTitle();
        }
    }

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            checkScroll();
        }
    });

    checkScroll();  // Initial check to set the correct state of the header title

    function hideHeaderTitle() {
        headerTitle.classList.add('hidden');
    }

    function showHeaderTitle() {
        headerTitle.classList.remove('hidden');
    }

    // Smooth scrolling function
    function scrollToSection(sectionId) {
        isScrolling = true;
        var section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - document.querySelector('header').offsetHeight,
            behavior: "smooth"
        });
        setTimeout(() => {
            isScrolling = false;
            checkScroll();  // Recheck the scroll position after scrolling
        }, 500);  // Adjust timeout as necessary for scroll duration
    }

    // Attach click event listeners to buttons
    document.getElementById('hot').addEventListener('click', function() {
        scrollToSection('hot-drinks');
    });

    document.getElementById('cold').addEventListener('click', function() {
        scrollToSection('cold-drinks');
    });

    document.getElementById('alkol').addEventListener('click', function() {
        scrollToSection('alcohol');
    });

    document.getElementById('cig').addEventListener('click', function() {
        scrollToSection('cigarettes');
    });
});
