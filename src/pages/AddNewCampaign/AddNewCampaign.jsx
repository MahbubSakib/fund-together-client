import Swal from "sweetalert2";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddNewCampaign = () => {
    const {user} = useContext(AuthContext);
    // console.log(user?.displayName);
    // console.log(user?.photoURL);

    const handleAddCampaign = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;

        const newCampaign = { image, title, type, description, minDonation, deadline, email, name };
        // console.log(newCampaign);
        
        fetch('https://fund-together-server.vercel.app/campaigns', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New campaign added successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                    form.reset();
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto my-10">
                <div className="w-8/12 mx-auto bg-slate-100 rounded-xl p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold text-center mb-6">Add a Campaign</h2>

                    <form onSubmit={handleAddCampaign}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* image */}
                            <div className="flex flex-col">
                                <label htmlFor="image" className="text-lg font-medium text-gray-700">Image/Thumbnail (Image URL):</label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Enter image URL"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Campaign Title */}
                            <div className="flex flex-col">
                                <label htmlFor="title" className="text-lg font-medium text-gray-700">Campaign Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter campaign title"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Campaign Type */}
                            <div className="flex flex-col">
                                <label htmlFor="type" className="text-lg font-medium text-gray-700">Campaign Type:</label>
                                <select
                                    name="type"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="Personal Issue">Personal Issue</option>
                                    <option value="Startup">Startup</option>
                                    <option value="Business">Business</option>
                                    <option value="Creative Ideas">Creative Ideas</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col">
                                <label htmlFor="description" className="text-lg font-medium text-gray-700">Description:</label>
                                <textarea
                                    name="description"
                                    placeholder="Enter a brief description"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    rows="4"
                                ></textarea>
                            </div>

                            {/* Minimum Donation Amount */}
                            <div className="flex flex-col">
                                <label htmlFor="minDonation" className="text-lg font-medium text-gray-700">Minimum Donation Amount:</label>
                                <input
                                    type="number"
                                    name="minDonation"
                                    placeholder="Enter minimum donation amount"
                                    className="w-full p-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Deadline */}
                            <div className="flex flex-col">
                                <label htmlFor="deadline" className="text-lg font-medium text-gray-700">Deadline:</label>
                                <input
                                    type="date"
                                    name="deadline"
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
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddNewCampaign;