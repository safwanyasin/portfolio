import React, { useState } from 'react';

const HtmlStyleButton = ({ onPressed, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='html-style-button flex'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPressed}
    >
      <h6 className={`${isHovered ? 'hovered1' : ''}`}>&lt;&nbsp;</h6> <h6>{content}</h6> <h6 className={`${isHovered ? 'hovered' : ''}`}>&nbsp;/&gt;</h6>
    </div>
  );
};

export default HtmlStyleButton;
