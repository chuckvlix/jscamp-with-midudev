// Buscador de empleos
const searchInput = document.querySelector('#jobs-search-input')

searchInput?.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase()
  const jobs = document.querySelectorAll('.job-description-card')

  jobs.forEach(job => {
    const jobTitle = job.dataset.titulo?.toLowerCase() || ''
    const jobCompany = job.dataset.empresa?.toLowerCase() || ''
    const isShow = jobTitle.includes(searchTerm) || jobCompany.includes(searchTerm)
    job.classList.toggle('is-hidden', !isShow)
  })
})