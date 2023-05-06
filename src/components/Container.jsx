import './Container.styles.css'

const Container = (props) => {
  return (
    <div className="container">
      {props.children.map(child => child)}
    </div>
  )
}

export default Container