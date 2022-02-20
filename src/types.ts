import { ReduxState, Record, Identifier } from 'react-admin';

export interface StakePool extends Record{
    pid : number,
    name : string
}