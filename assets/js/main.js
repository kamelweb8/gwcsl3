const authModal = document.querySelector(".auth-modal");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginBtnModal = document.querySelector(".login-btn-modal");
const closeBtnModal = document.querySelector(".close-btn-modal");

registerLink.addEventListener("click", () => authModal.classList.add("slide"));
loginLink.addEventListener("click", () => authModal.classList.remove("slide"));

loginBtnModal.addEventListener("click", () => authModal.classList.add("show"));
closeBtnModal.addEventListener("click", () => authModal.classList.remove("show", "slide"));

const filterButtons = document.querySelectorAll('[data-filter]');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === '*' || item.getAttribute('data-work') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});