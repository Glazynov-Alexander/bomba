import React, {useRef, useEffect, useState} from 'react'
import './style.css'

let RightBlock = (props) => {
    if (!props.task || !props.task[0]) {
        return null
    }
    let flag = false
    let [text, updateText] = useState(props.task[0].text)
    let [one, upOne] = useState(2)
    const titleRef = useRef();

    function upText(e) {
        if (e.code === "ShiftLeft" || e.code === "ShiftRight") flag = true
        if (e.code === "Enter" && flag) {}

        if (!flag && (e.type === "blur" || e.code === "Enter")) {
            props.upBody(props.task[0]._id, e.target.value.replace(/\n/g, "<br/>"))
            props.upOpacity(false)
        }
    }

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.innerHTML = `<div >${props.task[0].text}</div>`
        }
    }, [props.task, one])

    return (
        <div className="rightBlock">
            <h2>{props.task[0].title}</h2>
            {
                props.position || !props.task[0].text ?
                    <textarea style={{width: "600px", height: "300px"}} autoFocus={true}
                              onChange={e => updateText(e.target.value)}
                              onBlurCapture={upText}
                              rows="10" cols="20" wrap="hard"
                              onKeyDown={upText}
                              type="text" defaultValue={text.replaceAll("<br/>", " \n")}/>
                    : <div style={{width: "900px"}} ref={titleRef}></div>

            }
        </div>
    )
}
export default RightBlock