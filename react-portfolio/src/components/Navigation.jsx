const navigationItems = [
  { id: 'experience', label: 'Work and projects', icon: '/assets/icons/climb.png' },
  { id: 'home', label: 'Home', icon: '/assets/icons/igloo.png' },
  { id: 'education', label: 'Education', icon: '/assets/icons/paper.png' },
]

function Navigation({ activePage, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <div className="nav-container">
        {navigationItems.map((item) => (
          <button
            className={activePage === item.id ? 'nav-button selected' : 'nav-button'}
            key={item.id}
            type="button"
            title={item.label}
            aria-label={item.label}
            aria-current={activePage === item.id ? 'page' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            <img src={item.icon} alt="" />
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
