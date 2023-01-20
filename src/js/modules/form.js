import checkNumInputs from "./checkNumInputs";

const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]')
    const message = {
        loading: 'Loading...',
        success: 'Tnanks! We will call you back later',
        error: "Somethink went wrong"
    }

    const postDate = async (url, date) => {
        document.querySelector('status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: date
        })
        return await res.text();
    }
    const clearInput = () => {
        input.forEach(item => {
            item.value = ''
        })
    }
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault()
            let statusMessage = document.createElement('div') 
            statusMessage.classList.add('status')
            item.appendChild(statusMessage)
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postDate('assets/server.php', FormData) 
                    .then(res => {
                        console.log(res)
                        statusMessage.textContent = message.success
                    })
                    .catch(() => statusMessage.textContent = message.error)
                    .finally(() => {
                        clearInput()
                        setTimeout(() => {
                            statusMessage.remove()
                        }, 6000)
                    })
        })
    })
}
export default forms;