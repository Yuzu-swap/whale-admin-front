import * as React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    List,
    ListProps,
    NullableBooleanInput,
    NumberField,
    SearchInput,
    TextField
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactElement } from 'react';
import AddressToDetailField from 'components/fields';

const AccoutList = (props: ListProps): ReactElement => {
    return (
        <List
            {...props}
            perPage={10}
        >
            <Datagrid>
                <AddressToDetailField label="钱包地址" source="id"/>
                <NumberField source="totalValue" options={{ style: 'currency', currency: 'USD' }} />
            </Datagrid>
        </List>
    );
};

export default AccoutList;