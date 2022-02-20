import EventIcon from '@material-ui/icons/Event';
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
    useListController,
    SearchInput,
    TextField
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactElement } from 'react';
import {AddressToDetailField} from 'components/fields';
import { EmptyActionButtons } from 'components/actions';

const StakeEventsList = (props: ListProps): ReactElement => {
    const controllerProps = useListController(props);
    console.log("controllerProps is ",controllerProps)
    return (
        <List
            {...props}
            bulkActionButtons={ <EmptyActionButtons />}
            sort={{ field: '_id', order: 'DESC' }}
            perPage={20}
        >
            <Datagrid>
                 { controllerProps.filterValues.address?  '':<AddressToDetailField source="address"/> }
                <DateField label="createdAt" source="timestamp" showTime/>
                <TextField label="EvetType" source="event"/>
                <NumberField label="totalValue" source="valueInUSDT" options={{ style: 'currency', currency: 'USD' }} />
                <TextField label="hash" source="hash"/>
            </Datagrid>
        </List>
    );
};

export default  {
    list: StakeEventsList,
    icon: EventIcon
};