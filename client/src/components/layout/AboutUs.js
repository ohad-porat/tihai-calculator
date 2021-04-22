import React from "react"

import aboutUsData from "../../constants/aboutUsData.js"

import yogevPic from "../../assets/images/yogevPic.jpeg"
import ohadPic from "../../assets/images/ohadPic.jpeg"
import tomPic from "../../assets/images/tomPic.jpeg"

const AboutUs = () => {
  const yogev = aboutUsData.find((element) => element.name === "Yogev Gabay")
  const ohad = aboutUsData.find((element) => element.name === "Ohad Porat")
  const tom = aboutUsData.find((element) => element.name === "Tom Ketter")

  return (
    <div className="about-us-body">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="about-tile callout cell medium-4">
            <img
              src={yogevPic}
              alt="Picture of Yogev"
              className="about-pic yogev"
            />
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
                  <i className="fab fa-patreon"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="about-tile callout cell medium-4">
            <img
              src={ohadPic}
              alt="Picture of Ohad"
              className="about-pic ohad"
            />
            <h1 className="about-name">{ohad.name}</h1>
            <p className="about-description">{ohad.description}</p>
            <div className="icon-container-ohad">
              <a href={ohad.linkedinUrl} target="_blank">
                <span className="url-icon icon-left">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
              <a href={ohad.githubUrl} target="_blank">
                <span className="url-icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="about-tile callout cell medium-4">
            <img src={tomPic} alt="Picture of Tom" className="about-pic tom" />
            <h1 className="about-name">{tom.name}</h1>
            <p className="about-description">{tom.description}</p>
            <div className="icon-container-tom">
              <a href={tom.linkedinUrl} target="_blank">
                <span className="url-icon icon-left">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
            </div>
          </div>
          <p className="email-us">Email us at <a href="mailto:tihaiTeam@gmail.com" target="_blank">tihaiTeam@gmail.com</a> with any comments or questions.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
