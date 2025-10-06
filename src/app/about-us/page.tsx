import React from "react"
import Image from "next/image"
import aboutUsData from "../constants/aboutUsData"

export default function AboutUsPage() {
  const yogev = aboutUsData.find((element) => element.name === "Yogev Gabay")
  const ohad = aboutUsData.find((element) => element.name === "Ohad Porat")
  const tom = aboutUsData.find((element) => element.name === "Tom Ketter")

  return (
    <div className="about-us-body">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="about-tile callout cell medium-4">
            <Image
              src="/yogevPic.jpeg"
              alt="Picture of Yogev"
              width={200}
              height={200}
              className="about-pic yogev"
            />
            <h1 className="about-name">{yogev?.name}</h1>
            <p className="about-description">{yogev?.description}</p>
            <div className="icon-container">
              <a href={yogev?.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <span className="url-icon icon-left">
                  <i className="fab fa-youtube"></i>
                </span>
              </a>
              <a href={yogev?.patreonUrl} target="_blank" rel="noopener noreferrer">
                <span className="url-icon">
                  <i className="fab fa-patreon"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="about-tile callout cell medium-4">
            <Image
              src="/ohadPic.jpeg"
              alt="Picture of Ohad"
              width={200}
              height={200}
              className="about-pic ohad"
            />
            <h1 className="about-name">{ohad?.name}</h1>
            <p className="about-description">{ohad?.description}</p>
            <div className="icon-container">
              <a href={ohad?.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <span className="url-icon icon-left">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
              <a href={ohad?.githubUrl} target="_blank" rel="noopener noreferrer">
                <span className="url-icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="about-tile callout cell medium-4">
            <Image 
              src="/tomPic.jpeg" 
              alt="Picture of Tom" 
              width={200}
              height={200}
              className="about-pic tom" 
            />
            <h1 className="about-name">{tom?.name}</h1>
            <p className="about-description">{tom?.description}</p>
            <div className="icon-container">
              <a href={tom?.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <span className="url-icon">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
            </div>
          </div>
          <p className="email-us">Email us at <a href="mailto:tihaiTeam@gmail.com" target="_blank" rel="noopener noreferrer">tihaiTeam@gmail.com</a> with any comments or questions.</p>
        </div>
      </div>
    </div>
  )
}
