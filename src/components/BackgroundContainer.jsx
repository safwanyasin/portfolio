// BackgroundContainer.js
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1; /* Ensure the background is behind the content */
  width: 100vw;
  height: 100vh;
  /* Add your spline components or any other styling */
`;

export default BackgroundContainer;
