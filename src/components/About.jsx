// import { Icon } from '@iconify/react';
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { getCurrentlyPlayingTracks } from "./GetCurrentlyPlayingItem";
import { SpotifyNowPlaying } from "./SpotifyNowPlaying";
import WorkCard from "./WorkCard";
export default function About({ data }) {
  const { imgSrc, title, miniTitle, description } = data;
  const iconPath = process.env.PUBLIC_URL;
  return (
    <section
      className="about-section h-screen relative flex justify-center items-center"
      id="about"
      data-scroll-index={0}
    >
      <div className="">
        <div className="intro">
          <div className="avatar">
            <img src={iconPath + "/avatar.svg"} />
          </div>
          <div className="about-text flex flex-col justify-center align-middle">
            {/* Left hs-text-box */}
            <div className="sub-text-box">
              <h2>{title}</h2>
            </div>
            <div className="description">
              <h6>{description}</h6>
              <br />
              <h6>
                Feel free to reach out to me via{" "}
                <a href="mailto:msafwan@sabanciuniv.edu">email</a> or{" "}
                <a
                  href="https://www.linkedin.com/in/safwanyasin"
                  target="blank"
                >
                  LinkedIn
                </a>
                . Let's build something great together!
              </h6>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="exp-item ml-auto w-1/4">
            <div className="details">
              <h2>Beakwise</h2>
              <h6>Software Engineer</h6>
            </div>
            <div className="time">
              <h2>23</h2>
            </div>
          </div>
          <div className="exp-item w-1/2 shield">
            <div className="details">
              <h2>Shield Technologies</h2>
              <h6>Full-Stack Developer</h6>
            </div>
            <div className="time">
              <h2>22-23</h2>
            </div>
          </div>
          <div className="exp-item w-1/2 ml-auto">
            <div className="details">
              <h2>Freelance</h2>
              <h6>Web & Mobile App Developer</h6>
            </div>
            <div className="time">
              <h2>22~</h2>
            </div>
          </div>
          <div className="exp-item w-9/12 ml-auto">
            <div className="details">
              <h2>Preply</h2>
              <h6>Computer Science Tutor</h6>
            </div>
            <div className="time">
              <h2>21~</h2>
            </div>
          </div>
          <div className="exp-item w-full">
            <div className="details">
              <h2>Sabanci University</h2>
              <h6>B.Sc Computer Science and Engineering</h6>
            </div>
            <div className="time">
              <h2>2020-2024</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <SpotifyNowPlaying */}
      {/* <SpotifyPlayerWrapper /> */}
    </section>
  );
}
