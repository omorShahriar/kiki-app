"use client";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  blockFadeInRight,
  blockFadeInTop,
  blockFadeInLeft,
  blockFadeIn,
  gridVariants,
  gridElementVariants,
} from "@/animation/variants";

export const FadeInWrapper = ({ children }) => {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ ref, inView }) => {
        return (
          <>
            <motion.div
              ref={ref}
              variants={blockFadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className=""
            >
              {children}
            </motion.div>
          </>
        );
      }}
    </InView>
  );
};
export const GridFadeInWrapper = ({ children }) => {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ ref, inView }) => {
        return (
          <>
            <motion.div
              ref={ref}
              variants={gridVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-12 md:gap-16 gap-8"
            >
              {children}
            </motion.div>
          </>
        );
      }}
    </InView>
  );
};
export const GridElementWrapper = ({ children }) => {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ ref, inView }) => {
        return (
          <>
            <motion.div
              ref={ref}
              variants={gridElementVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="col-span-12 md:col-span-3"
            >
              {children}
            </motion.div>
          </>
        );
      }}
    </InView>
  );
};
export const FadeInRightWrapper = ({ children }) => {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ ref, inView }) => {
        return (
          <>
            <motion.div
              ref={ref}
              variants={blockFadeInRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className=""
            >
              {children}
            </motion.div>
          </>
        );
      }}
    </InView>
  );
};
export const FadeInTopWrapper = ({ children }) => {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ ref, inView }) => {
        return (
          <>
            <motion.div
              ref={ref}
              variants={blockFadeInTop}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className=""
            >
              {children}
            </motion.div>
          </>
        );
      }}
    </InView>
  );
};
export const FadeInLeftWrapper = ({ children }) => {
  return (
    <InView threshold={0.5} triggerOnce>
      {({ ref, inView }) => {
        return (
          <>
            <motion.div
              ref={ref}
              variants={blockFadeInLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className=""
            >
              {children}
            </motion.div>
          </>
        );
      }}
    </InView>
  );
};
