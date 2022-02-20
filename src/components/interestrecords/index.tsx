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
    TextField,
    useListController
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactElement } from 'react';
import { EmptyActionButtons } from 'components/actions';
import {AddressToDetailField} from 'components/fields';




const InterestRecordList = (props: ListProps): ReactElement => {
    const controllerProps = useListController(props);
    return (
        <List
            {...props}
            sort={{ field: 'timestamp', order: 'DESC' }}
            perPage={20}
            bulkActionButtons={ <EmptyActionButtons />}
        >
            <Datagrid>
                { controllerProps.filterValues.address?  '':<AddressToDetailField source="address"/> }
                <NumberField source="interest" />
                <NumberField source="startTokenPrice" />
                <NumberField source="endTokenPrice" />
                <NumberField source="startEffect" options={{ style: 'currency', currency: 'USD' }} />
                <NumberField source="endEffect"  options={{ style: 'currency', currency: 'USD' }} />
                <DateField label="startTs" source="startTs" showTime/>
                <DateField label="endTs" source="endTs" showTime/>
                <NumberField label="apyBase10000" source="apy" />
            </Datagrid>
        </List>
    );
};

export default  {
    list: InterestRecordList,
};;