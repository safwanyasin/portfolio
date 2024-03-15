import React, { useEffect, useState } from "react";
import jsonp from "jsonp";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

// const Stats = () => {
//     const count = useMotionValue(0);
//     const rounded = useTransform(count, (latest) => Math.round(latest));

//     useEffect(() => {
//       const controls = animate(count, 100);

//       return controls.stop;
//     }, []);

//     return <motion.div>{rounded}</motion.div>;
//   };

//   export default Stats;

const Stats = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const countHours = useMotionValue(0);
  const countMinutes = useMotionValue(0);
  const roundedHours = useTransform(countHours, (latest) => Math.round(latest));
  const roundedMinutes = useTransform(countMinutes, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const apiUrl =
      "https://wakatime.com/share/@0a6c962d-0740-4317-aaeb-ba2c80c9c75a/8cebe500-9852-4890-a784-fe3c5aa4f9bc.json";
    jsonp(apiUrl, null, (err, data) => {
      if (err) {
        console.error("Error fetching data:", err);
      } else {
        // Calculate total time from all objects in the array
        const totalSeconds = data.data.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.grand_total.total_seconds,
          0
        );
        console.log(totalSeconds);
        // Update state with the total time
        setHours(Math.floor(totalSeconds / 3600));
        setMinutes(Math.floor((totalSeconds % 3600) / 60));
        // const controlHours = animate(countHours, hours);
        // const controlMinutes = animate(countMinutes, minutes);
      }
    });
  }, []);

  return (
    <motion.div>
      <p>Total Time: {roundedHours} hrs {roundedMinutes} mins</p>
      {/* Your other component content */}
    </motion.div>
  );
};

export default Stats;
