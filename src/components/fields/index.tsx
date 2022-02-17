import * as React from "react";
import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';
import { stringify } from 'query-string';

const AddressToDetailField = (props : any) => {
    const { source } = props;
    const record = useRecordContext(props);
    const path = stringify({
        filter: JSON.stringify({ address: record[source] }),
    })
    console.log(path)
    return <a href={"#/stakeevents?" + path}>{record[source]}</a>;
}

AddressToDetailField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default AddressToDetailField;