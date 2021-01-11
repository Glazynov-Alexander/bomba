import React, {useRef, useEffect, useState} from 'react'
import './style.css'

let pressed = new Set()

let RightBlock = (props) => {
    if (!props.task || !props.task[0]) {
        return null
    }

    let [text, updateText] = useState(props.task[0].text)


    function upText(e) {
        pressed.add(e.code);
        for (let code of ["ShiftLeft", "Enter"]) {
            if ((pressed.has("Enter") && !pressed.has("ShiftLeft")) || e.type === "blur") {
                if (e.target.value.length !== 0 && (e.type === "blur" || e.code === "Enter")) {
                    props.upBody(props.task[0]._id, typeof text === "string" ?text.split('\n') :text)
                    props.upOpacity(false)
                }
            }
        }
    }


    return (
        <div className="rightBlock">

            {
                props.position || !props.task[0].text ?
                    <textarea className="textArea" autoFocus={true}
                              onChange={e => updateText(e.target.value)}
                              onBlurCapture={upText}
                              rows="10" cols="20" wrap="hard"
                              onKeyDown={upText}
                              onKeyUp={e => e.code === "ShiftLeft" ? pressed.delete("ShiftLeft") : null}
                              type="text"
                              defaultValue={props.task[0].text ? props.task[0].text.join().replaceAll(",", " \n") : ''}/>
                    : <pre style={{width: "900px"}}><h2 className="string title">{props.task[0].title}
                    </h2> {text ? props.task[0].text.map((e, index) => (
                        <p className="string" key={index}>{e ? e : " "}</p>)) : null}</pre>

            }
        </div>
    )
}
export default RightBlock