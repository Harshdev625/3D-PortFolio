import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, name, description, image, platformLink }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[180px]">
          <img
            src={image}
            alt="achievement_image"
            className="object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {platformLink && (
              <div
                onClick={() => window.open(platformLink, "_blank")}
                className="bg-black bg-opacity-70 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <p className="text-white">🔗</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <ul className="mt-2 text-secondary text-[14px] list-disc list-inside">
            {description.map((item, idx) => (
              <li key={idx} className="ml-5">
                {" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Competitive Programming.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
