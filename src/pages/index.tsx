// @ts-nocheck

import { useEffect, useRef } from 'react';
import CustomCursor from '@/components/feature/common/CustomCursor';
import styles from "./styles.module.css"

import Slider from "@/helpers/Slider"
import AvatarSlider from '@/components/feature/pages/home/AvatarSlider';
import Cards from '@/components/feature/pages/home/Cards';
import GalaxyOfStars from '@/components/feature/pages/home/GalaxyOfStars';
import NFTWithRealUtility from '@/components/feature/pages/home/NFTWithRealUtility';
import Form from '@/components/feature/pages/home/Form';
import Footer from '@/components/feature/pages/home/Footer';
import SwipeDetector from "@/helpers/swipeDetector/SwipeDetector";
import Constructor from "@/components/feature/pages/home/Constructor";
import Chart from "@/helpers/swipeDetector/dev/Chart"

export default function Home() {

  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const swipeDetectorRef = useRef(null);

  useEffect(() => {
    if (!sliderContainerRef.current) return;

    sliderRef.current = new Slider({
      slidesContainer: sliderContainerRef.current
    })

    const canvas = document.getElementById("canvas");
    const chart = new Chart({
      canvas: canvas,
      colors: ["#FF000019", "#00FF0080", "#0000FF", "#FFFF00", "#FF00FF"]
    });

    swipeDetectorRef.current = new SwipeDetector({
      draw: chart.draw.bind(chart),
      element: window,
      upCallback: sliderRef.current.slideNext.bind(sliderRef.current),
      downCallback: sliderRef.current.slidePrev.bind(sliderRef.current),
    })

    return () => {
      swipeDetectorRef.current.destroy();
    };
  }, [sliderContainerRef]);

  function scrollHandler(e) {
    if (e.target.scrollTop > 0) {
      swipeDetectorRef.current.setCanSwipe(false)
    } else {
      swipeDetectorRef.current.setCanSwipe(true);
    }
  }

  return (
    <>

      <canvas id="canvas" style={{position:'fixed', top:0, left:0}}></canvas>
      <div ref={sliderContainerRef} className={styles.slider}>

        <AvatarSlider text="#1 Slider" />

        <Cards text="#2 Cards" />

        <GalaxyOfStars text="#3 GalaxyOfStars" />

        <Constructor text="#4 Constructor" />

        <div className={styles.scrollable} onScroll={scrollHandler}>
          <NFTWithRealUtility text="#5 NFTWithRealUtility" />
          <Form text="#6 Form" />
          <Footer text="#7 Footer" />
        </div>

      </div>

      <CustomCursor />
    </>
  )
}
