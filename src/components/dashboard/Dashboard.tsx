import { Resource, ListGuesser } from 'react-admin';
import './Dashboard.css'


const Dashboard = ()=>{

    return (
        <>
        <div className="dashboard-top">
            <div className="dashboard-top-item">hello world</div>
            <div className="dashboard-top-item">hello world</div>
            <div className="dashboard-top-item">hello world</div>
        </div>
        <Resource name="users" list={ListGuesser} />
        </>
    )
}

export default Dashboard