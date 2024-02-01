import "./header.css";
import BG from '../../assets/bg.jpg';
import BG2 from '../../assets/carousel-2.png';
import BG3 from '../../assets/carousel-3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Header() {
  return (
    <div className="header">
      {/* <Carousel showIndicators={true} showThumbs={false} showArrows={true} showStatus={false} autoPlay={true}
      infiniteLoop={true}> */}
        <img
          className="headerImg"
          src={BG}
          alt=""
        />
      {/* </Carousel> */}

    </div>
  );
}
