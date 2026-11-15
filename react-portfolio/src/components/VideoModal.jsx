import { useEffect } from 'react'

function VideoModal({ video, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={`${video.title} video`}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close video"
          autoFocus
        >
          &times;
        </button>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
          title={`${video.title} video demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>
    </div>
  )
}

export default VideoModal
