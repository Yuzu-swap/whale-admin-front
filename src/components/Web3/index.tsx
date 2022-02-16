import { AbstractConnector } from '@web3-react/abstract-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { darken, lighten } from 'polished'
import React, { useMemo } from 'react'
import { Activity } from 'react-feather'
import { useTranslation } from 'react-i18next'
import { InjectedConnector } from '@web3-react/injected-connector'
import ReactGA from 'react-ga'



export interface WalletInfo {
    connector?: AbstractConnector
    name: string
    iconName: string
    description: string
    href: string | null
    color: string
    primary?: true
    mobile?: true
    mobileOnly?: true
}
  
export const injected = new InjectedConnector({
    supportedChainIds: [
      1, // mainnet
      3, // ropsten
      4, // rinkeby
      5, // goreli
      42, // kovan
      250, // fantom
      4002, // fantom testnet
      137, // matic
      80001, // matic testnet
      100, // xdai
      56, // binance smart chain
      97, // binance smart chain testnet
      1287, // moonbase
      65 ,// okchain-test
      66 ,// okchain
      43114, // avalanche
      43113, // fuji
      128, // heco
      42261,//oasis test
      42262,//oasis main
      256 // heco testnet
    ]
  })

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
    INJECTED: {
      connector: injected,
      name: 'Injected',
      iconName: 'arrow-right.svg',
      description: 'Injected web3 provider.',
      href: null,
      color: '#010101',
      primary: true
    },
    METAMASK: {
      connector: injected,
      name: 'MetaMask',
      iconName: 'metamask.png',
      description: 'Easy-to-use browser extension.',
      href: null,
      color: '#E8831D'
    }
  }






export default function Web3Status() {
  const { active, account, connector, activate, error } = useWeb3React()
  console.log(active, account)
  const tryActivation = async (connector: AbstractConnector | undefined) => {
    console.log("here active")
    if(connector){
      console.log("here active1")
      activate(connector, undefined, true).catch(error => {
        console.log(error)
        if (error instanceof UnsupportedChainIdError) {
            activate(connector) // a little janky...can't use setError because the connector isn't set
        } 
      })
    }        
  }
  const connect = async () => {
    console.log('Connecting to MetaMask...')
    try {
        await activate(injected).then(() => {
        })
    } catch(error) {
        console.log('Error on connecting: ', error)
    }
  }

  return (
    <>
      <div 
        style={{position : 'relative'}}
        onClick={()=>{tryActivation(SUPPORTED_WALLETS.METAMASK.connector)}} 
        > 
        connect to wallet
        </div>
    </>
  )
}
