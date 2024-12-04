import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slider1 from "../../assets/slider 1.jpg";
import slider2 from "../../assets/slider 2.jpg";
import slider3 from "../../assets/slider 3.jpg";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-5">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="h-[500px] w-full object-cover"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="Slide 1" className="w-full h-full object-cover" />
                        <div className="absolute animate__animated animate__bounce top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#C6E7FF] text-center font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Together, we can achieve more.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="Slide 2" className="w-full h-full object-cover" />
                        <div className="absolute animate__animated animate__bounce top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#C6E7FF] text-center font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Small contributions, big impact.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="Slide 3" className="w-full h-full object-cover" />
                        <div className="absolute animate__animated animate__bounce top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#C6E7FF] text-center font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Turning ideas into reality, one pledge at a time.
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
