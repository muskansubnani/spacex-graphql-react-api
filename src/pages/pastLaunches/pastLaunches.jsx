import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchesFeed from '../../components/launchesFeed';
import Loading from '../../components/loading';
import Error from '../../components/error';

const GET_LAUNCHES_QUERY = gql`
    {
        launchesPast(limit: 15) {
            mission_name
            launch_site {
                site_name_long
            }
            links {
                article_link
                flickr_images
            }
            id
        }
    }
`;

const PastLaunches = () => {
    const { data, loading, error } = useQuery(GET_LAUNCHES_QUERY);
    console.log(data);
    console.log(loading);
    console.log(error);
    if (error) return <Error error={error} />;

    const launches = !loading? data.launchesPast.filter(
        launch => launch.links.article_link && launch.links.flickr_images.length > 0
    ):[];

    return loading? <Loading/> : (
        <Fragment>
        <div className="card">
            <h1>Past Launches</h1>
            <LaunchesFeed launches={launches} />
            </div>
        </Fragment>

    );
};

export default PastLaunches;
