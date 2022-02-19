import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Layout } from "./components/layout";
import jsonServerProvider from 'ra-data-json-server';
import { Dashboard } from "./components/dashboard";
import dataprovider from "components/dataprovider";
import accounts from "components/accounts";

const dataProvider = dataprovider("http://admin-test.yuzu-swap.com");
console.log(dataProvider);
const App = () => (
      <Admin 
      dataProvider={dataProvider}
      dashboard={Dashboard}
      layout={Layout}>
          <Resource name="accounts" {...accounts} />
      </Admin>
  );

export default App;