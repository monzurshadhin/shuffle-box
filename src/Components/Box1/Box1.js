import React from 'react';

const Box1 = ({top,right,bottom,left}) => {
    console.log(typeof top);
    const style={
        height: "100px",
        width:"100px",
        border: "1px solid black",
        backgroundColor:"black",
        textAlign:"center",
        color:"white",
        position: "absolute",
        top:top?top:"0px",
        right:right?right:"83%",
        bottom:right?bottom:"83%",
        left:right?left:"0",
        transition:"all 1s linear"
        

        
      }
    //   console.log(style);
    return (
        <div style={style}>
            <h2>15</h2>
        </div>
    );
};

export default Box1;