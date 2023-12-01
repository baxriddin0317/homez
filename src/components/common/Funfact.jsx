"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export const Funfact = () => {
  const funFacts = [
    { number: 80, text: "Completed Property" },
    { number: 99, text: "Satisfied Customers" },
    { number: 50, text: "Home ownership" },
  ];

  return (
    <>
      {funFacts.map((fact, index) => (
        <div className="" key={index}>
          <ul className="flex items-center text-brand-black-100 text-[42px] leading-[63px] font-semibold">
            <li>
              <div className="timer">
                <CounterWithAnimation end={fact.number} />
              </div>
            </li>
            <li>
              <span>%</span>
            </li>
          </ul>
          <p className="text-sm leading-6">{fact.text}</p>
        </div>
      ))}
    </>
  );
};

const CounterWithAnimation = ({ end }) => {
  const countRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);

    const currentRef = countRef.current; // Create a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <span ref={countRef}>
      {inView ? <CountUp end={end} duration={2} separator="," /> : "0"}
    </span>
  );
};
