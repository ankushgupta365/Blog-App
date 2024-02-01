import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import Avatar from '../../assets/avatar.png';
import Logo from '../../assets/logo-new.png';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blogapi.cudigiclass.in/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <a className="link" target="_blank" href="https://noteachingjustlearning.blogspot.com/">
              Blog
            </a>
          </li>
          {user ?
            <li className="topListItem">
              <Link className="link" to="/questions">
                Question
              </Link>
            </li>
            :
            <li className="topListItem">
            <Link className="link" to="/contact">
              Have Question?
            </Link>
          </li>
          }
          <li className="topListItem">
            <Link className="link" to="/research">
              Research
            </Link>
          </li>
          {user &&
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
          }

          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={user?.profilePic ? PF + user.profilePic : Avatar} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
