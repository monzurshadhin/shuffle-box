import React from 'react';

const Box2 = ({top,left,right,bottom}) => {
    const style={
        height: "100px",
        width:"100px",
        border: "1px solid black",
        backgroundColor:"#4A8BED",
        textAlign:"center",
        color:"white",
        position: "absolute",
        top:top?top:"0px",
        right:right?right:"0px",
        bottom:right?bottom:"83%",
        left:right?left:"83%",
        transition:"all 1s linear"

        
      }
    return (
        <div style={style}>
            <h2>25</h2>
        </div>
    );
};

export default Box2;