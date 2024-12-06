import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slider1 from "../../assets/slider 1.jpg";
import slider2 from "../../assets/slider 2.jpg";
import slider3 from "../../assets/slider 3.jpg";
import crowdFunding from "../../assets/crowdfunding.jpg";
import { useLoaderData } from "react-router-dom";
import CampaignDetails from "../CampaignDetails/CampaignDetails";

const Home = () => {
    const runningCampaigns = useLoaderData();
    return (
        <div>
            <Navbar />
            <div className="">
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

            {/* running section */}
            <div className="text-center font-bold text-3xl mt-10">
                <h2>Running Campaigns</h2>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    runningCampaigns.map(campaign => (
                        <div className="card bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="card-body p-6 text-center">
                                <h2 className="card-title text-xl font-bold text-gray-800 mb-2">{campaign.title}</h2>
                                <h2 className="text-lg font-medium text-gray-600 mb-4">
                                    <span className="text-gray-700 font-semibold">Minimum Donation:</span> ${campaign.minDonation}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    <span className="font-semibold">Description:</span> {campaign.description}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <span className="font-semibold">Type:</span> {campaign.type}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <span className="font-semibold">Deadline:</span> {new Date(campaign.deadline).toLocaleDateString()}
                                </p>
                                <div className="card-actions">
                                    <button className="btn btn-primary w-full text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-4">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div>
                <div className="my-10 bg-blue-50 py-10">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">What is Crowdfunding?</h2>
                        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                            Crowdfunding is a way of raising money for various projects, causes, or businesses by collecting small amounts of money from a large number of people, typically via an online platform. It enables individuals and organizations to reach out to a wider audience to fund their ideas and make them a reality.
                        </p>
                        <div className="mt-6 text-center w-full">
                            <img
                                src={crowdFunding}
                                alt="Crowdfunding Illustration"
                                className="rounded-lg shadow-lg mx-auto w-1/2"
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="my-10 bg-gray-100 py-10">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Crowdfunding Helps People</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Access to Funds</h3>
                                <p className="text-gray-600">
                                    Crowdfunding provides individuals and businesses access to much-needed funds that might not be available through traditional means like bank loans.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Community Support</h3>
                                <p className="text-gray-600">
                                    It brings people together to support causes they care about, fostering a sense of community and collective effort.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Empowering Creativity</h3>
                                <p className="text-gray-600">
                                    Crowdfunding empowers creators and entrepreneurs to bring their innovative ideas to life without financial constraints.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Home;
