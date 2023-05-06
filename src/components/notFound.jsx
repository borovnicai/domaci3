import { Link } from 'react-router-dom'
import './notFound.styles.css'

const NotFound = () => {
  return (
    <div className="notFoundPageWrap">
      <div>
        <h1>404</h1>
        <p>not found</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound