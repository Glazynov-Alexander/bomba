import React from 'react'
import './style.css'
let RightBlock = (props) => {
    function upText (e, text) {
       if( e.type === "blur") {
           props.upBody(props.task[0]._id, text)
           props.upOpacity(false)
       }
    }

    if (!props.task || !props.task[0]) {
        return null
    }

    return (
        <div className="rightBlock">
           <h2>{props.task[0].title}</h2>
            {
                props.position || !props.task[0].text ? <textarea style={{width:"600px", height:"300px"}} autoFocus={true}
                                        onBlurCapture={(e) => upText(e, e.target.value)}
                                        onKeyDown={e => upText(e, e.target.value)}
                                        type="text" defaultValue={props.task[0].text}/>
                    :<div style={{wordWrap: "break-word", width:"900px"}} >{props.task[0].text}</div>
            }
        </div>
    )
}
export  default  RightBlock