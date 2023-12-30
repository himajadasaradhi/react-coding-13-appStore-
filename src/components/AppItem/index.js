// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {imageUrl, appName} = appsList
  return (
    <div className="container">
      <li className="app-list-container">
        <img src={imageUrl} alt={appName} className="image" />
        <p>{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
