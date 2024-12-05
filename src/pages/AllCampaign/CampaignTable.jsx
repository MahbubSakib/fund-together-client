import React from 'react';
import { Link } from 'react-router-dom';

const CampaignTable = ({ campaigns }) => {
    // const { _id, image, title, type, name, description, minDonation, email, deadline } = campaign
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Campaign Type</th>
                            <th>Donation Amount</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {campaigns.map((campaign, index) => (
                            <tr key={campaign._id}>
                                <th>{index + 1}</th>
                                <td>{campaign.title}</td>
                                <td>{campaign.type}</td>
                                <td>{campaign.minDonation}</td>
                                <td>{campaign.deadline}</td>
                                <td>
                                    <Link to={`/details/${campaign._id}`}>
                                        <button>See More</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CampaignTable;