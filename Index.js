const name = document.getElementById('name')
const PhoneNumber = document.getElementById('PhoneNumber')
const dddd = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>
{
	let messages = []
	if (name.value === '' || name.value == null){
		messages.push('Name required')
	}
	
	if (phonenumber.value.length = 10) {
		messages.push('Enter valid phone number')
	}
	
	if (messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
	
})
