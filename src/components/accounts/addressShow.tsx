import * as React from 'react';
import { useShowContext,ShowProps ,ShowBase} from "react-admin";
import { Box, Card, CardContent, Typography } from '@material-ui/core';


export const AccountShow = (props:ShowProps) =>{
   return (
    <ShowBase {...props}>
            <AccountShowContent />
    </ShowBase>
   )
  
}

const AccountShowContent = ()=>{
    const { record, loaded } :any = useShowContext();
    console.log("Record is ",record)
    if (!loaded || !record) return ( <div>empty</div>);
    return(
        <Box mt={2} display="flex">
        <Box flex="1">
            <Card>
        <div> address :{record.address} </div>
        </Card>
        </Box>
        </Box>
    )
}