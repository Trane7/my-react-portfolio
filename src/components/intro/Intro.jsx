import "./intro.scss"

export default function Intro() {
  return (
    <div className= "intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/me.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello, I'm</h2>
            <h1>Demetre Growette</h1>
            <h3>Full-Stack Web Developer<span></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}