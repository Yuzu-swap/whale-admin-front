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
    SearchInput,
    TextField
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactElement } from 'react';
import AddressToDetailField from 'components/fields';
import { EmptyActionButtons } from 'components/actions';

const StakeStatusList = (props: ListProps): ReactElement => {
    return (
        <List
            {...props}
            bulkActionButtons={ <EmptyActionButtons />}
            perPage={10}
        >
            <Datagrid>
                <NumberField label="PairId"  source="pid"/>
                <NumberField label="totalValue" source="valueInUSDT" options={{ style: 'currency', currency: 'USD' }} />
                <NumberField source="amount"  />
                <TextField label="UpdateHash" source="hash"  />
                <NumberField label="UpdateBlock" source="blockNumber"  />
                <DateField label="UpdatedAt" source="timestamp" showTime/>
            </Datagrid>
        </List>
    );
};

export default  {
    list: StakeStatusList,
};