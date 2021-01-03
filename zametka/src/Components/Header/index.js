import React from 'react'
import src from "../../images/3335888.svg";
import "./style.css";
const Header = ({opacityField, create, field}) => {
    return (
        <div className="header">
            <div className="bool">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <img
                onClick={(e) => opacityField(true)}
                style={{ width: "30px", cursor:"pointer" }}
                src={src}
                alt=""
            />

            {field ? (
                <div
                    onBlurCapture={(e) => opacityField(false)}
                    onKeyDown={(e) => create(e, e.target.value)}
                    style={{ position: "fixed" }}
                >
                    <input autoFocus={true} type="text" placeholder={"title"} />
                </div>
            ) : null}
        </div>
    )
}

export  default Header