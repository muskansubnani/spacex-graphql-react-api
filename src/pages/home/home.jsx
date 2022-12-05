import React from 'react';
import { gql, useQuery } from '@apollo/client';
import MainHeader from '../../components/mainHeader';
import Loading from '../../components/loading/index';

const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(GET_COMPANY_INFO);
    console.log(data);
    console.log(loading);
    console.log(error);
   // if (loading) return <Loader />;
   // if (error) return <Error error={error} />;

    return  loading?  <Loading/> : (
        <div >
            <MainHeader name={data.company.name} description={data.company.summary} />
        </div>
    );
};

export default Home;
