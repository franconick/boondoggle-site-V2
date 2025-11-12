import './LinkButton.css'

function LinkButton({ text = "View work", onClick }) {
  return (
    <button className="link-button" onClick={onClick}>
      {text}
    </button>
  )
}

export default LinkButton

