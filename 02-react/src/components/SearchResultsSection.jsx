import JobCard from './JobCard.jsx'
import Pagination from './Pagination.jsx'

function SearchResultsSection() {
  return (
    <section>
      <h3>Resultados de búsqueda</h3>
      <div className="job-listings">
        <JobCard
          titulo="Desarrollador Frontend"
          empresa="Tech Solutions"
          ubicacion="Remoto"
          descripcion="Buscamos un desarrollador frontend con experiencia en React.js y CSS."
          data={{ location: 'remoto', technology: 'react', experiencia: 'junior' }}
        />
        <JobCard
          titulo="Backend Developer"
          empresa="Innovatech"
          ubicacion="Buenos Aires"
          descripcion="Se necesita un desarrollador backend con conocimientos en Node.js y bases de datos SQL."
          data={{ location: 'buenos-aires', technology: 'node', experiencia: 'mid' }}
        />
      </div>
      <Pagination currentPage={1} totalPages={7} />
    </section>
  )
}

export default SearchResultsSection