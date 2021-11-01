import React, { useState } from 'react';

const Chip = (props ) => {
       //Left Icon, Right must icon, left and right , left Avatar
    let isIcon , isRight, isBoth, isAvatar;
    const {
        variant = "" ,
        leftElm = "",
        rightElm = "",
        onDelete ,
        ...other
    } = props;

    switch (variant) {
        case "left-avatar":
            isLeft = true;
        case "left-icon":
            isIcon = true;
        case "right":
            isRight = true;
        case "both" :
            isLeft = isRight = true;
        default: 
            isNone = true;
    }

    let left;
    if ( isAvatar) {
        left = leftElm
    } else  {
        if (isIcon)
            {left =  `<>`;}
    }
    return (
        <div>
            { left }
            {other}
            
        </div>
    )
}

export default TextArea;