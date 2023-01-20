const images = () => {
    const impPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    impPopup.classList.add('popup');
    workSection.appendChild(impPopup);

    impPopup.style.cssText = 'display:none; justify-content:center; align-items:center;'
    bigImg.style.cssText ='border:red 2px solid; width:90vh; height:80vh;'

    impPopup.appendChild(bigImg)
    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if(target && target.classList.contains('preview')) {
            impPopup.style.display = 'flex'
            const path = target.parentNode.getAttribute('href')
            bigImg.setAttribute('src', path)
        }
        if(target && target.matches('.popup')) {
            impPopup.style.display = 'none'
        }
    })
}
export default images;