import "./topbar.scss"
import {AccountBox, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className= "topbar" id="topbar">
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
          this is right
        </div>
      </div>
    </div>
  )
}