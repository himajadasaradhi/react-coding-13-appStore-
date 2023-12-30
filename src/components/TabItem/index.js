// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onDisplayProjects, isActive} = props
  const {displayText, tabId} = tabsList
  const onChangeProjects = () => {
    onDisplayProjects(tabId)
  }
  const activeTabClassName = isActive ? 'active' : 'inactive'
  return (
    <div>
      <li className="list">
        <button
          type="button"
          onClick={onChangeProjects}
          className={activeTabClassName}
        >
          {displayText}
        </button>
      </li>
    </div>
  )
}
export default TabItem
