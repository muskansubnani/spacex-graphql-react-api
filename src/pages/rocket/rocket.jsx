import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Rocket from '../../components/rocket';
import Loading from '../../components/loading';
import { useParams } from 'react-router-dom';
import Error from '../../components/error';


const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($id: ID!) {
        rocket(id: $id) {
            name
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            stages
            cost_per_launch
            engines {
                type
                number
                propellant_1
                propellant_2
                thrust_to_weight
            }
        }
    }
`;

const RocketPage = () => {
    const { id } = useParams();

    const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
        variables: { id },
    });
    console.log(data);
    console.log(loading);
    console.log(error);
    if (error) return <Error error={error} />;

    return  loading?  <Loading/> :  <Rocket rocket={{ ...data.rocket, id: id }} />;
};

export default RocketPage;
