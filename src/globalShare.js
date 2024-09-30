
import React from 'react'

function SharePublic(props) {

  function handelClick() {
   console.log('hello click')
  }
  return (
    <React.Fragment>
      {React.cloneElement(props.element, { ...props.children?.props, onClick: handelClick })}
      
    </React.Fragment>
  );
}

export default SharePublic
