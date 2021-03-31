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

const contactBarFooter = document.getElementById('contact-bar-footer');

const dropDownListContainer = document.getElementById('drop-down-container')
const dropDownList = document.getElementById('drop-down-inner')
const navItemToBeMove = document.getElementById('navigation-bar-item-afterCareers')


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
    navigationBar.classList.remove('increase-nav-height')
    if (dropDownList.className.includes('open-drop-down-inner-menu') && navigationBar.className.includes("navigation-bar-mobile"))
        navigationBar.classList.add('increase-nav-height')
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
            howItWorksTexts[index].classList.toggle("show");
        })
    })
    mobileMenuButton.addEventListener('click', openMobileMenu)
}
if (deviceWidth > 450) {
    modal.style.display = 'block'
    setTimeout(() => {
        modal.classList.add('open-modal')
    }, 15000);
}
else
    modal.style.display = 'none'



//-----------------questions-opens-------------------
QAquestionsContainers.forEach((question, index) => {
    question.addEventListener('click', (e) => {
        QAanswersContainers[index].classList.toggle("show");
        QAarrowDown[index].classList.toggle('none');
        QAarrowDown[index].classList.toggle('inline-block');
        QAarrowUp[index].classList.toggle('none');
        QAarrowUp[index].classList.toggle('inline-block');

    })
})
publicQAquestionsContainers.forEach((question, index) => {
    question.addEventListener('click', (e) => {
        publicQAanswersContainers[index].classList.toggle("show");
        QAarrowDown[index].classList.toggle('none');
        QAarrowDown[index].classList.toggle('inline-block');
        QAarrowUp[index].classList.toggle('none');
        QAarrowUp[index].classList.toggle('inline-block');

    })
})

//----------------- modals- exit button ---------------------

exitButtonModal.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.remove('open-modal')
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

//---------------------drop down hover--------------
if (deviceWidth > 925) {
    dropDownListContainer.addEventListener('mouseover', (e) => {
        e.preventDefault();
        dropDownList.className = 'drop-down-inner-menu open-drop-down-inner-menu'
    })
    dropDownListContainer.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        dropDownList.className = 'drop-down-inner-menu';
    })
    dropDownList.addEventListener('mouseover', (e) => {
        e.preventDefault();
        dropDownList.className = 'drop-down-inner-menu open-drop-down-inner-menu'
    })
    dropDownList.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        dropDownList.className = 'drop-down-inner-menu';
    })
}
else {
    dropDownListContainer.addEventListener('click', (e) => {
        e.preventDefault();
        dropDownList.classList.toggle('open-drop-down-inner-menu')
        navItemToBeMove.classList.toggle('drop-down-opened')
        navigationBar.classList.toggle('increase-nav-height')
        body.classList.add(scrollUp);
    })
}

