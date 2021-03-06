import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Layout } from "./components/layout";
import jsonServerProvider from 'ra-data-json-server';
import { Dashboard } from "./components/dashboard";
import dataprovider from "components/dataprovider";
import accounts from "components/accounts";
import stakeevents from "components/stakeevents";
import stakestatus from "components/stakestatus";
import interestRecords from "components/interestrecords";
import acccountLogs from "components/accountlogs";
import authProvider from "components/authprovider";
import Login from "components/layout/Login";
import StakePoolsList from "components/accounts/stakePoolsList";

const dataProvider = dataprovider("http://admin-test.yuzu-swap.com");
const App = () => (
      <Admin 
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={Login}
      dashboard={Dashboard}
      layout={Layout}>
          <Resource name="accounts" {...accounts} />
          <Resource name="stakeevents" {...stakeevents} />
          <Resource name="stakestatus" {...stakestatus} />
          <Resource name="interestrecords" {...interestRecords} />
          <Resource name="accountlogs" {...acccountLogs} />
          <Resource name="stakepools" list={StakePoolsList}/>
      </Admin>
  );

export default App;