import { logo } from "../../assets"
import ZoomInIcon from '@mui/icons-material/ZoomIn';
////styles
import "./styles.scss"
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-col">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-right-col">
        <div className="search-bar">
          <ZoomInIcon/>

        </div>
        <ul className="list">
          <li>
            <span>Rule</span>
            <span>Download Apk</span>
          </li>
          <li >
            <span>Balance:300</span>
            <span>Exp:300</span>
          </li>
          <li>Demo</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar