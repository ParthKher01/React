import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter the text here');

  const handleOnChange = (event) => {
    console.log('Change triggered');
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log('Uppercase event triggered');
    let upText = text.toUpperCase();
    setText(upText);
  };

  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          id="box-id" 
          rows="7"
        />
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
    </div>
  );
}
