import './HistoryList.css'

const HistoryList = props => {
  const {historyDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="history-list">
      <div className="container1">
        <p>{timeAccessed}</p>
        <div className="logo-list">
          <img className="logo-url" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>

      <div className="delete">
        <button type="button" className="button">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            onClick={onDelete}
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryList
