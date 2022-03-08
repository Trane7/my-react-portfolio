import "./topbar.scss"
import {AccountBox, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className= {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContaner"> 
          <AccountBox className="icon" /> {/* add icons here*/}
          <span>612-860-9181</span>
          </div>
          <div className="itemContaner"> 
          <Mail className="icon" /> {/* add icons here*/}
          <span>dgrowette@gmail.com</span>
          </div>
        </div>
        <h1>Demetre's Portfolio</h1>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}