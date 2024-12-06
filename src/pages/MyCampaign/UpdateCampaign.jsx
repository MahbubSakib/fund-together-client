import { useLoaderData } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const UpdateCampaign = () => {
    const { user } = useContext(AuthContext);
    const campaign = useLoaderData();
    // const { image, title, type, description, minDonation, deadline } = campaign;
    console.log(campaign);
    const [formData, setFormData] = useState({
        image: campaign.image || "",
        title: campaign.title || "",
        type: campaign.type || "",
        description: campaign.description || "",
        minDonation: campaign.minDonation || "",
        deadline: campaign.deadline || "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Dynamically update the field based on `name`
        }));
    };

    // const handleUpdateCampaign = (e) => {
    //     e.preventDefault();

    //     fetch(`http://localhost:5000/myCampaigns/${campaign._id}`, {
    //         method: "PUT", // Use PUT for updating
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 alert("Campaign updated successfully!");
    //             }
    //         })
    //         .catch((err) => console.error("Error updating campaign:", err));
    // };
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto my-10">
                <div className="w-8/12 mx-auto bg-slate-100 rounded-xl p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold text-center mb-6">Update Campaign</h2>

                    <form onSubmit={handleUpdateCampaign}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* image */}
                            <div className="flex flex-col">
                                <label htmlFor="image" className="text-lg font-medium text-gray-700">Image URL:</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    placeholder="Enter image URL"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="title" className="text-lg font-medium text-gray-700">Campaign Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Enter campaign title"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="type" className="text-lg font-medium text-gray-700">Campaign Type:</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="Personal Issue">Personal Issue</option>
                                    <option value="Startup">Startup</option>
                                    <option value="Business">Business</option>
                                    <option value="Creative Ideas">Creative Ideas</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="description" className="text-lg font-medium text-gray-700">Description:</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter campaign description"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="minDonation" className="text-lg font-medium text-gray-700">Minimum Donation:</label>
                                <input
                                    type="number"
                                    name="minDonation"
                                    value={formData.minDonation}
                                    onChange={handleInputChange}
                                    placeholder="Enter minimum donation amount"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="deadline" className="text-lg font-medium text-gray-700">Deadline:</label>
                                <input
                                    type="date"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* User Email */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-lg font-medium text-gray-700">User Email (Read Only):</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user?.email}
                                    readOnly
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-gray-100 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* User Name */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-lg font-medium text-gray-700">User Name (Read Only):</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={user?.displayName}
                                    readOnly
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-gray-100 focus:outline-none"
                                />
                            </div>
                        </div>


                        <div className="mt-6 flex justify-center">
                            <button type="submit"
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateCampaign;