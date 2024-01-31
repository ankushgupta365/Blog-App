import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Profile from '../../assets/joshi.jpg';
import { Context } from "../../context/Context";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const { user, dispatch } = useContext(Context);


  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={user?.profilePic ? PF + user.profilePic : Profile}
          alt=""
        />
        <h3>Dr. Suresh C. Joshi</h3>
        <p>
          Pedagogical Innovations | Instructional Design & Technology | Game-Based Teaching | Online Learning | Higher Education | Green-House Leadership
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CONNECT WITH ME</span>
        <div className="sidebarSocial">
          <a href="" target="_blank"  className="sidebarIconWrapper"><i className="sidebarIcon fab fa-twitter-square"></i></a>
          <a href="https://www.linkedin.com/in/joshisc/" target="_blank" className="sidebarIconWrapper">
            <i class="sidebarIcon fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
