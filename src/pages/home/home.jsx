import React from 'react';
import { gql, useQuery } from '@apollo/client';
import MainHeader from '../../components/mainHeader';
import Loading from '../../components/loading/index';
import Error from '../../components/error';
import Logo from '../../components/logo';

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
   if (error) return <Error error={error} />;

    return  loading?  <Loading/> : (
        <div>
        <Logo/>
        <div class="flex flex-row">
    <div class="flex align-items-center justify-content-center"><MainHeader name={data.company.name} description={data.company.summary} />  </div>
        </div>
        </div>
    );
};

export default Home;
