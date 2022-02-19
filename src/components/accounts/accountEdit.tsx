import * as React from 'react';
import {
    DateInput,
    Edit,
    EditProps,
    NullableBooleanInput,
    TextInput,
    PasswordInput,
    Toolbar,
    useTranslate,
    FormWithRedirect,
    required,
    email,
    FieldProps,
    TextField,
    NumberField,
    SaveButton,
    Button
} from 'react-admin';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import AccountAside from './accountAside';


const AccountEdit = (props: EditProps) => {
    return (
        <Edit
            aside={<AccountAside/>}
            component="div"
            {...props}
        >
            <AccountForm />
        </Edit>
    );
};


const AccountForm = (props: any) => {
    console.log("form record")
    console.log(props.record)

    return (
        <FormWithRedirect
            {...props}
            render={(formProps: any) => (
                <Card>
                    <form>
                        <CardContent>
                            <Box display={{ md: 'block', lg: 'flex' }}>
                                <Box flex={2} mr={{ md: 0, lg: '1em' }}>
                                    <Typography variant="h6" gutterBottom>
                                        AccountInfo
                                    </Typography>
                                    <Box display={{ xs: 'block', sm: 'flex' }}>
                                        <>id:</>
                                        <TextField source="id"  resource="accounts"/>
                                    </Box>
                                    <Box display={{ xs: 'block', sm: 'flex' }}>
                                        <>tvl:</>
                                        <TextField source="totalValue" resource="accounts"/>
                                    </Box>    
                                    <Box display={{ xs: 'block', sm: 'flex' }}>
                                        <Box
                                            flex={1}
                                            mr={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <TextInput
                                                source="desc"
                                                resource="accounts"
                                                validate={requiredValidate}
                                                fullWidth
                                            />
                                        </Box>
                                        <Box
                                            flex={1}
                                            ml={{ xs: 0, sm: '0.5em' }}
                                        >
                                            <NullableBooleanInput
                                                source="kyc"
                                                resource="accounts"
                                                validate={requiredValidate}
                                                fullWidth
                                            />
                                        </Box>
                                    </Box>
                                </Box>  
                            </Box>
                        </CardContent>
                        <Toolbar
                            record={formProps.record}
                            basePath={formProps.basePath}
                            undoable={true}
                            invalid={formProps.invalid}
                            handleSubmit={formProps.handleSubmit}
                            saving={formProps.saving}
                            resource="accounts"
                        >
                            <div >
                                <SaveButton
                                    handleSubmitWithRedirect={
                                        formProps.handleSubmitWithRedirect || formProps.handleSubmit
                                    }

                                    invalid={formProps.invalid}

                                    saving={formProps.saving || formProps.validating}

                                />
                            </div>
                        </Toolbar>
                    </form>
                </Card>
            )}
        />
    );
};

const requiredValidate = [required()];

export default AccountEdit;
