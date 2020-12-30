import React from 'react'

let RightBlock = (props) => {
    function upText (e, text) {
       if(e.code === 'Enter' || e.type === "blur") {
           props.upBody(props.task[0]._id, text)
           props.upOpacity(false)
       }
    }

    console.log(props)

    if (!props.task || !props.task[0]) {
        return null
    }

    return (
        <div>
           <h2>{props.task[0].title}</h2>
            {
                props.position || !props.task[0].text ? <input autoFocus={true}
                                        onBlurCapture={(e) => upText(e, e.target.value)}
                                        onKeyDown={e => upText(e, e.target.value)}
                                        type="text" defaultValue={props.task[0].text}/>
                    :<p >{props.task[0].text}</p>
            }
        </div>
    )
}
export  default  RightBlock