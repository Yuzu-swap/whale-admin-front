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
import {AddressToDetailField, HashJump} from 'components/fields';
import { EmptyActionButtons } from 'components/actions';

const AccountLogList = (props: ListProps): ReactElement => {
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
                <TextField label="Category" source="category"/>
                <TextField label="Details" source="metaInfo"/>
                <HashJump label="Hash" source="hash"/>
                <DateField label="Time" source="timestamp" showTime/>
            </Datagrid>
        </List>
    );
};

export default  {
    list: AccountLogList,
};