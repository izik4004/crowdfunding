import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import { contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log ({
        provider,
        signer,
        transactionContract
    });
}


export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState("")
    const [formData, setFormData] = useState({
        minimumAmount:"", fundGoals:""
    })


    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const checkIfWalletIsConnected = async () => {

        try {
            if(!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({method: 'eth_requestAccounts'});

        if(accounts.length) {
            setCurrentAccount(accounts[0])

           
        } else {
            console.log ("No account found")
        }
       
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object")

        }
        
    }


const createCampaign = async () => {
    try {
        if(!ethereum) return alert("Please install metamask")
        const { minimumAmount, fundGoal} = formData;
        getEthereumContract();
    } catch (error) {
        console.log(error)
    }
    throw new Error("No ethereum object")

}



    const connectWallet = async () => {
        try {
            if(!ethereum) return alert ("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
       
            
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object")

        }
    }


    useEffect(() => {
        checkIfWalletIsConnected();
        // connectWallet();
    }, [])
    return (
        <TransactionContext.Provider value={{connectWallet, createCampaign,  currentAccount, handleChange, formData, setFormData}}>
            {children}
        </TransactionContext.Provider>
    );
}