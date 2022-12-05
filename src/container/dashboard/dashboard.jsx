import { gql, useQuery } from '@apollo/client';
import SideMenu from '../../components/sideMenu/index';
import Loading from '../../components/loading/index';
import Error from '../../components/error';

const GET_ROCKETS_NAMES = gql`
    {
        rockets(offset: 1) {
            id
            name
        }
    }
`;


const Dashboard = ({children}) =>
{
    const { data, loading, error } = useQuery(GET_ROCKETS_NAMES);
    console.log(data);
    console.log(loading);
    console.log(error);
    if (error) return <Error error={error} />;
    return loading? <Loading/> : (  
        <div className="card">
    <div>   
                <SideMenu
                    rockets={data.rockets}
                />
                <div>
                
                    <main>{children}</main>
                </div>
                </div> 
                    
                </div>
             
      
    );

}

export default Dashboard;