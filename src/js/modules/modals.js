const modals = () => {
    function bindModal(initialSelector, modalSelector, closeModalSelector, closeClickOut = true) {
        const   open = document.querySelectorAll(initialSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeModalSelector),
                window = document.querySelectorAll('[data-modal]'),
                scroll = calcScroll();
        open.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault()
                }
                window.forEach(item => {
                    item.style.display = 'none'
                })
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scroll}px`
            })
        })
            
        close.addEventListener('click', () => {
            window.forEach(item => {
                item.style.display = 'none'
            })
            modal.style.display = 'none';
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`
        })
        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOut) {
                window.forEach(item => {
                    item.style.display = 'none'
                })
                modal.style.display = 'none';
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`
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

    function calcScroll() {
        let div = document.createElement('div')
        div.style.cssText = 'width:50px; height:50px; overflowY:scroll; visibillity:hidden;'
        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()
        return scrollWidth
    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}
export default modals;
