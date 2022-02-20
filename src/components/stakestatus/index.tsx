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
    TextField,
    useGetList
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactElement } from 'react';
import {AddressToDetailField, PoolIdToName, HashJump} from 'components/fields';
import { EmptyActionButtons } from 'components/actions';
import { StakePool } from 'types';

const StakeStatusList = (props: ListProps): ReactElement => {
    const {data : statuses} = useGetList<StakePool>(
        'stakepools',
        { page: 1, perPage: 100 },
    );
    console.log("stakepools", statuses)
    return (
        <List
            {...props}
            bulkActionButtons={ <EmptyActionButtons />}
            perPage={10}
        >
            <Datagrid>
                <PoolIdToName label="PairName"  source="pid" extraData={statuses}/>
                <NumberField label="totalValue" source="valueInUSDT" options={{ style: 'currency', currency: 'USD' }} />
                <NumberField source="amount"  />
                <HashJump label="UpdateHash" source="hash"  />
                <NumberField label="UpdateBlock" source="blockNumber"  />
                <DateField label="UpdatedAt" source="timestamp" showTime/>
            </Datagrid>
        </List>
    );
};

export default  {
    list: StakeStatusList,
};