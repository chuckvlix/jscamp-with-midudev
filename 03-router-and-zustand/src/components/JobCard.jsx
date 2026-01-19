import { useState } from 'react'
import { Link } from './Link'
import { useFavoritesStore } from '../store/favoritesStore'
import styles from './JobCard.module.css'
import { useAuthStore } from '../store/authStore'

function JobCardFavoriteButton ({ jobId }) {
  const { isLoggedIn } = useAuthStore()
  const { toggleFavorite, isFavorite } = useFavoritesStore()

  return (
    <button
      disabled={!isLoggedIn}
      onClick={() => toggleFavorite(jobId)}
    >
      { isFavorite(jobId) ? '❤️' : '🤍' }
    </button>
  )
}

function JobCardApplyButton  ({ jobId }) {
  const [isApplied, setIsApplied] = useState(false)
  const { isLoggedIn } = useAuthStore()

  const buttonClass = isApplied ? 'btn-apply-job is-applied' : 'btn-apply-job'
  const textButton = isApplied ? 'Aplicado' : 'Aplicar'

  function handleApplyClick() {
    setIsApplied(true)
  }

  return (
    <button
      disabled={!isLoggedIn}
      className={`btn-apply-job ${buttonClass}`}
      onClick={handleApplyClick}
    >
      {textButton}
    </button>
  )
}

function JobCard({ job }) {
  return (
    <article
      className="job-description-card"
      data-job={job.data?.location}
      data-technology={job.data?.technology}
      data-experience={job.data?.experiencia}
    >
      <div>
        <h3>
          <Link href={`/jobs/${job.id}`} className={styles.title}>
            {job.titulo}
          </Link>
        </h3>
        <small>{job.empresa} | {job.ubicacion}</small>
        <p>{job.descripcion}</p>
      </div>

      <div className={styles.actions}>
        <Link href={`/jobs/${job.id}`} className={styles.details}>
          Ver detalles
        </Link>
        <JobCardApplyButton jobId={job.id} />
        <JobCardFavoriteButton jobId={job.id} />
      </div>
    </article>
  )
}

export default JobCard