import React, { useState } from 'react';
import  './index.module.css'
import { cls } from '../../utils/helpers';
import PropTypes from "prop-types";


const classes = {
    wrap :" flex flex-col items-start p-0 w-288p h-110p bg-transparent ",
    label : {
        flex : " bottom-4/5 flex ",
        align : "items-center font-inter self-stretch ",
        text : " text-14p leading-160 text-919DAF ",
        others : "  my-8p bg-transparent " ,
    },
    textarea : {
        base : "flex flex-col bg-transparent static inset-0 top-27.27 box-border self-stretch flex-none  order-1  py-7p px-16p  my-8p rounded-8p  border-344356 border border-solid  ",
        active : " active:border-5E718A focus:outline-none ",
        hover : " hover:border-5E718A ",
        placeholder : "text-E8E9EA text-14p leading-160  placeholder-757A83 ",
    }

    
}


function TextArea(props) {
    
    const [state , setState ] = useState("")
    const {
        label = "Text" ,                                    // Title của input
        placeholder = "This input quite long",              // Placeholder
        rows = 2,                                           // Số dòng hiện thị
        cols = 20,                                          // Số cột hiển thị
        isResize = false,                                   // Cho phép thay đổi kích thước
        children                                            // Các component hoặc content con 
    } = props;

    // Xử lý input thay đổi 
    const handleChange = ( event ) => {
        setState(event.target.value)
    }
    // 
    return (
        <div className={classes.wrap}>
            {/* Hiển thị tilte cho textarea */}
            <label className={cls(`
                ${classes.label.align}
                ${classes.label.flex}
                ${classes.label.text}
                ${classes.label.others}`)}  > {label}</label>
            <textarea  
                // Cập nhật các props cho comp 
                className={cls(`
                    ${classes.textarea.base}
                    ${classes.textarea.hover}
                    ${classes.textarea.placeholder}
                    ${classes.textarea.active}`)}
                style={{resize : (isResize ? "both": "none" )}}  
                // rows={rows} 
                // cols={cols} 
                placeholder={placeholder} onChange={handleChange}>

                {children}

            </textarea>
        </div>

    )
}
TextArea.propTypes = {
    placeholder : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
}

export default TextArea;

