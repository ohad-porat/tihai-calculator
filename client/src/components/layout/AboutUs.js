import React from "react"

import aboutUsData from "../../constants/aboutUsData.js"

import yogevPic from "../../assets/images/yogevPic.jpeg"
import ohadPic from "../../assets/images/ohadPic.jpeg"

const AboutUs = () => {
  const yogev = aboutUsData.find((element) => element.name === "Yogev Gabay")
  const ohad = aboutUsData.find((element) => element.name === "Ohad Porat")

  return (
    <div className="about-us-body">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="about-tile callout cell medium-4">
            <img src={yogevPic} alt="Picture of Yogev" className="about-pic yogev" />
            <h1 className="about-name">{yogev.name}</h1>
            <p className="about-description">{yogev.description}</p>
            <div className="icon-container-yogev">
              <a href={yogev.youtubeUrl} target="_blank">
                <span className="url-icon icon-left">
                  <i className="fab fa-youtube"></i>
                </span>
              </a>
              <a href={yogev.patreonUrl} target="_blank">
                <span className="url-icon">
                  <i class="fab fa-patreon"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="about-tile callout cell medium-4">
            <img src={ohadPic} alt="Picture of Ohad" className="about-pic ohad" />
            <h1 className="about-name">{ohad.name}</h1>
            <p className="about-description">{ohad.description}</p>
            <div className="icon-container-ohad">
              <a href={ohad.linkedinUrl} target="_blank">
                <span className="url-icon icon-left">
                  <i class="fab fa-linkedin-in"></i>
                </span>
              </a>
              <a href={ohad.githubUrl} target="_blank">
                <span className="url-icon">
                  <i class="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
