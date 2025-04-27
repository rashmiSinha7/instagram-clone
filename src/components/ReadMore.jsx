import React, { useState } from 'react';

function ReadMore({ text, maxLength = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    // If text is short, no need to clip
    return <p style={{fontSize:"14px"}}>{text}</p>;
  }

  return (
    <p style={{fontSize:"14px"}}>
      {isExpanded ? text : text.substring(0, maxLength) + '...'}
      <span
        style={{ color: 'gray', cursor: 'pointer', marginLeft: '5px', fontSize:"14px"}}
        onClick={toggleReadMore}
      >
        {isExpanded ? 'Show less' : 'Read more'}
      </span>
    </p>
  );
}

export default ReadMore;
