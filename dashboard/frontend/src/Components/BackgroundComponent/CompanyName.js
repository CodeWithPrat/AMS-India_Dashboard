import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import "./Backgroud.css";

export default function CompanyName() {
  const ref = useRef([]);
  const [items, set] = useState([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      transform: "translateX(-100%)", // Initial position off-screen to the left
      color: "#8fa5b6",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0)", // Move into position
      color: "#28d79f",
    },
    leave: {
      opacity: 0,
      transform: "translateX(100%)", // Move off-screen to the right
      color: "#c23369",
    },
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    let i = 0;
    ref.current.forEach(clearTimeout);
    ref.current = [];
    const itemsSets = [
      ["Central", "manufacturing", "Technology", "Institute"],
      ["manufacturing", "Institute"],
      ["Central", "manufacturing", "Technology", "Institute"],
    ];

    const loop = () => {
      set(itemsSets[i]);
      i = (i + 1) % itemsSets.length;
      ref.current.push(setTimeout(loop, 2000));
    };

    loop();
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className="bg--container  ps-2">
      <div className="bg--main">
        {transitions((styles, item) => (
          <animated.div
            className="bg--transitionsItem"
            style={styles}
            onClick={reset}
          >
            {item}
          </animated.div>
        ))}
      </div>
      
    </div>
    
  );
}
