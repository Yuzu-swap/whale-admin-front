import * as React from 'react';
import PropTypes from 'prop-types';
import {
    NumberField,
    TextField,
    DateField,
    useTranslate,
    useGetList,
    Record,
    RecordMap,
    Identifier,
    ReferenceField,
    useLocale,
} from 'react-admin';
import {
    Typography,
    Card,
    CardContent,
    Box,
    Link,
    Stepper,
    Step,
    StepLabel,
    Button,
    StepContent,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles } from '@material-ui/core/styles';
import { stringify } from 'query-string';


const useAsideStyles = makeStyles(theme => ({
    root: {
        width: 400,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
    },
}));

interface AsideProps {
    record?: Record;
    basePath?: string;
}

const AccountAside = ({ record, basePath }: AsideProps) => {
    const classes = useAsideStyles();
    return (
        <div className={classes.root}>
            <Box m="0 0 1em 1em">
                <Card>
                    <CardContent>
                    <Button
                        size="small"
                        color="primary"
                        component={RouterLink}
                        to={{
                            pathname: '/stakestatus',
                            search: stringify({
                                filter: JSON.stringify({ address: record?.address }),
                                sort: 'timestamp',
                                order: 'DESC'
                            }),
                        }}
                        className={classes.link}
                    >
                        Stake Status
                    </Button>


                    <Button
                        size="small"
                        color="primary"
                        component={RouterLink}
                        to={{
                            pathname: '/stakeevents',
                            search: stringify({
                                filter: JSON.stringify({ address: record?.address }),
                                sort: 'timestamp',
                                order: 'DESC'
                            }),
                        }}
                        className={classes.link}
                    >
                        Stake events
                    </Button>

                    <Button
                        size="small"
                        color="primary"
                        component={RouterLink}
                        to={{
                            pathname: '/interestrecords',
                            search: stringify({
                                filter: JSON.stringify({ address: record?.address }),
                                sort: 'timestamp',
                                order: 'DESC'
                            }),
                        }}
                        className={classes.link}
                    >
                        Interest records
                    </Button>

                    <Button
                        size="small"
                        color="primary"
                        component={RouterLink}
                        to={{
                            pathname: '/accountlogs',
                            search: stringify({
                                filter: JSON.stringify({ address: record?.address }),
                                sort: '_id',
                                order: 'DESC'
                            }),
                        }}
                        className={classes.link}
                    >
                        Account Logs
                    </Button>

                    </CardContent>
                </Card>
            </Box>
            {/*record && <EventList record={record} basePath={basePath} />*/}
        </div>
    );
};

AccountAside.propTypes = {
    record: PropTypes.any,
    basePath: PropTypes.string,
};

export default AccountAside;
