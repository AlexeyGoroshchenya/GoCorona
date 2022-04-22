export const sendForm = () => {

    const form = document.querySelector('.subscribe__form')
    const formInput = document.querySelector('.subscribe__input')

    const statusBlock = document.createElement('div');
    const errorText = 'Что-то пошло не так...';
    const loadText = 'Заявка отправляется...';
    const successText = 'С вами свяжется наш менеджер';
    const notValidText = 'Пожалуйста проверьте введенные данные'

    const showSubmitStatus = (str) => {
        statusBlock.style.textAlign = 'center'
        statusBlock.style.height = '40px'
        statusBlock.style.borderRadius = '20px'
        statusBlock.style.backgroundColor = 'white'

        if (window.outerWidth < 992) {
            statusBlock.style.fontSize = '16px'
        } else { statusBlock.style.fontSize = '24px' }

        if (window.outerWidth < 768) {
            statusBlock.style.width = '70vw'
            statusBlock.style.paddingTop = '4px'
            statusBlock.style.paddingBottom = '4px'
        } else {
            statusBlock.style.paddingTop = '7px'
            statusBlock.style.width = '50vw'
        }


        if (str === loadText || str === successText) {
            statusBlock.style.color = 'green'
        } else if (str === errorText || str === notValidText) {
            statusBlock.style.color = 'red'
        }
        form.append(statusBlock)
        statusBlock.textContent = str
    }

    const validate = (input) => {

        let emailInput = true
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(input.value) === false) {
            showSubmitStatus('пожалуйста проверьте введенные данные')
            emailInput = false
        }
        return emailInput
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "aplication/json"
            }
        }).then(res => res.json())
    }

    const submitData = () => {
        const formElements = form.querySelector('.subscribe__input')
        const formData = new FormData(form)
        const formBody = {}


        showSubmitStatus(loadText)

        formData.forEach((val, key) => {
            formBody[key] = val;
        })
        console.log(formData);

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    showSubmitStatus(successText)

                    setTimeout(() => {

                        statusBlock.remove()
                    }, 5000)
                    formElements.value = '';
                })
                .catch(error => {
                    console.log(error);
                    successText(errorText)
                })
        } else {
            console.log('данные не валидны');

        }
    }

    try {
        if (!form) {
            throw new Error('верните форму')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitData()
        })
    } catch (error) {
        console.log(error.message);
    }



}