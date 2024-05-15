import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bnr1 from '../assets/home/01.jpg';
import bnr2 from '../assets/home/02.jpg';
import bnr3 from '../assets/home/03.png';
import bnr4 from '../assets/home/04.jpg';
import bnr5 from '../assets/home/05.png';
import bnr6 from '../assets/home/06.png';
const Banner = () => {
    return (
        <Carousel className="text-center"  showArrows={true} >
            <div>
                <img src={bnr1} />
            </div>
            <div>
                <img src={bnr2} />
            </div>
            <div>
                <img src={bnr3} />
            </div>
            <div>
                <img src={bnr4} />
            </div>
            <div>
                <img src={bnr5} />
            </div>
            <div>
                <img src={bnr6} />
            </div>
        </Carousel>
    );
};

export default Banner;