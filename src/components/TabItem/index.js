import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onChangeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
