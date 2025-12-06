// Filtrado de tecnologías
const filterTechnology = document.querySelector('#filter-technology')

filterTechnology?.addEventListener('change', () => {
  // Recuperar todas las cards de los trabajos
  const jobs = document.querySelectorAll('.job-description-card')
  const selectTechnology = filterTechnology.value

  jobs.forEach(job => {
    const jobTechnology = job.getAttribute('data-technology')
    const isShow = selectTechnology === '' || jobTechnology === selectTechnology
    job.classList.toggle('is-hidden', !isShow)
/*     if (selectTechnology === '' || jobTechnology === selectTechnology) {
      job.classList.remove('is-hidden') // Mostrar trabajos que coinciden
    } else {
      job.classList.add('is-hidden') // Ocultar trabajos que no coinciden
    } */
  })
})

// Filtrado de trabajos por ubicación
const filterLocation = document.querySelector('#filter-location')

filterLocation?.addEventListener('change', () => {
  const jobs = document.querySelectorAll('.job-description-card')
  const selectLocation = filterLocation.value

  jobs.forEach(job => {
    const jobLocation = job.getAttribute('data-location')
    const isShow = selectLocation === '' || jobLocation === selectLocation
    job.classList.toggle('is-hidden', !isShow)
  })
})
