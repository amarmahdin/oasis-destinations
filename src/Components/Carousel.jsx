import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from "../Assets/slide1.png"
import slide2 from "../Assets/slide2.png"
import slide3 from "../Assets/slide3.png"
import slide4 from "../Assets/slide4.png"

const CarouselComponent = () => {
  return (

    <Carousel useKeyboardArrows={true}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      interval={3000}
      transition={{
        transform: (index, slideCount) => {
          if (index === slideCount - 1) {
            return `translateX(-${(slideCount * 100) % (slideCount * 100)}%)`;
          }
          return `translateX(-${index * 100}%)`;
        }
      }}
    > 
      <div className='flex flex-col justify-center items-center'>
        <img src={slide1} alt="1" className='1 h-[800px]'/>
        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[100%] font-bold text-neutral-50 text-[60px] text-center">Indonesia's Enchanting East</h1>
        <p className="absolute top-[460px] w-[600px] left-1/2 transform -translate-x-1/2 -translate-y-[100px] text-xl font-medium text-neutral-50 text-center ">Where culture meets nature, adventure awaits, and memories are made. Visit Jawa Timur and discover the magic that lies within. </p>
      </div>
      <div>
        <img src={slide3} alt="2"className='2 h-[800px]'/>
        <h1 className="absolute top-1/3 left-[420px] text-left -translate-x-1/2 w-[660px] font-bold text-neutral-50 text-[60px]">Travel Around</h1>
        <h1 className="absolute top-[380px] left-[495px] text-left -translate-x-1/2 -translate-y-12 w-[800px] font-bold text-neutral-50 text-[60px]">The Beautiful World</h1>
        <p className="absolute top-1/2 left-[455px] text-left w-[700px] -translate-x-1/2 translate-y-6 font-medium text-xl text-neutral-50">Explore breathtaking landscapes, vibrant cultures, and captivating experiences. We'll craft a personalized itinerary for your global adventure, immersing you in local traditions and creating unforgettable memories.</p>
      </div>
      <div>
        <img src={slide2} alt="3" className='3 h-[800px]'/>
        <h1 className="absolute top-1/3 left-[440px] text-left -translate-x-1/2 w-[700px] font-bold text-neutral-50 text-[60px]">The Smartest Way To Travel Well</h1>
        <p className="absolute top-1/2 left-[451px] text-left w-[700px] -translate-x-1/2 translate-y-10 text-xl font-medium text-neutral-50">Unleash the world's wonders with our personalized approach and seamless planning. Travel well, explore intelligently, and create unforgettable memories.</p>
      </div>
      <div className=''>
        <img src={slide4} alt="4" className='4 h-[800px]'/>
        <h1 className="absolute top-1/3 left-[450px] text-left -translate-x-1/2 w-[700px] font-bold text-neutral-50 text-[60px]">Experience The Best Trip Ever</h1>
        <p className="absolute top-1/2 left-[408px] text-left w-[600px] text-xl -translate-x-1/2 translate-y-10 font-medium text-neutral-50">Make Your Next Trip the Best Ever! Contact Us Today! Transform Your Travel Dreams into Reality: Let Us Create Your Best Trip Ever!</p>
      </div>
    </Carousel>
    );
}

export default CarouselComponent;