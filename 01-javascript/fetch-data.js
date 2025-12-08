// Recuperar datos de un archivo JSON
const jobListingSection = document.querySelector('.job-listings')

const RESULTS_PER_PAGE = 3

fetch('./data.json')
  .then(response => response.json())
  .then(jobs => {
    jobs.slice(0, RESULTS_PER_PAGE).forEach(job => {
      const jobCard = document.createElement('article')
      jobCard.className = 'job-description-card'
      jobCard.dataset.technology = job.data.technology
      jobCard.dataset.location = job.data.location
      jobCard.dataset.experience = job.data.experience
      jobCard.dataset.titulo = job.titulo
      jobCard.dataset.empresa = job.empresa

      jobCard.innerHTML = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="btn-apply-job">Aplicar</button>
      `
      jobListingSection.appendChild(jobCard)
    })
  })
  .catch(error => {
    console.error('Error fetching data:', error)
  })