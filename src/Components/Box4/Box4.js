import React from 'react';

const Box4 = ({top,left,right,bottom}) => {
    const style={
        height: "100px",
        width:"100px",
        border: "1px solid black",
        backgroundColor:"#08184F",
        textAlign:"center",
        color:"white",
        position: "absolute",
        top:top?top:"83%",
        right:right?right:"0",
        bottom:right?bottom:"0",
        left:right?left:"83%",
        transition:"all 1s linear"

        
      }
    return (
        <div style={style}>
            <h2>30</h2>
            
        </div>
    );
};

export default Box4;