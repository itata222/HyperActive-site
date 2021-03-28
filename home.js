const exitButtonModal = document.querySelector('.modal-close-button')
const modal = document.querySelector('.main-modal')

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

const mobileMenuButton = document.getElementById('mobile-menu-button');
const navigationBar = document.getElementById('navigation-bar')
const mobileMenuMiddleBar = document.getElementById('menu-button-middle_bar')
const mobileMenuBars = document.getElementsByClassName('menu-bar')
const navigationBarContainer = document.getElementById('navigation-bar-container')

const howitworksBoxes = document.querySelectorAll('.howitworks-box')
const howItWorksTexts = document.querySelectorAll('.category-inner-menu')
const howItWorksTriangles = document.querySelectorAll('.triangle')

const QAquestionsContainers = document.querySelectorAll('.QA-question-container')
const QAanswersContainers = document.querySelectorAll('.QA-answer')
const publicQAquestionsContainers = document.querySelectorAll('.publicQA-container')
const publicQAanswersContainers = document.querySelectorAll('.publicQA-answer')
const QAarrowDown = document.querySelectorAll('.question-arrow-down')
const QAarrowUp = document.querySelectorAll('.question-arrow-up')

const privacyModal = document.getElementById('privacy-modal')
const privacyModalAccessibility = document.getElementById('privacy-modal-accessibility')
const usersPrivacyLink = document.getElementById('usersPrivacyLink')
const privacyAccessibilityLink = document.getElementById('privacyAccessibilityLink')
const privacyModalExitButton = document.getElementById('privacy-modal-exit-button')
const privacyModalAccessibilityExitButton = document.getElementById('privacy-modal-accessibility-exit-button')

const contactBarFooter = document.getElementById('contact-bar-footer')


const openMobileMenu = (e) => {
    e.preventDefault()
    mobileMenuBars[0].classList.toggle('open-mobile-nav-transform-second')
    mobileMenuBars[2].classList.toggle('open-mobile-nav-transform-first')
    mobileMenuMiddleBar.classList.toggle('open-mobile-nav-opacity')
    mobileMenuButton.style.marginLeft = mobileMenuButton.style.marginLeft === '1rem' ? '0.5rem' : '1rem';
    navigationBar.classList.toggle("navigation-bar-mobile");
    navigationBar.classList.toggle("navigation-bar");
    navigationBarContainer.classList.toggle("navigation-bar-container-mobile");
    navigationBarContainer.classList.toggle("navigation-bar-container");
}

if (deviceWidth > 925) {
    howItWorksTexts.forEach(element => {
        element.className = 'category-inner-menu'
    });
    howItWorksTriangles.forEach(element => {
        element.classList.remove('none')
    });
}
else {
    howitworksBoxes.forEach((box, index) => {
        box.addEventListener('click', (e) => {
            setTimeout(() => {
                howItWorksTexts[index].classList.toggle("none");
                howItWorksTexts[index].classList.toggle("close");
            }, 0);
            howItWorksTexts[index].classList.toggle("open-translate");
        })
    })
    QAquestionsContainers.forEach((question, index) => {
        question.addEventListener('click', (e) => {
            QAanswersContainers[index].classList.toggle("none");
            QAanswersContainers[index].classList.toggle("close");
            QAarrowDown[index].classList.toggle('none');
            QAarrowDown[index].classList.toggle('inline-block');
            QAarrowUp[index].classList.toggle('none');
            QAarrowUp[index].classList.toggle('inline-block');

        })
    })
    publicQAquestionsContainers.forEach((question, index) => {
        question.addEventListener('click', (e) => {
            publicQAanswersContainers[index].classList.toggle("none");
            publicQAanswersContainers[index].classList.toggle("close");
            QAarrowDown[index].classList.toggle('none');
            QAarrowDown[index].classList.toggle('inline-block');
            QAarrowUp[index].classList.toggle('none');
            QAarrowUp[index].classList.toggle('inline-block');

        })
    })
    mobileMenuButton.addEventListener('click', openMobileMenu)
}

//----------------- modals- exit button ---------------------
exitButtonModal.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = 'none'
})
usersPrivacyLink.addEventListener('click', () => {
    privacyModal.removeAttribute('hidden')
})
privacyAccessibilityLink.addEventListener('click', () => {
    privacyModalAccessibility.removeAttribute('hidden')
})
privacyModalExitButton.addEventListener('click', () => {
    privacyModal.hidden = true
})
privacyModalAccessibilityExitButton.addEventListener('click', () => {
    privacyModalAccessibility.hidden = true;
})

//---------------- footer sticky bar issue -------------------
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < 0) {
        body.classList.remove(scrollUp);
        return;
    }
    if (currentScroll == 0)
        body.classList.add(scrollUp)

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});


