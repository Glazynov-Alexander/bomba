import React, {useState} from 'react'
import './style.css'

let pressed = new Set()

let RightBlock = (props) => {

    let [text, updateText] = useState( props.task[0].text )


    function upText(e) {
        pressed.add(e.code);

        for(let code of ["ShiftLeft", "Enter"]){
            if ((pressed.has("Enter") && !pressed.has("ShiftLeft")) || e.type === "blur") {
                if (e.target.value.length !== 0 && (e.type === "blur" || e.code === "Enter")) {
                    props.upBody(props.task[0]._id, typeof text === "string" ?text.split('\n') :text)
                    return props.upOpacity(false)
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
                              defaultValue={props.task[0].text ? props.task[0].text.join().replaceAll(",", " \n") : ''}/>
                    : <pre style={{width: "900px"}}><h2 className="string title">{props.task[0].title}
                    </h2> {text ? props.task[0].text.map((e, index) => (
                        <p className="string"  key={index}>{e ? e.length > 30 ? e.replace(/(.{90})/g, '$1 \n') : e  : " "}</p>)) : null}</pre>

            }
        </div>
    )
}
export default RightBlock