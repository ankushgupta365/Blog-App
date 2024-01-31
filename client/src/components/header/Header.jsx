import "./header.css";
import BG from '../../assets/bg.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Online Education Informational Journal</span>
      </div>
      <img
        className="headerImg"
        src={BG}
        alt=""
      />
    </div>
  );
}
