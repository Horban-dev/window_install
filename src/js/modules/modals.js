const modals = () => {
    function bindModal(initialSelector, modalSelector, closeModalSelector) {
        const   open = document.querySelectorAll(initialSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeModalSelector);
        open.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault()
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'
            
            })
        })
            
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = "";
        })
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = "";
            }
        })
    }
    // setTimeout
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    
}
export default modals;
