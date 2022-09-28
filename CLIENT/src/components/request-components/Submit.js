import React from 'react'

function Submit(props) {
  return (
    <div className="checkbox-div">
        <div className="request-footer-moreButton">
          <div>
            <button className="btn btn-transparent"
              onClick={(event) => {
                event.preventDefault();
                props.sendShowSubmit(false);
                props.sendShowPossibilityCheck(true);
              }}>Zurück</button>
          </div>
         
          <button className="btn btn-transparent"
          onClick={() =>{
            props.sendSubmit(true)
          }}>
            Abschicken
          </button>
        </div>
      </div>
  )
}

export default Submit
