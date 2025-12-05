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

// Delegación de eventos
/* const buttonsApply = document.querySelectorAll('.btn-apply-job')

buttonsApply.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = '¡Aplicado!'
    button.disabled = true
  })
}) */

// Delegación de eventos optima
const jobListingSection = document.querySelector('.job-listings')

jobListingSection?.addEventListener('click', (event) => {
  const element = event.target;
  if (element.classList.contains('btn-apply-job')) {
    element.textContent = '¡Aplicado!';
    element.disabled = true;
  }
})

// Recuperar todas las cards de los trabajos
const jobs = document.querySelectorAll('.job-description-card')


// Filtrado de tecnologías
const filterTechnology = document.querySelector('#filter-technology')

filterTechnology?.addEventListener('change', () => {
  const selectetTechcnology = filterTechnology.value

  jobs.forEach(job => {
    const jobTechnology = job.getAttribute('data-technology')
    const isShow = selectetTechcnology === '' || jobTechnology === selectetTechcnology
    job.classList.toggle('is-hidden', !isShow)
/*     if (selectetTechcnology === '' || jobTechnology === selectetTechcnology) {
      job.classList.remove('is-hidden') // Mostrar trabajos que coinciden
    } else {
      job.classList.add('is-hidden') // Ocultar trabajos que no coinciden
    } */
  })
})

// Filtrado de trabajos por ubicación
const filterLocation = document.querySelector('#filter-location')

filterLocation?.addEventListener('change', () => {
  const selectLocation = filterLocation.value

  jobs.forEach(job => {
    const jobLocation = job.getAttribute('data-location')
    const isShow = selectLocation === '' || jobLocation === selectLocation
    job.classList.toggle('is-hidden', !isShow)
  })
})



