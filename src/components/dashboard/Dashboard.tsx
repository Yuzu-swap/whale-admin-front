import { Resource, ListGuesser } from 'react-admin';
import './Dashboard.css'
import accounts from 'components/accounts';
import StakePoolsList from 'components/accounts/stakePoolsList';


const Dashboard = ()=>{

    return (
        <>
        <div className="dashboard-top">
            <div className="dashboard-top-item">hello world</div>
            <div className="dashboard-top-item">hello world</div>
            <div className="dashboard-top-item">hello world</div>
        </div>
        <Resource name="stakepools" list={StakePoolsList}/>
        </>
    )
}

export default Dashboard