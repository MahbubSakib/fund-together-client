import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { useLoaderData } from 'react-router-dom';
import CampaignTable from './CampaignTable';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <CampaignTable campaigns={campaigns}></CampaignTable>
            <Footer></Footer>
        </div>
    );
};

export default AllCampaign;