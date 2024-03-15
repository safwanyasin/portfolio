// import Spline from "@splinetool/react-spline";

export default function Blob() {
  const iconPath = process.env.PUBLIC_URL;
  return (
    // <Spline scene="https://prod.spline.design/RsMm1AAJ6ciDvlkw/scene.splinecode" />
    <img src={iconPath + "/blob.png"} alt="" />
  );
}
