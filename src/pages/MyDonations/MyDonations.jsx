import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyDonations = () => {
    const { user, loading } = useContext(AuthContext); // Get the logged-in user's data
    const [donations, setDonations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user?.email) {
            fetch(`https://fund-together-server.vercel.app/myDonations/${user.email}`) // Pass `user.email` to the API
                .then((res) => res.json())
                .then((data) => setDonations(data))
                .catch((error) => console.error("Error fetching donations:", error));
        } else if (!loading && !user) {
            navigate("/login"); // Redirect to login if user is not logged in
        }
    }, [user, loading, navigate]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <Navbar />
            <div>
                <h2 className="w-11/12 mx-auto text-center text-3xl font-bold my-5">My Donations</h2>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
                {donations.length > 0 ? (

                    donations.map(donation => (
                        <div className="card bg-slate-200 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-blue-600 mb-3">Title: {donation.title}</h2>
                                <p className="text-lg font-medium text-gray-700 mb-1">
                                    <span className="text-blue-500">Type:</span> {donation.type}
                                </p>
                                <p className="text-gray-600 mb-3">
                                    <span className="font-medium">Description:</span> {donation.description}
                                </p>
                                <p className="text-lg font-semibold text-green-600 mb-2">
                                    <span className="font-medium">Donated:</span> ${donation.minDonation}
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    <span className="font-medium">Deadline:</span> {donation.deadline}
                                </p>
                                <hr className="border-gray-300 mb-4" />
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-gray-700">
                                        <p className="font-medium">By:</p>
                                        <p><span className="font-medium">Name:</span> {donation.name}</p>
                                        <p><span className="font-medium">Email:</span> {donation.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))

                ) : (
                    <div className="text-xl font-semibold text-red-400">
                        <p>No donations found.</p>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    );
};

export default MyDonations;
