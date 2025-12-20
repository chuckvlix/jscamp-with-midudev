import { useEffect, useState } from "react"
import JobsSearchSection from "../components/JobsSearchSection.jsx"
import SearchResultsSection from "../components/SearchResultsSection.jsx"
import { useRouter } from "../hooks/useRouter.jsx"

const RESULTS_PER_PAGE = 4

const useFilters = () => {
  const [filters, setFilters] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return {
      technology: params.get('technology') || '',
      location: params.get('type') || '',
      experience: params.get('level') || ''
    }
  })
  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('text') || ''
  })
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get('page'))
    return Number.isNaN(page) ? page : 1
  })

  const [jobs, setJobs] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const {navigateTo} = useRouter()

  const handleClearFilters = () => {
    setFilters({
      technology: '',
      location: '',
      experience: ''
    })
    setTextToFilter('')
    setCurrentPage(1)
  }

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true)

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('type', filters.location)
        if (filters.experience) params.append('level', filters.experience)

        const offset = (currentPage - 1) * RESULTS_PER_PAGE
        params.append('limit', RESULTS_PER_PAGE)
        params.append('offset', offset)

        const queryParams = params.toString() ? `?${params.toString()}` : ''

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs${queryParams}`)
        const json = await response.json()

        setJobs(json.data)
        setTotal(json.total)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [filters, textToFilter, currentPage])

  useEffect(() => {
    const params = new URLSearchParams()

    if (textToFilter) params.append('text', textToFilter)
    if (filters.technology) params.append('technology', filters.technology)
    if (filters.location) params.append('type', filters.location)
    if (filters.experience) params.append('level', filters.experience)
    if (currentPage > 1) params.append('page', currentPage)

    const newURL = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname

    navigateTo(newURL)
  }, [filters, textToFilter, currentPage, navigateTo])

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE)

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1)
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }

  return {
    jobs,
    total,
    totalPages,
    loading,
    handleSearch,
    textToFilter,
    handleTextFilter,
    handleClearFilters,
    currentPage,
    setCurrentPage
  }
}

export function SearchPage() {
  const {
    loading,
    jobs,
    total,
    totalPages,
    textToFilter,
    currentPage,
    setCurrentPage,
    handleSearch,
    handleTextFilter,
    handleClearFilters
  } = useFilters()

  const title = loading
    ? `Cargando...`
    : `Resultados: ${total}, Página ${currentPage} - DevJobs`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Explora miles de oportunidades laborales en el sector tecnológico. Encuentra tu próximo empleo en DevJobs." />
      <main className="jobs">
        <JobsSearchSection
          initialText={textToFilter}
          onSearch={handleSearch}
          onTextFilter={handleTextFilter}
          handleClearFilters={handleClearFilters}
        />
        <h2>Resultados de búsqueda</h2>
        {
          loading
            ? <p>Cargando empleos...</p>
            : <SearchResultsSection jobs={jobs} currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        }
      </main>
    </>
  )
}

export default SearchPage
