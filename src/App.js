import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Layout } from "./components/layout";
import jsonServerProvider from 'ra-data-json-server';
import { Dashboard } from "./components/dashboard";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
console.log(dataProvider);
const App = () => (
      <Admin 
      dataProvider={dataProvider}
      dashboard={Dashboard}
      layout={Layout}>
          <Resource name="users" list={ListGuesser} />
      </Admin>
  );

export default App;