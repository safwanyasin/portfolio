// // import { Icon } from '@iconify/react';
// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { Link as ScrollLink } from 'react-scroll';
// import { getCurrentlyPlayingTracks } from './GetCurrentlyPlayingItem';
// import { SpotifyNowPlaying } from './SpotifyNowPlaying';
// export default function Hero({ data, socialData }) {
//   const { imgUrl, name, heading, typingText, typingTextSecondary, description, btnText, btnUrl } =
//     data;
//   return (
//     <section className="home-section h-screen relative flex justify-center items-center" id="home" data-scroll-index={0}>
//       <div className="container">
//           <div className='subhead-small row-auto pb-4 text-center '
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             data-aos-delay="500"
//           >
//               <h6 >Available for hire & for freelance projects</h6>
//           </div>
//           <div className='flex'>
//           <div className="header">
//             {/* Left hs-text-box */}
//             <div
//               data-aos="fade-right"
//               data-aos-duration="1000"
//               data-aos-delay="500"
//               className="hs-text-box flex flex-col items-start">
//               <h2>
//               <h2 className='bracket'>&lt;</h2>
//                 <TypeAnimation
//                   sequence={typingText}
//                   speed={1}
//                   repeat={Infinity}
//                   cursor={false}
//                 />
//               </h2>
//             </div>
//           </div>
//           <div className='hs-text-box subhead'
//             data-aos="fade-left"
//             data-aos-duration="1000"
//             data-aos-delay="500"
//           >
//            <h6>Available for</h6><br/>
//            <h6>hire & for</h6><br/>
//            <h6>freelance</h6><br/>
//            <h6>projects</h6><br/>
//           </div>
//           </div>

//           <div className="grid-rows-1">
//             {/* Right hs-text-box */}
//             <div className="hs-text-box flex flex-col items-end"
//               data-aos="fade-left"
//               data-aos-duration="1000"
//               data-aos-delay="500"
//             >
//               <h2>
//                 <TypeAnimation
//                   cursor={false}
//                   sequence={typingTextSecondary}
//                   speed={1}
//                   repeat={0}
//                 />
//                 <h2 className='bracket'>/&gt;</h2>
//               </h2>

//             </div>
//           </div>

//       </div>
//       {/* <SpotifyNowPlaying */}
//       {/* <SpotifyPlayerWrapper /> */}
//     </section>
//   );
// }
// import { Icon } from '@iconify/react';
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { getCurrentlyPlayingTracks } from "./GetCurrentlyPlayingItem";
import { SpotifyNowPlaying } from "./SpotifyNowPlaying";
import PrimaryButton from "./PrimaryButton";
import { motion } from "framer-motion";
import Stats from "./Stats";
import SecondaryButton from "./SecondaryButton";

// export default function Hero({ data, socialData }) {
//   const {
//     imgUrl,
//     name,
//     heading,
//     typingText,
//     typingTextSecondary,
//     description,
//     btnText,
//     btnUrl,
//   } = data;
//   return (
//     <section
//       className="home-section h-screen relative flex overflow-hidden"
//       id="home"
//       data-scroll-index={0}
//     >
//       <div className="bigBlob">
//         <Blob />
//       </div>

//       <div className="w-2/3 mt-auto justify-end items-end">
//         {/* Left hs-text-box */}
//         <motion.div
//           className="flex flex-row items-center mb-5 status"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 1,
//             delay: 2,
//             ease: "easeInOut",
//           }}
//         >
//           <div class="blob"></div>
//           <div>
//             <h6 className="ml-2">Actively looking for work</h6>
//           </div>
//         </motion.div>
//         <div
//           data-aos="fade-right"
//           data-aos-duration="1000"
//           data-aos-delay="500"
//           className="hs-text-box flex flex-col items-start"
//         >
//           <h2>
//             <h2 className="bracket">&lt;</h2>
//             <TypeAnimation
//               item
//               sequence={typingText}
//               speed={1}
//               repeat={Infinity}
//               cursor={true}
//             />
//           </h2>
//         </div>

//         <BlobSmall />
//         {/* Right hs-text-box */}
//         <div
//           className="hs-text-box flex flex-col items-end"
//           data-aos="fade-left"
//           data-aos-duration="1000"
//           data-aos-delay="500"
//         >
//           <h2>
//             <TypeAnimation
//               cursor={false}
//               sequence={typingTextSecondary}
//               speed={1}
//             />
//             <h2 className="bracket">/&gt;</h2>
//           </h2>
//         </div>
//       </div>
//       <div className="container w-1/3 h-screen">
//         <h1 className="mt-20">
//           Hey, I'm Safwan—a tech enthusiast on the verge of completing a
//           Bachelor's in Computer Science with a finance minor. Currently hunting
//           for roles in software, frontend and mobile app development, I bring a
//           blend of creativity and technical skills. Check out my portfolio for a
//           glimpse of my passion in action!
//         </h1>
//         <HtmlStyleButton onPressed={() => {}} content={"contact me"} />
//         {/* <Stats /> */}
//       </div>
//     </section>
//   );
// }

export default function Hero({ data }) {
  const {
    imgUrl,
    status,
    name,
    typingText,
    typingTextSecondary,
    description,
    btnText,
    btnUrl,
  } = data;
  return (
    <section
      className="home-section flex-col h-screen justify-center items-center flex"
      id="home"
      data-scroll-index={0}
    >
      <motion.div
        className="flex flex-row items-center mb-5 status"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "easeInOut",
        }}
      >
        <div className="blob"></div>
        <div className="status">
          <h6 className="ml-2">{status}</h6>
        </div>
      </motion.div>
      {/* <div> */}
      {/* Left hs-text-box */}

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="hs-text-box flex items-center justify-center "
      >
        <h2>
          {/* <h2 className="bracket">&lt;</h2> */}
          {/* <TypeAnimation
              item
              sequence={typingText}
              speed={1}
              repeat={Infinity}
              cursor={true}
            /> */}
          <span className="opacity-50">Hi,</span> I'm Safwan
        </h2>
      </div>

      {/* Right hs-text-box */}
      <div
        className="hs-text-box flex items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h2 className="opacity-50">A&nbsp;</h2>
        <h2>
          <TypeAnimation
            cursor={true}
            sequence={typingTextSecondary}
            speed={1}
            repeat={Infinity}
          />
        </h2>
        <h2>Developer</h2>
      </div>
      {/* </div> */}
      <motion.div
        className="container max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "easeInOut",
        }}
      >
        <h1 className="description">{description}</h1>

        <div className="container mt-5 ">
          <PrimaryButton
            dest={"https://www.google.com"}
            content={"See my resume"}
          />
          <SecondaryButton
            dest={"https://www.google.com"}
            content={"Get in touch"}
          />
        </div>
        <div className="opacity-10 coding-icon">
          <img
            src={`${process.env.PUBLIC_URL}/coding-icon.png`}
            alt="Coding Icon"
            className="mt-4" // Adjust the margin as needed
          />
        </div>
        {/* <Stats /> */}
      </motion.div>
    </section>
  );
}
