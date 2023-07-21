import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faPlus, faMessage, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NotificationComponent from './NotificationComponent'
import MessageWindowComponent from './MessageWindowComponent'

const element = <FontAwesomeIcon className='iconCss' icon={faHouse} />

const search = <FontAwesomeIcon className='iconCss' icon={faMagnifyingGlass} />

const Menu = <FontAwesomeIcon className='iconCss' icon={faBars} />

const create = <FontAwesomeIcon className='iconCss' icon={faPlus} />

const Messages = <FontAwesomeIcon className='iconCss' icon={faMessage} />

const Notifications = <FontAwesomeIcon className='iconCss' icon={faBell} />

const Account = <FontAwesomeIcon className='iconCss' icon={faUser} />

const SideNavbarComponent = (props) => {
  const [changeNavWidth, setchangeNavWidth] = useState(true);
  const [notificationsWindow, setnotificationsWindow] = useState(false);
  const [messagewindow, setmessagewindow] = useState(false);
  
  function onClick() {
    if (!notificationsWindow) {
      setmessagewindow(false);

      setchangeNavWidth(false);
      setnotificationsWindow(true);
    } else {
      setnotificationsWindow(false);
    }
  }
  function messageOnclick() {
    if (messagewindow == true) {
      setnotificationsWindow(false);
      setchangeNavWidth(false);
      setmessagewindow(true);
    } else {
      setmessagewindow(false);

    }
  }
  if (changeNavWidth) {
    return (
      <ul id='fixedComponent' class="nav flex-column">
        <li><img style={{ height: "80px", width: "200px" }} src="../../images/cover.png" /></li>
        <li style={{ marginTop: "10px" }} class="nav-item">
          <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{element}    Home</a>
        </li>
        <li style={{ marginTop: "10px" }} class="nav-item">
          <a onClick={onClick} style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{search}    Search</a>
        </li>
        <li style={{ marginTop: "10px" }} class="nav-item">
          <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{create}    Create</a>
        </li>
        <li style={{ marginTop: "10px" }} class="nav-item">
          <a onClick={messageOnclick} style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{Messages}    Messages</a>
        </li>
        <li style={{ marginTop: "10px" }} class="nav-item">
          <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{Notifications}    Notification</a>
        </li>
        <li style={{ marginTop: "10px" }} class="nav-item">
          <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{Account} Account</a>
        </li>
        <div style={{ position: "absolute", bottom: "0px", marginBottom: "10px" }}>
          <a style={{ color: "black", margin: "10px", display: "flex" }} class="nav-link" href="#">{Menu} More</a></div>

      </ul>);
  }
  else {
    return (
      <div style={{ backgroundColor: "white", height: "100%", fontSize: "18px", borderRight: "1px solid grey", width: "75px" }}>
        <ul style={{ backgroundColor: "white", height: "100%", fontSize: "18px", borderRight: "1px solid grey", width: "75px" }} class="nav flex-column">
          <li><img style={{ height: "80px", width: "80px", margin: "auto" }} src="../../images/fistogram-logo.png" /></li>
          <li style={{ marginTop: "10px" }} class="nav-item">
            <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{element}</a>
          </li>
          <li style={{ marginTop: "10px" }} class="nav-item">
            <a onClick={onClick} style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{search}  </a>
          </li>
          <li style={{ marginTop: "10px" }} class="nav-item">
            <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{create}  </a>
          </li>
          <li style={{ marginTop: "10px" }} class="nav-item">
            <a onClick={messageOnclick} style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{Messages}    </a>
          </li>
          <li style={{ marginTop: "10px" }} class="nav-item">
            <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{Notifications}  </a>
          </li>
          <li style={{ marginTop: "10px" }} class="nav-item">
            <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{Account}</a>
          </li>
          <div style={{ position: "absolute", bottom: "0px", marginBottom: "10px" }}>
            <a style={{ color: "black", margin: "10px" }} class="nav-link" href="#">{Menu}</a></div>

        </ul>
        {notificationsWindow && <NotificationComponent notificationsWindow={notificationsWindow} />}
        {messagewindow && <MessageWindowComponent messagewindow={messagewindow} />
        }
      </div>
    );
  }

}

export default SideNavbarComponent;
