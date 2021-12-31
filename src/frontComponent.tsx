import { NonceAccount } from "@solana/web3.js";
import { useEffect, useState, useRef, useMemo } from "react";
import {Link, useRoutes} from "react-router-dom";
import {data} from "./data"
import { keyframes } from "styled-components";
import { setInterval, clearInterval } from "timers";
import { idlAddress } from "@project-serum/anchor/dist/idl";
import { reverse } from "dns";
import { clear } from "console";


const FrontComponent = () => {


    const [count, setCount] = useState(0);
    const [scrolled, setScrolled] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const [animate, setAnimate] = useState(false);
    const [animate2, setAnimate2] = useState(false);
    const [animate3, setAnimate3] = useState(false);
    const [animate4, setAnimate4] = useState(false);
    const [animate5, setAnimate5] = useState(false);
    const [animate6, setAnimate6] = useState(false);
    const [animate7, setAnimate7] = useState(false);
    const [animate8, setAnimate8] = useState(false);
    const [animate9, setAnimate9] = useState(false);
    const [animate10, setAnimate10] = useState(false);
    const [animate11, setAnimate11] = useState(false);
    const [animate12, setAnimate12] = useState(false);



    const [modClass, setModClass] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateFAQMobile");
    const [modClass2, setModClass2] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateFAQMobile");
    const [modClass3, setModClass3] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateFAQMobile");
    const [modClass4, setModClass4] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateFAQMobile");
    const [modClass5, setModClass5] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateFAQMobile");
    const [modClass6, setModClass6] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateAttributesMobile");
    const [modClass7, setModClass7] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateAttributesMobile");
    const [modClass8, setModClass8] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateAttributesMobile");
    const [modClass9, setModClass9] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateAttributesMobile");
    const [modClass10, setModClass10] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateAttributesMobile");
    const [modClass11, setModClass11] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateAttributesMobile");
    const [modClass12, setModClass12] = useState(
      window.innerWidth > 700 ? "notScrolled" : "animateAttributesMobile");



   
    const urlList = ["https://cdn.discordapp.com/attachments/771364968292548618/917109859655221358/14.gif", "https://cdn.discordapp.com/attachments/771364968292548618/917110138920382504/2.gif",
      "https://cdn.discordapp.com/attachments/771364968292548618/917110152916770836/3.gif"];

  

    console.log(modClass6);
    const prevCountRef = useRef<number | null>(null);

    const offsetY = document.getElementById("1")?.offsetTop; 
    

    const callScroll = () => {
   
      setScrolled(window.scrollY);
     
      if (width > 700) {
        if (offsetY) {
        if (offsetY-scrolled <= 759) {
          setAnimate(true);
        }
        if (offsetY+160-scrolled <= 759) {
          setAnimate2(true);
        }
        if (offsetY+(160*2)-scrolled <= 759) {
          setAnimate3(true);
        }
        if (offsetY+(160*3)-scrolled <= 759) {
          setAnimate4(true);
        }
        if (offsetY+(160*4)-scrolled <= 759) {
          setAnimate5(true);
        }
        if (offsetY+(160*4)-scrolled+400 <= 759) {
          setAnimate6(true);
        }
        if (offsetY+(160*4)-scrolled+550 <= 759) {
          setAnimate7(true);
        }
        if (offsetY+(160*4)-scrolled+700 <= 759) {
          setAnimate8(true);
        }
        if (offsetY+(160*4)-scrolled+850 <= 759) {
          setAnimate9(true);
        }
        if (offsetY+(160*4)-scrolled+1300 <= 759) {
          setAnimate10(true);
        }
        if (offsetY+(160*4)-scrolled+1450 <= 759) {
          setAnimate11(true);
        }
        if (offsetY+(160*4)-scrolled+1600 <= 759) {
          setAnimate12(true);
        }
      }
      }
      
    }
  
    useEffect(()=> {
      
     
      if (animate) {
        setModClass("animateFAQ");
        if (animate2) {
          setTimeout(()=> {
            setModClass2("animateFAQright");
          }, 200);
          if (animate3) {
          setTimeout(()=> {
            setModClass3("animateFAQ");
          }, 200);
           if (animate4) {
          setTimeout(()=> {
            setModClass4("animateFAQright");
          }, 200);
          if (animate5) {
          setTimeout(()=> {
            setModClass5("animateFAQ");
          }, 200);
         
          }
        }
      }
    }
  }
      if (animate6) {
        setModClass6("animateAttributes");
        if (animate7) {
          setTimeout(()=> {
            setModClass7("animateAttributesRight")
          }, 200);
          if (animate8) {
          setTimeout(()=> {
            setModClass8("animateAttributes")
          }, 200);
          if (animate9) {
          setTimeout(()=> {
            setModClass9("animateAttributesRight")
          }, 200);
          if (animate10) {
          setTimeout(()=> {
            setModClass10("animateAttributes")
          }, 200);
          if (animate11) {
          setTimeout(()=> {
            setModClass11("animateAttributesRight")
          }, 200);
          if (animate12) {
          setTimeout(()=> {
            setModClass12("animateAttributes")
          }, 200);
        }
        }
        }
        }
        }
        }
      }


      if (!animate || !animate2 || !animate3 || !animate4 || !animate5 || !animate6 || !animate7 || !animate8 
        || !animate9 || !animate10 || !animate11 || !animate12) {
          if (width > 700) {
            document.addEventListener("scroll", callScroll)
            return ()=> document.removeEventListener("scroll", callScroll);
          }
        
      }
    

    });

   

    

    //C:\Users\artur\Desktop\candy-machine-mint\public\discord.ico
    return (
    <>
    <div className="full-front-page">
     <div  className="front-page-container">
        

        <div className="UI-container">
        <div style = {{width:"100%"}}>
        <div>
        <img src="https://cdn.discordapp.com/attachments/771364968292548618/919228073340186684/Webp.net-gifmaker_2.gif" alt = "working" className = "frontGif"></img>
        <img src="https://cdn.discordapp.com/attachments/771364968292548618/920003203297329213/Webp.net-gifmaker_3.gif" className="gifChange" alt="not working"></img>
        </div>


        <div className="UI-front-text">
        <h1>
          Will you be able to bring back peace between clans?
        </h1>
        <p style={{padding:"10px"}}>An exclusive collection of 999 WOL NFTs on the Solana Blockchain</p>

        <Link to="connect-wallet">
            <button className="walletNav">
              MINT YOUR NFT
            </button>
        </Link>

        </div>
        </div>

        </div>

      



      </div>

      <div style={{paddingTop:"70px", height:"2900px", width:"100%"}}>
      <h1 className="FAQ-headline">Frequently Asked Questions</h1>
      <details>
        <summary id="1" className={modClass}><h1>Mint date ?</h1></summary>
        <div className="summary-faq">
          <h3>The first week of January</h3>
        </div>
      </details>
      <div style={{paddingTop:"25px"}}>
       <details>
        <summary  className={modClass2}><h1>Mint price ?</h1></summary>
        <div className="summary-faq">
          <h3>Mint price will be 0.1 SOL</h3>
        </div>
      </details>
      </div>
       <div style={{paddingTop:"25px"}}>
       <details>
        <summary  className={modClass3}><h1>SUPPLY ?</h1></summary>
        <div className="summary-faq">
          <h3>There will be a total of 999 nfts</h3>
        </div>
      </details>
      </div>
       <div style={{paddingTop:"25px"}}>
       <details>
        <summary  className={modClass4}><h1>BLOCKCHAIN ?</h1></summary>
        <div className="summary-faq">
          <h3>Solana blockchain</h3>
        </div>
      </details>
      </div>
      <div style={{paddingTop:"25px"}}>
       <details>
        <summary  className={modClass5}><h1>WHITELIST ?</h1></summary>
        <div className="summary-faq">
          <h3>As of now, the first 50 members will get WListed but we might open up some more spaces for future members
</h3>
        </div>
      </details>
      </div>

      <div style={{width:"100%",paddingTop:"150px"}}>
       
        <h1 className="ATTR-headline">NFT ATTRIBUTES</h1>
        <p className="ATTR-p">preview</p>


        <div className={modClass6}>
          <h1>BACKGROUND- 
Total of 11 backgrounds:</h1>

       
        <img className="attrImg" src="https://cdn.discordapp.com/attachments/771364968292548618/920774287567237120/Webp.net-gifmaker_11.gif" alt="attr"></img>
        <h1 className="attrText">
          <ul>
            <li style={{paddingTop:"15px"}}>
              Sahara
            </li>
            <li style={{paddingTop:"15px"}}>
              Red Water
            </li>
            <li style={{paddingTop:"15px"}}>
              Light Purple
            </li>
          </ul>
        </h1>
        

        </div>

        <div className={modClass7}>
          <h1 className="attrHeight">SKIN COLOR-
Total of 15 skin colors:
        </h1>
        <img className="attrImg" src="https://cdn.discordapp.com/attachments/771364968292548618/920773270410756116/Webp.net-gifmaker_9.gif" alt="attr"></img>
        <h1 className="attrText">
          <ul>
            <li style={{paddingTop:"15px"}}>
               Blood Elve
            </li>
            <li style={{paddingTop:"15px"}}>
              Zombie Orc
            </li>
            <li style={{paddingTop:"15px"}}>
              White Human
            </li>
          </ul>
        </h1>
        </div>

        <div className={modClass8}>
          <h1>CLOTHES-
Total of 30 clothing styles:</h1>
        <img className="attrImg" src="https://cdn.discordapp.com/attachments/771364968292548618/920772458628399104/Webp.net-gifmaker_5.gif" alt="attr"></img>
        <h1 className="attrText">
          <ul>
            <li style={{paddingTop:"15px"}}>
              Slave
            </li>
            <li style={{paddingTop:"15px"}}>
              Blood Clan
            </li>
            <li style={{paddingTop:"15px"}}>
              Green Wizard
            </li>
          </ul>
        </h1>
        </div>

          <div className={modClass9}>
          <h1 className="attrHeight">WEAPONS-
Over 40+ different weapon styles:</h1>
        <img className="attrImg" src="https://cdn.discordapp.com/attachments/771364968292548618/920773620656128020/Webp.net-gifmaker_10.gif" alt="attr"></img>
        <h1 className="attrText">
          <ul>
            <li style={{paddingTop:"15px"}}>
              Orc Bow
            </li>
            <li style={{paddingTop:"15px"}}>
              Dark Flame
            </li>
            <li style={{paddingTop:"15px"}}>
             Orc Sword
            </li>
          </ul>
        </h1>
        </div>

        <div className={modClass10}>
          <h1>EYES-
Over 20+ unique eye styles:</h1>
        <img className="attrImg" src="https://cdn.discordapp.com/attachments/771364968292548618/920773270977007646/Webp.net-gifmaker_6.gif" alt="attr"></img>
        <h1 className="attrText">
          <ul>
            <li style={{paddingTop:"15px"}}>
              Laser Eyes
            </li>
            <li style={{paddingTop:"15px"}}>
              Goofy
            </li>
            <li style={{paddingTop:"15px"}}>
              Blood Clan Eyes
            </li>
          </ul>
        </h1>
        </div>

          <div className={modClass11}>
          <h1 className="attrHeight">MOUTH-
Over 15+ unique mouth styles:</h1>
        <img className="attrImg" src="https://cdn.discordapp.com/attachments/771364968292548618/920773270607904798/Webp.net-gifmaker_8.gif" alt="attr"></img>
        <h1 className="attrText">
          <ul>
            <li style={{paddingTop:"15px"}}>
              Sick
            </li>
            <li style={{paddingTop:"15px"}}>
              Medical Mask
            </li>
            <li style={{paddingTop:"15px"}}>
              Diamond Teeth
            </li>
          </ul>
        </h1>
        </div>

          <div className={modClass12}>
          <h1>HAIR-
Over 30+ unique hairstyles:</h1>
        <img className="attrImg" src="https://cdn.discordapp.com/attachments/771364968292548618/920773270792466463/Webp.net-gifmaker_7.gif" alt="attr"></img>
        <h1 className="attrText">
          <ul>
            <li style={{paddingTop:"15px"}}>
              Machete
            </li>
            <li style={{paddingTop:"15px"}}>
              Helmet
            </li>
            <li style={{paddingTop:"15px"}}>
              Red Devil Horns
            </li>
          </ul>
        </h1>
        </div>

      </div>

      </div>
  

     
    </div>
    </>
    );
}


export default FrontComponent;