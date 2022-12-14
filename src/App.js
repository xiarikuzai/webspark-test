import Navbar from './components/navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './app.css';
import { Navigation } from 'swiper';
import banner from './images/banner.jpg';
import egg from './images/slider1.png';
import leave from './images/slider2.png';
import prawns from './images/slider3.png';
import lettuce from './images/slider4.png';
import tomato from './images/slider5.png';
import News from './components/news/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="parallax-container">
        <img
          src={banner}
          alt="banner-img"
          className="parallax"
        ></img>
      </div>
      <div className="carousel">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={egg} alt="egg-img"></img>
            <div className="overlay">Eggs</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={leave} alt="leave-img"></img>
            <div className="overlay">Leaves</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={prawns} alt="prawn-img"></img>
            <div className="overlay">Prawns</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={lettuce} alt="lettuce-img"></img>
            <div className="overlay">Lettuce</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={tomato} alt="tomato-img"></img>
            <div className="overlay">Tomato</div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text">
        <News />
      </div>
    </div>
  );
}

export default App;
