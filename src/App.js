import Navbar from './components/navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './app.css';
import { Navigation } from 'swiper';
import egg from './images/slider1.png';
import leave from './images/slider2.png';
import prawns from './images/slider3.png';
import lettuce from './images/slider4.png';
import tomato from './images/slider5.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="parallax-container">
        <div className="parallax"></div>
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
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img src={leave} alt="leave-img"></img>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img src={prawns} alt="prawn-img"></img>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img src={lettuce} alt="lettuce-img"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={tomato} alt="tomato-img"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
