import * as React from 'react';
import { Fragment } from 'react';
import AccountIcon from '@material-ui/icons/People';

import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    List,
    ListProps,
    NullableBooleanInput,
    SearchInput,
    NumberField,
    TextField
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactElement } from 'react';
import AddressToDetailField from 'components/fields';
import { AccountShow } from './addressShow';


const accountFilters = [
    <SearchInput source="q" alwaysOn />,
];

const EmptyActionButtons = (props:any) => (
    <Fragment>
    </Fragment>
);
const AccoutList = (props: ListProps): ReactElement => {
    return (
        <List
            {...props}
            filters= {accountFilters}
            sort={{ field: 'totalValue', order: 'DESC' }}
            perPage={20}
            bulkActionButtons={ <EmptyActionButtons />}
        >
            <Datagrid>
                <AddressToDetailField source="address"/>
                <NumberField source="totalValue" options={{ style: 'currency', currency: 'USD' }} />
                <TextField source="desc"  />
            </Datagrid>
        </List>
    );
};

export default  {
    list: AccoutList,
    icon: AccountIcon,
    show: AccountShow

};;