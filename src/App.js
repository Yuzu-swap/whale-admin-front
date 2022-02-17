import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Layout } from "./components/layout";
import jsonServerProvider from 'ra-data-json-server';
import { Dashboard } from "./components/dashboard";
import dataprovider from "components/dataprovider";
import AccoutList from "components/lists/accountsList";
import StakeEventsList from "components/lists/stakeEventsList";

const dataProvider = dataprovider("http://admin-test.yuzu-swap.com");
console.log(dataProvider);
const App = () => (
      <Admin 
      dataProvider={dataProvider}
      dashboard={Dashboard}
      layout={Layout}>
          <Resource name="accounts?by=whale" list={AccoutList} />
          <Resource name="stakeevents" list={StakeEventsList} />
      </Admin>
  );

export default App;