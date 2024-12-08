import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CampaignTable = ({ campaigns }) => {
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);
    const [sortOrder, setSortOrder] = useState("asc"); // Initial sort order

    const handleSort = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";

        // Sort campaigns based on donation amount
        const sorted = [...sortedCampaigns].sort((a, b) => {
            return newSortOrder === "asc"
                ? a.minDonation - b.minDonation
                : b.minDonation - a.minDonation;
        });

        setSortedCampaigns(sorted);
        setSortOrder(newSortOrder);
    };

    return (
        <div className="w-11/12 mx-auto my-5">
            <button className="btn" onClick={handleSort}>
                Sort by {sortOrder === "asc" ? "Descending" : "Ascending"} Order
            </button>
            <div className="overflow-x-auto mt-4">
                <table className="table table-zebra">
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Campaign Type</th>
                            <th>Donation Amount</th>
                            <th>Deadline</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCampaigns.map((campaign, index) => (
                            <tr key={campaign._id}>
                                <th>{index + 1}</th>
                                <td>{campaign.title}</td>
                                <td>{campaign.type}</td>
                                <td>${campaign.minDonation}</td>
                                <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                                <td>{campaign.name}</td>
                                <td>
                                    <Link to={`/details/${campaign._id}`}>
                                        <button className="text-blue-700 hover:text-blue-400">
                                            See More...
                                        </button>
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
