import React, { useState } from 'react';
import Box1 from '../Box1/Box1';
import Box2 from '../Box2/Box2';
import Box3 from '../Box3/Box3';
import Box4 from '../Box4/Box4';
import './MainBox.css';

const MainBox = () => {
    const [left1,setLeft1]=useState(0);
    const [right1,setRight1]=useState(0);
    const [top1,setTop1]=useState(0);
    const [bottom1,setBottom1]=useState(0);
    
    const [left2,setLeft2]=useState(0);
    const [right2,setRight2]=useState(0);
    const [top2,setTop2]=useState(0);
    const [bottom2,setBottom2]=useState(0);

    const [left3,setLeft3]=useState(0);
    const [right3,setRight3]=useState(0);
    const [top3,setTop3]=useState(0);
    const [bottom3,setBottom3]=useState(0);

    const [left4,setLeft4]=useState(0);
    const [right4,setRight4]=useState(0);
    const [top4,setTop4]=useState(0);
    const [bottom4,setBottom4]=useState(0);

    const updatePosition = () =>{
        const left1 = Math.floor(Math.random() * 100);
        setLeft1(left1);
        const right1 = Math.floor(Math.random() * 100);
        setRight1(right1);
        const top1 = Math.floor(Math.random() * 100);
        setTop1(top1)
        const bottom1 = Math.floor(Math.random() * 100);
        setBottom1(bottom1);
        
        const left2 = Math.floor(Math.random() * 100);
        setLeft2(left2);
        const right2 = Math.floor(Math.random() * 100);
        setRight2(right2);
        const top2 = Math.floor(Math.random() * 100);
        setTop2(top2)
        const bottom2 = Math.floor(Math.random() * 100);
        setBottom2(bottom2);
        
        const left3 = Math.floor(Math.random() * 100);
        setLeft3(left3);
        const right3 = Math.floor(Math.random() * 100);
        setRight3(right3);
        const top3 = Math.floor(Math.random() * 100);
        setTop3(top3)
        const bottom3 = Math.floor(Math.random() * 100);
        setBottom3(bottom3);

        const left4 = Math.floor(Math.random() * 100);
        setLeft4(left4);
        const right4 = Math.floor(Math.random() * 100);
        setRight4(right4);
        const top4 = Math.floor(Math.random() * 100);
        setTop4(top4)
        const bottom4 = Math.floor(Math.random() * 100);
        setBottom4(bottom4);
        
    }


    return (
        <div style={{marginTop:"30px"}}>
        <div className="main-box" style={{
            height: "600px",
            width:"600px",
        
            border: "1px solid black",
            position: "relative",
            margin:"auto"            
          }}>
            
            <Box1 top={top1} left={left1} right={right1} bottom={bottom1}></Box1>
            <Box2 top={top2} left={left2} right={right2} bottom={bottom2}></Box2>
            <Box3 top={top3} left={left3} right={right3} bottom={bottom3}></Box3>
            <Box4 top={top4} left={left4} right={right4} bottom={bottom4}></Box4>
            
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
        <button onClick={updatePosition} style={{backgroundColor:"#266E97",color:"white",padding:"8px 20px",border:"none", borderRadius:"5px" }}>Shuffle</button>


        </div>
        </div>
    );
};

export default MainBox;