import React, { useState } from 'react';



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

    return (
        <div>
            {/* Hiển thị tilte cho textarea */}
            <label className="flex flex-col text-blue-900 text-lg" > {label}</label>
            <textarea  
                // Cập nhật các props cho comp 
                className="flex flex-col py-4 px-8  static inset-0 top-1/4  rounded-lg border-indigo-300 border-2 border-solid self-stretch" 
                style={{resize : (isResize ? "both": "none" )}}  
                rows={rows} 
                cols={cols} 
                placeholder={placeholder} onChange={handleChange}>

                {children}

            </textarea>
        </div>

    )
}


export default TextArea;

