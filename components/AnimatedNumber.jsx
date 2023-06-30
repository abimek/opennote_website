'use client'

import {React, useState} from 'react'
import {useSpring, animated} from "react-spring";
import {Waypoint} from "react-waypoint";

const AnimatedNumber = ({n, text}) => {
  const [inView, setInview] = useState(false);

  const {number} = useSpring(
    {
      from: {number: 0},
      number: inView ? n : 0,
      delay: 200,
      config: {mass: 1, tension: 20, friction: 10}
    }
  )

  return (
    <Waypoint onEnter={() => setInview(true)}>
      <div className="p-2 px-4 flex flex-col text-center border rounded-2xl drop-shadow-3xl border-green-700 shadow-green-70/50 inline-flex focus:ring-[#050708]/50">
        <p className="sm:text-6xl head_text_2">
          <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
        </p>
        <p className="text-center mt-7 font-satoshi text-xl text-gray-600 sm:text-xl max-w-3xl">
          {text}
        </p>
      </div>
    </Waypoint>
  )
}

export default AnimatedNumber;
