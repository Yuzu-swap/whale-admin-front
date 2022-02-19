import * as React from 'react';
import { useShowContext,ShowProps ,ShowBase} from "react-admin";
import { Box, Card, CardContent, Typography ,Button,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';



export const AccountShow = (props:ShowProps) =>{
   return (
    <ShowBase {...props}>
            <AccountShowContent />
    </ShowBase>
   )
  
}

const useStyles = makeStyles({
    icon: { paddingRight: '0.5em' },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
    },
});


const AccountShowContent = ()=>{
    const { record, loaded } :any = useShowContext();
    const classes = useStyles();
    console.log("Record is ",record)
    if (!loaded || !record) return null
    return(
        <Box mt={2} display="flex">
        <Box flex="1">
            <Card>
        <div> address :{record.address} Details </div>
        <div> desc :{record.desc}  </div>
        <div> kyc :{record.kyc}  </div>
        <div> whale :{record.whale}  </div>

        <Button
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname: '/stakestatus',
                search: stringify({
                    filter: JSON.stringify({ address: record.address }),
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
            component={Link}
            to={{
                pathname: '/stakeevents',
                search: stringify({
                    filter: JSON.stringify({ address: record.address }),
                    sort: 'timestamp',
                    order: 'DESC'
                }),
            }}
            className={classes.link}
        >
            Stake events
        </Button>


        
        </Card>
        </Box>
        </Box>
    )
}