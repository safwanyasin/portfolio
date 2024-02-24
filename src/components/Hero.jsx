// import { Icon } from '@iconify/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import { getCurrentlyPlayingTracks } from './GetCurrentlyPlayingItem';
import { SpotifyNowPlaying } from './SpotifyNowPlaying';
export default function Hero({ data, socialData }) {
  const { imgUrl, name, heading, typingText, typingTextSecondary, description, btnText, btnUrl } =
    data;
  return (
    <section className="home-section h-screen relative flex justify-center items-center" id="home" data-scroll-index={0}>
      <div className="container">
          <div className='subhead-small row-auto pb-4 text-center '>
              <h6 >Available for hire & for freelance projects</h6>
          </div>
          <div className='flex'>
          <div className="header">
            {/* Left hs-text-box */}
            <div className="hs-text-box flex flex-col items-start">
              <h2>
              <h2 className='bracket'>&lt;</h2>
                <TypeAnimation
                  sequence={typingText}
                  speed={1}
                  repeat={Infinity}
                  cursor={false}
                />
              </h2>
            </div>
          </div>
          <div className='hs-text-box subhead'>
           <h6>Available for</h6><br/>
           <h6>hire & for</h6><br/>
           <h6>freelance</h6><br/>
           <h6>projects</h6><br/>
          </div>
          </div>
          
          <div className="grid-rows-1">
            {/* Right hs-text-box */}
            <div className="hs-text-box flex flex-col items-end">
              <h2>
                <TypeAnimation
                  cursor={false}
                  sequence={typingTextSecondary}
                  speed={1}
                  repeat={0}
                />
                <h2 className='bracket'>/&gt;</h2>
              </h2>
              
            </div>
          </div>

      </div>
      <SpotifyNowPlaying />
      {/* <SpotifyPlayerWrapper /> */}
    </section>
  );
}
