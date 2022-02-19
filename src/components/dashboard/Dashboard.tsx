import { Resource, ListGuesser } from 'react-admin';
import './Dashboard.css'
import AccoutList from 'components/lists/accountsList';
import StakeEventsList from 'components/lists/stakeEventsList';
import StakePoolsList from 'components/lists/stakePoolsList';


const Dashboard = ()=>{

    return (
        <>
        <div className="dashboard-top">
            <div className="dashboard-top-item">hello world</div>
            <div className="dashboard-top-item">hello world</div>
            <div className="dashboard-top-item">hello world</div>
        </div>
        <Resource name="accounts?by=whale" list={AccoutList} />
        <Resource name="stakepools" list={StakePoolsList} />
        </>
    )
}

export default Dashboard