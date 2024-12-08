import React, { useContext } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const CampaignDetails = () => {
    const campaign = useLoaderData();
    const { _id, image, title, type, name, description, minDonation, email, deadline } = campaign;
    const { user } = useContext(AuthContext);

    // Check if the deadline is over
    const isDeadlineOver = new Date(deadline) < new Date();

    const handleDonate = (e) => {
        e.preventDefault();

        if(isDeadlineOver){
            Swal.fire({
                title: 'Error!',
                text: 'Deadline already passed.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }

        const form = e.target;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const loggedEmail = form.loggedEmail.value;
        const loggedUsername = form.loggedUsername.value;

        const newDonation = { title, type, description, minDonation, deadline, email, name, loggedEmail, loggedUsername };
        // console.log(newDonation);

        fetch('https://fund-together-server.vercel.app/donations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDonation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Thank you for your donation.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                }
            });
    };

    return (
        <div>
            <Navbar />
            <div className="w-5/12 mx-auto my-10">
                <div className="bg-base-200 p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleDonate}>
                        <div className="mb-4">
                            <img className="w-full rounded-lg mb-4" src={image} alt="Campaign" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="title" className="block text-lg font-medium mb-2">
                                Campaign Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-lg font-medium mb-2">
                                Campaign Type
                            </label>
                            <input
                                type="text"
                                name="type"
                                value={type.replace(/-/g, ' ')}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-lg font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={description}
                                readOnly
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="minDonation" className="block text-lg font-medium mb-2">
                                Donation Amount
                            </label>
                            <input
                                type="number"
                                name="minDonation"
                                value={minDonation}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="deadline" className="block text-lg font-medium mb-2">
                                Deadline
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                value={deadline}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                readOnly
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="loggedEmail"
                                value={user?.email}
                                hidden
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="loggedUsername"
                                value={user?.displayName}
                                hidden
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button className='btn bg-blue-400 block w-full'>
                            Donate
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CampaignDetails;
