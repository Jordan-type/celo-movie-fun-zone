import React from 'react'

function ExitButton(props) {
  return (
    <div className={`${props.className}`} onClick={props.close}>
        <div></div>
        <div></div>
    </div>
  )
}

export default ExitButton