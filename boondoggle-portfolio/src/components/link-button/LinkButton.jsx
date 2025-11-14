import './LinkButton.css'
import { Link } from 'react-router-dom'

function LinkButton({ text = "View work", onClick, to }) {
  if (to) {
    return (
      <Link to={to} className="link-button">
        {text}
      </Link>
    )
  }
  
  return (
    <button className="link-button" onClick={onClick}>
      {text}
    </button>
  )
}

export default LinkButton

