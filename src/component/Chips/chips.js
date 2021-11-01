import React, { useState } from 'react';


const Chips = (props) => {

    const [state, setState] = useState({

    })


    const {
        items : [],
 
    } = props;

    const handleDelete = ( (item)=> {
        this.setState({ 
            items : this.state.items.filter( i => i === item )
        })
    })

    return (
        <div>
            {this.items.maps( item => (
                <div className="flex" >
                    
                </div>
            ))}
        </div>
    )
}