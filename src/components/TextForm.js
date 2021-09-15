import React, { useState } from 'react'

export default function TextForm(props) {


    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

        if (text.length > 0) {
            props.showAlert("Converted to uppercase");
        } else {
            props.showAlert("Please enter something in textbox");
        }
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

        if (text.length > 0) {
            props.showAlert("Converted to lowercase");
        } else {
            props.showAlert("Please enter something in textbox");
        }

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);

        if (text.length > 0) {
            props.showAlert("Text cleared");
        } else {
            props.showAlert("Please enter something in textbox");
        }

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);

        if (text.length > 0) {
            props.showAlert("Text copied to clipboard");
        } else {
            props.showAlert("Please enter something in textbox");
        }

    }
    const removeSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        if (text.length > 0) {
            props.showAlert("Extra spaces removed");
        } else {
            props.showAlert("Please enter something in textbox");
        }

    }


    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8" placeholder="Enter text here" style={{backgroundColor: props.mode==='dark'? 'rgb(27 40 51)':'white' , color:props.mode==='dark'? 'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container mt-4">
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!=0}).length} minutes read</p>
                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in textbox to preview it here"}</p>
            </div>
        </>


    )
}