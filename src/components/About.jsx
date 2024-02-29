// import { Icon } from '@iconify/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import { getCurrentlyPlayingTracks } from './GetCurrentlyPlayingItem';
import { SpotifyNowPlaying } from './SpotifyNowPlaying';
export default function About({ data, socialData }) {
  const { imgSrc, miniTitle, title, description, funfacts, btnText, btnUrl } =
    data;
  return (
    <section className="about-section relative flex justify-center items-center" id="about" data-scroll-index={0}>
          <div className='h-screen'>
          <div className="section-heading">
                <TypeAnimation
                  sequence={miniTitle}
                  speed={1}
                  repeat={Infinity}
                  cursor={false}
                />
          </div>
          <div className="header">
            {/* Left hs-text-box */}
            <div className="hs-text-box flex flex-col items-start">
              <h2>
             
               I design and build
              </h2>
            </div>
          </div>
          
          <div>
            {/* Right hs-text-box */}
            <div className="hs-text-box flex flex-col items-end">
              <h2>
                digital products
                <h2 className='bracket'>/&gt;</h2>
              </h2>
              
            </div>
          </div>

      </div>
      {/* <SpotifyNowPlaying */}
      {/* <SpotifyPlayerWrapper /> */}
    </section>
  );
}
