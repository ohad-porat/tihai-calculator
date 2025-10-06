"use client"

import React from "react"

export default function WhatIsTihaiPage() {
  return (
    <div className="videos-container">
      <div className="video">
        <h1 className="videos-header">Part 1</h1>
        <iframe 
          width="100%" 
          height="400px"
          src="https://www.youtube.com/embed/0kJ4PA2yOSU"
          title="Tihai Part 1"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video">
        <h1 className="videos-header">Part 2</h1>
        <iframe 
          width="100%" 
          height="400px"
          src="https://www.youtube.com/embed/tSv4Br2MpG8?start=175"
          title="Tihai Part 2"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
