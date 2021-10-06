import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="midContainer">
        <p className="timeStyle">{timeAccessed}</p>

        <img src={logoUrl} alt="domain logo" className="domain-image" />
        <p className="name">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            className="deleteImage"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
