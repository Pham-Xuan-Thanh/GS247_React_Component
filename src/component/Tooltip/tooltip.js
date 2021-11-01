import React, { useState } from 'react';
import "./index.css"

const Tooltip = (props) => {
    let timeout;
    const [active, setActive] = useState(false);
    const {
        content = "This is a single line tooltip with no wrapping text and",  //Nội dung sễ hiện thị trong text của tooltip 
        direction = "top",                                                    // Ví trí xuất hiện của tooltip: TOP LEFT RIGHT BOTTOM
        trigger = "hover"                                                     // Action để kích hoạt tooltip : HOVER or  CLICK or both 
    } = props;

    const showTip = () => {
        timeout = setTimeout(() => {
          setActive(true);
        }, props.delay || 400);
      };
    
      const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
      };
      const handleClick = ( () =>{
        setActive(!active)
      })
      
      var isHover = false, isClick = false;
      switch (trigger) 
      {
        case "hover":
          isHover = true;
          break
        case "click":
          isClick = true;
          break
        default:
          isClick = isHover = true;
      }
      return (
        <div
          className="Tooltip-Wrapper"
          // When to show the tooltip
          onMouseEnter={(isHover ? showTip : undefined)}
          onMouseLeave={(isHover ? hideTip : undefined)}
          onClick={(isClick ? handleClick : undefined)}
        >
          {/* Wrapping */}
          {props.children}
          {active && (
            <div className={`Tooltip-Tip ${direction || "top"}`}>
              {/* Content */}
              {content}
            </div>
          )}
        </div>
      );
    
}
export default Tooltip;

