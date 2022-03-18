import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className= "portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Porjects</li>
        <li>Branding/Desires</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="./assets/consolethis.png" alt="" /> {/* this is where you add the project*/}
          <h3>Console This</h3>
        </div>
        <div className="item">
          <img src="./assets/quick-quack.png" alt="" /> {/* this is where you add the project     https://quick-quack-quiz.herokuapp.com/*/} 
          <h3>Quick Quack Quiz</h3>
        </div>
        <div className="item">
          <img src="./assets/budget.png" alt="" /> {/* this is where you add the project*/}
          <h3>Budget Tracker</h3>
        </div>
      </div>
    </div>
  )
}