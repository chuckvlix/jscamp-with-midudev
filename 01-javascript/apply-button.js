

// Delegación de eventos optima
const jobListingSection = document.querySelector('.job-listings')

jobListingSection?.addEventListener('click', (event) => {
  const element = event.target;
  if (element.classList.contains('btn-apply-job')) {
    element.textContent = '¡Aplicado!';
    element.disabled = true;
  }
})


// Delegación de eventos
/* const buttonsApply = document.querySelectorAll('.btn-apply-job')

buttonsApply.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = '¡Aplicado!'
    button.disabled = true
  })
}) */

// Comentarios con otros eventos interesantes
// Otros tipos de eventos: 'blur', 'submit', 'change'
/* const searchInput = document.querySelector('#jobs-search-input')

searchInput?.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase()
  console.log(searchTerm)
})

searchInput?.addEventListener('blur', (event) => {
  console.log('Se dispara cuando el campo pierde el foco')
})

searchInput?.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('El formulario se ha enviado')
}) */