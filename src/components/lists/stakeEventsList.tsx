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

const StakeEventsList = (props: ListProps): ReactElement => {
    return (
        <List
            {...props}
            perPage={10}
        >
            <Datagrid>
                <TextField label="交易哈希" source="hash"/>
                <TextField label="交易类型" source="event"/>
                <DateField label="结算时间" source="timestamp" showTime/>
            </Datagrid>
        </List>
    );
};

export default StakeEventsList;