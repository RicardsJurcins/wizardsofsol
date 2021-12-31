import { useLocalStorage } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { setInterval, clearInterval } from "timers";


const About = () => {


    let about = `The inspiration for this project was a project called Weird Whales on the Ethereum blockchain. Once I heard that a 12-year-old could make this happen, 
            I knew I wanted to try.I've always been entrepreneurial and my interest in crypto led me to the world of NFTs.I started this project 3 months ago with months worth of experience in the NFT 
            space. Through these 3 months, I've learned a lot about NFTs.At the start, I thought it's all about the art and the team.Although those things are important, 
            the most important aspect of any project is the community - You. Without a community, it's just a lonely picture with no demand. That is why I've decided to make this 
            project all about the community.You will decide the future of this project, I will only be the middle man.As this is my first project and You supporting my journey, 
            I will grant You a future airdrop of my projects to come.I know right now this may sound like a worthless offer, but You best believe that this will be something magical. 
            Follow my journey through the metaverse and as Warren Buffett once said, “The best investment you can make, is an investment in yourself." and I stand by this quote.`;
    
   
 
    
    const sessionValue = sessionStorage.getItem("VALUE");
    const sessionText = sessionStorage.getItem("TEXT");
    const sessionLoad = sessionStorage.getItem("LOADED");

    const [load, setLoad] = useState(  
     sessionLoad==="true"? sessionLoad :"false");
    const [count, setCount] = useState(
        sessionValue ? JSON.parse(sessionValue) : 0
    );
    const [text, setText] = useState(
        sessionText?JSON.parse(sessionText):""
    );

    useEffect(()=> {

        const timer = setInterval(()=> {
            if (load==="true") {
                 if (count < about.length) {
                    setText(text + about.charAt(count));
                    setCount(count+1);
                }
            }
        }, 20);
        
        return ()=> {
            sessionStorage.setItem("VALUE", JSON.stringify(count));
            sessionStorage.setItem("TEXT", JSON.stringify(text));
            clearInterval(timer);
        };
    }, [count, text, load]);

    useEffect(()=> {
        if (load !== "true") {
            setTimeout(()=> {
                setLoad("true");
            }, 200);  
        }
        return ()=> {
            sessionStorage.setItem("LOADED", "true");
        }
    }, [load]);



    return (
        <>
        {load &&   <div className="aboutDiv">
        <div className="scroll-text">
            <h1 style={{color:"rgb(123, 63, 0)", textAlign:"center", fontSize:"25px"}}>CHAPTER ONE</h1>
        <p className="textWrapper" style={{color:"rgb(123, 63, 0)"}} id="text">
            {text}
        </p>
        </div>
        </div>}
        </>
    );
}

export default About;