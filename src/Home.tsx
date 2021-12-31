import { useEffect, useState, useRef, useReducer, memo } from "react";
import styled from "styled-components";

import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";


import { idlAddress } from "@project-serum/anchor/dist/idl";
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';


import { NodeWallet } from "@project-serum/anchor/dist/provider";
import { setInterval, clearInterval } from "timers";
import Countdown from "react-countdown";

import {Link} from "react-router-dom";
import { isCommaListExpression } from "typescript";


const StyledTimer = styled(Countdown)`
  font-size:55px;
  left: 42%;
  top: 40%;
  position: absolute;

`

const ConnectButton = styled(WalletDialogButton)`

--tw-bg-opacity: 1;
  background-color: rgba(236,72,153,var(--tw-bg-opacity));

`;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)`
--tw-bg-opacity: 1;
  background-color: rgba(236,72,153,var(--tw-bg-opacity));
  color:white;
  text-align: center;
  

`; // add your styles here

export interface Homeprops {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: Homeprops) => {

  const [load, setLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");
  const [days, setDays] = useState("00");

  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [isAvailable, setIsAvailable] = useState(false);

  const timerInfo = require("./mintState.json");

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));


  const getWallet = localStorage.getItem("WALLET");

  const wallet = useAnchorWallet();

  const [walletStorage, setWalletStorage] = useState(getWallet==="true"? getWallet : null);

  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const [path, Setpath] = useState(true);
  const [loaded, isLoaded] = useState(false);



  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };



  useEffect(()=> {
    if (wallet) {
      localStorage.setItem("WALLET", "true");
    }
  }, [wallet])
  

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  
  useEffect(()=> {
    setTimeout(()=> {
      setLoad(true);
    }, 1000)
  }, []);

  useEffect(()=> {
    const timer = setInterval(()=> {
      const target = new Date("December 5, 2021 19:48").getTime();
      const now = new Date().getTime();
      if (target-now<0) {
       
        setIsAvailable(true);
      
      }
    }, 1000);
    return ()=> {
      clearInterval(timer);
    }
  }, [isAvailable]);


  const MintInfo = () => {
    return (
      <div className={wallet && "ButtonContent"}>
          {wallet && (
            <h3>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</h3>
            )}
          {wallet && <h3>Balance: {(balance || 0).toLocaleString()} SOL</h3>}

          {wallet && <h3>Total Available: {itemsAvailable}</h3>}

          {wallet && <h3>Redeemed: {itemsRedeemed}</h3>}

          {wallet && <h3>Remaining: {itemsRemaining}</h3>}
        </div>
    ) 
  }

  const SlideComponent = ()=> {
      return (
      <>
        <div style={{paddingTop:"40px"}}>
        <SlideDown className={'connect-wallet-con '} >
              <div>
                <img src="https://cdn.discordapp.com/attachments/771364968292548618/920747498279161936/56.png" 
                alt="MonekyA" className="imageSize2"></img>
                <img src="https://cdn.discordapp.com/attachments/771364968292548618/920750063305785384/unknown.png" 
                alt="MonekyB" className="imageSize2"></img>
                <h1 style={{fontSize:"25px"}}>
                  Will you be the one to bring back peace to the World of Magic?
                </h1>
                <p className="textWrapper">Wizards Of Sol is a collection of 999 randmly generated characters that live on the solana blockchain.
Collect all three races to bring peace back to the World.</p>
                <ConnectButton>Connect Wallet</ConnectButton>
              </div>
            </SlideDown>
        </div>
    
      </>
    ) 
    

  };


     //<ConnectButton>Connect Wallet</ConnectButton>
  
  return (
    <main>
      
      {load && wallet &&

      <div>
       
        <StyledTimer date={new Date("December 5, 2021 19:48")}>
          <>
          {isAvailable && <MintInfo/>}
          </>
        </StyledTimer>
      </div>

      }
       
      <MintContainer style={{textAlign:"center"}}>
        {!wallet ? (
          
          <>
         
          {load && <SlideComponent></SlideComponent>} 
         
          </>

        ) : (
          <>
          {load && wallet && isAvailable && <>
           
            <MintButton
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
            variant="contained"
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "MINT"
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </MintButton>
              </>
         }
          
          </>

        )}
      </MintContainer>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
