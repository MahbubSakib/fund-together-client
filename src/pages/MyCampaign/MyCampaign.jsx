import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
    const { user, loading } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user?.email) {
            fetch(`https://fund-together-server.vercel.app/myCampaigns/${user.email}`)
                .then((res) => res.json())
                .then((data) => setCampaigns(data))
                .catch((error) => console.error("Error fetching campaigns:", error));
        } else if (!loading && !user) {
            navigate("/login");
        }
    }, [user, loading, navigate]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fund-together-server.vercel.app/myCampaigns/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success",
                            });
                            const remaining = campaigns.filter((cam) => cam._id !== id);
                            setCampaigns(remaining);
                        }
                    })
                    .catch((error) => console.error("Error deleting campaign:", error));
            }
        });
    };

    return (
        <div>
            <Navbar />
            <div className="w-full sm:w-11/12 md:w-9/12 lg:w-7/12 mx-auto my-10">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-center">
                    My Campaigns
                </h1>
                {campaigns.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300 text-sm md:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2">Title</th>
                                    <th className="border border-gray-300 px-4 py-2">Type</th>
                                    <th className="border border-gray-300 px-4 py-2">Description</th>
                                    <th className="border border-gray-300 px-4 py-2">Min Donation</th>
                                    <th className="border border-gray-300 px-4 py-2">Deadline</th>
                                    <th className="border border-gray-300 px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns.map((campaign) => (
                                    <tr key={campaign._id}>
                                        <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                                        <td className="border border-gray-300 px-4 py-2">{campaign.type}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {campaign.description}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            ${campaign.minDonation}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {new Date(campaign.deadline).toLocaleDateString()}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                                                <Link to={`/myCampaign/${campaign._id}`}>
                                                    <button className="btn join-item bg-slate-500 w-full sm:w-auto">
                                                        Update
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(campaign._id)}
                                                    className="btn join-item bg-slate-300 w-full sm:w-auto"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-xl font-semibold text-red-400">
                        <p>No campaigns found.</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyCampaign;
