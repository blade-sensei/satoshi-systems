import React from 'react';
import './DataView.css'
import { withRouter } from "react-router-dom";


const DataViewer = (props) => {
  const user = props.location.state
  return (
    <div className="container">
      <div>
        score: { user.score }
      </div>
      <div>
        age { user.age }
      </div>
    </div>
  )
}

export default withRouter(DataViewer);