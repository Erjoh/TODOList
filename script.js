const input = document.querySelector('.input')
const addButton = document.querySelector('.addButton')
const addList = document.querySelector('.addList')

addButton.addEventListener('click', addItem)
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const inputName = input.value.trim()
    if (inputName === '') {
        alert('Write item-name !')
        return
    }
    if (addList.childElementCount >= 10) {
        addButton.style.display = 'none'
        alert('Items cannot be more than 10!')
        input.style.display = 'none'
    }

    const currentTime = new Date()
    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    const timeNow = `${hours} : ${minutes}`

    const toDoList = {name: inputName, time: timeNow}

    const li = document.createElement('li')
    li.innerHTML = `
        ${inputName} (${timeNow})
        <button class="delete">&#10060;</button>
    `

    addList.appendChild(li)

    input.value = ''

    const deleteButton = li.querySelector('.delete')
    deleteButton.addEventListener('click', () => {
        li.remove()
        addButton.style.display = 'inline'
        input.style.display = 'inline'
    })
}
