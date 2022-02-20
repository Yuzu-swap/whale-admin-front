import { Resource, ListGuesser } from 'react-admin';
import './Dashboard.css'
import accounts from 'components/accounts';
import StakePoolsList from 'components/accounts/stakePoolsList';


const Dashboard = ()=>{

    return (
        <>
        <Resource name="stakepools" list={StakePoolsList}/>
        </>
    )
}

export default Dashboard