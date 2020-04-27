import React from 'react';

function parseMessageObj(data) {
  let error = [];
  const parseObj = function (obj, objKey) {
    if (obj instanceof Array) {
      obj.forEach(i => {
        if (typeof i === 'string') {
          error.push(objKey ? `${objKey}: ${i}` : i);
        } else {
          parseObj(i, objKey);
        }
      });
    } else {
      for (let key in obj) {
        if (typeof obj[key] === 'string') {
          error.push(key + ': ' + obj[key]);
        } else {
          parseObj(obj[key], key);
        }
      }
    }
  }
  if (typeof data === 'string' && data) {
    error.push(data);
  } else if (typeof data === 'object') {
    parseObj(data);
  }
  return error;
}

export default function parseMessage(data) {
  const defaultMessage = 'Somthing went wrong, Please try again';
  const error = parseMessageObj(data);
  return (
    <span>
      {error && error.length > 0 ?
        error.map((item, index) => {
          return <span key={`error-item-${index}${Math.random()}`}>{item} <br /></span>
        }) : <span>{defaultMessage} <br /></span>}
    </span>
  )
}
