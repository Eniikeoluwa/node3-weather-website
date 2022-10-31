const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

messageOne.textContent = 'From Javascript'
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = serch.value

    fetch('/weather/?address='), then((response) =>{
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent(data.error)
            } else {
                messageOne.textContent(data.location)
                messageTwo.textContent(data.forecast)
                console.log(data.location)
                console.log(data.forecast)
            }
        })
     })
})