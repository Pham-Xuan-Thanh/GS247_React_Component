import React, { useState } from 'react';
import "./index.css"
import { cls } from '../../utils/helpers';


const Triangle = (props) => (
  <div className={props.className} >
    <div style={{
      width: 0,
      height: 0, borderRadius: 2,
      borderBottom: "8px solid transparent",
      borderRight: "8px solid #2E4562",
      
      borderTop: "8px solid transparent"
    }} />
  </div>
)

const classes = {
  wrap: "relative inline-block",
  tooltip: {
    none: " flex flex-col justify-center items-center w-371p h-10 p-12p bg-2E4562 rounded-md shadow-tooltipNone ",
    botandTopMid : "flex flex-col items-center  p-0  w-371p h-54p filter drop-shadow-tooltip  ",
    botandTopLeft: "flex flex-col items-start  p-0  w-371p h-54p filter drop-shadow-tooltip  ",
    botandTopRight: "flex flex-col items-end  p-0  w-371p h-54p filter drop-shadow-tooltip  ",
    rightLeft: "flex flex-row justify-center items-center p-0  w-379p h-46p filter drop-shadow-tooltip",
  },
  textContainer: "static flex flex-col items-start p-12p w-371p h-46p bg-2E4562 rounded-md shadow-tooltipNone  ",
  text: "not-italic font-normal flex items-center text-white h-22p w-347p font-inter leading-160 text-14p  ",
  triangle: {
    base: "static w-2 h-4  rounded-sm flex-none flex-grow-0  m-0 ",
    botLeft: "order-none left-leftArrow -bottom-4 transform -rotate-90",// Áp dụng định nghĩa matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
    topLeft: "order-none left-leftArrow -bottom-2 transform rotate-90",
    botRight: "order-none left-rightArrow -bottom-4 transform -rotate-90",
    topRight: "order-none left-rightArrow -bottom-2 transform rotate-90"
  },
  arrow: {
    left: " left-leftTriangle bottom-15p  order-none",
    right: " left-rightTriangle bottom-15p order-1  transform rotate-180",
    botMiddle: "  order-1  left-middleArrow -bottom-4 -mt-1  transform -rotate-90 ",
    topMiddle: "order-none left-middleArrow bottom-38p -mb-1 transform rotate-90 ",
    botLeft : "flex flex-row items-center static w-10 h-2 left-0 top-54p pl-6 order-1 m-0  ",
    topLeft : "flex flex-row items-center static w-10 h-2 left-0 top-0 order-none pl-6 m-0",
    botRight : "flex flex-row items-center static w-10 h-2 flex-none order-1 flex-grow-0 left-331p top-54p pr-6 m-0",
    topRight : "flex flex-row items-center static w-10 h-2 flex-none order-none flex-grow-0 left-331p top-0 pr-6 m-0"

  }


}

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const {
    content = "This is a single line tooltip with no wrapping text and",  //Nội dung sễ hiện thị trong text của tooltip 
    direction = "top",                                                    // Ví trí xuất hiện của tooltip: TOP-MID LEFT RIGHT BOT-MID TOP-LEFT BOT-LEFT TOP-RIGHT BOT-RIGHT 
  } = props;

  let tooltipClass , arrowClass, triangleClass, isNone = false;
  switch (direction) {
    case "left":
      tooltipClass = cls(`${classes.tooltip.rightLeft}`);
      arrowClass = cls(`${classes.triangle.base} ${classes.arrow.left}`);
      triangleClass = "";      
      break;
    case "right":
      tooltipClass = cls(`${classes.tooltip.rightLeft}`);
      arrowClass = cls(`${classes.triangle.base} ${classes.arrow.right}`);
      triangleClass = "";      
      break;
    case "top-mid":
      tooltipClass = cls(`${classes.tooltip.botandTopMid}`);
      arrowClass = cls(`${classes.triangle.base} ${classes.arrow.topMiddle}`);
      triangleClass = "";      
      break;
    case "bot-mid":
      tooltipClass = cls(`${classes.tooltip.botandTopMid}`);
      arrowClass = cls(`${classes.triangle.base} ${classes.arrow.botMiddle}`);
      triangleClass = "";      
      break;
    case "top-left":
      tooltipClass = cls(`${classes.tooltip.botandTopLeft}`);
      arrowClass = cls(`${classes.arrow.topLeft}`);
      triangleClass = cls(`${classes.triangle.base} ${classes.triangle.topLeft}`);      
      break;
    case "bot-left":
      tooltipClass = cls(`${classes.tooltip.botandTopLeft}`);
      arrowClass = cls(`${classes.arrow.botLeft}`);
      triangleClass = cls(`${classes.triangle.base} ${classes.triangle.botLeft}`);       
      break;
    case "top-right":
      tooltipClass = cls(`${classes.tooltip.botandTopRight}`);
      arrowClass = cls(`${classes.arrow.topRight}`);
      triangleClass = cls(`${classes.triangle.base} ${classes.triangle.topRight}`);      
      break;
    case "bot-right":
      tooltipClass = cls(`${classes.tooltip.botandTopRight}`);
      arrowClass = cls(`${classes.arrow.botRight}`);
      triangleClass = cls(`${classes.triangle.base} ${classes.triangle.botRight}`);        
      break;
    default:
      isNone = true;
      break;
  }

  return (
    
        <div className={tooltipClass}>
          { !isNone && 
          (<div className={arrowClass} >
            <Triangle className={triangleClass} />
          </div>)
          }
          <div className={classes.textContainer}>
            <div className={classes.text}>
              {content}
            </div>
          </div>
        </div>
     
  );

}
export default Tooltip;

