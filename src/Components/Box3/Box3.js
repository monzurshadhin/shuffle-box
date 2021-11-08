import React from 'react';

const Box3 = ({top,left,right,bottom}) => {
    const style={
        height: "100px",
        width:"100px",
        border: "1px solid black",
        backgroundColor:"#224D65",
        textAlign:"center",
        color:"white",
        position: "absolute",
        top:top?top:"83%",
        right:right?right:"83%",
        bottom:right?bottom:"0",
        left:right?left:"0",
        transition:"all 1s linear"

        
      }
    return (
        <div style={style}>
            <h2>18</h2>
        </div>
    );
};

export default Box3;