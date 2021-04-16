import React from "react"
import ReactPlayer from "react-player"

const WhatIsTihai = () => {
  return (
    <div className="videos-container">
      <div className="video">
        <h1 className="videos-header">Part 1</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=0kJ4PA2yOSU" />
      </div>
      <div className="video">
        <h1 className="videos-header">Part 2</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=tSv4Br2MpG8&t=175s" />
      </div>
    </div>
  )
}

export default WhatIsTihai
