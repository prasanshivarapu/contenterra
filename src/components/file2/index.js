import './index.css'

const Products = props => {
  const {happy} = props

  return (
    <div>
      <div className="main">
        <div className="photo">
          <h3 className="para">{happy.data.title}</h3>

          <p className="para">Score: {happy.data.score}</p>
          <a href={happy.data.url} target="_blank" rel="noopener noreferrer">
            Link
          </a>
          <hr className="line" />
        </div>
      </div>
    </div>
  )
}

export default Products
