import { useEffect, useRef, useState } from 'react';
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
import Head from 'next/head';
import Header from '@/components/feature/common/Header';

export default function Home() {

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<Slider | null>(null);
  const swipeDetectorRef = useRef<SwipeDetector | null>(null);

  useEffect(() => {
    if (!sliderContainerRef.current) return;

    sliderRef.current = new Slider({
      slidesContainer: sliderContainerRef.current,
      onTransitionEnd: transitionEndHandler,
      onSlideChange: slideChangeHandler,
    })

    swipeDetectorRef.current = new SwipeDetector({
      // @ts-ignore
      element: window,
      upCallback: sliderRef.current.slideNext.bind(sliderRef.current),
      downCallback: sliderRef.current.slidePrev.bind(sliderRef.current),
    })

    return () => {
      if (swipeDetectorRef.current) {
        swipeDetectorRef.current.destroy();
      }
      if (sliderRef.current) {
        sliderRef.current.destroy();
      }
    };
  }, [sliderContainerRef]);


  function transitionEndHandler() {
    if (!sliderRef.current || !sliderContainerRef.current) return;

    if (sliderRef.current.currentSlideIndex === 4) {
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        (sliderContainerRef.current.lastElementChild as HTMLElement).style.overflowY = 'scroll';
      } else {
        (sliderContainerRef.current.lastElementChild as HTMLElement).style.overflowY = 'overlay';
      }
    }
  }

  function slideChangeHandler(from: number, to: number) {
    if (!swipeDetectorRef.current || !sliderContainerRef.current) return;

    setCurrentSlideIndex(to);
    if (from === 4 && to === 3) {
      swipeDetectorRef.current.setCanSwipe(true);
      sliderContainerRef.current.lastElementChild?.scrollTo(0, 0);
      (sliderContainerRef.current.lastElementChild as HTMLElement).style.overflowY = 'hidden';
    }
  }

  function scrollHandler(event: any) {
    if (!swipeDetectorRef.current) return;
    if (event.target.scrollTop === 0) {
      swipeDetectorRef.current.setCanSwipe(true);
    } else {
      swipeDetectorRef.current.setCanSwipe(false);
    }
  }

  return (
    <>
      <Head>
        <title>sensorium demo</title>
      </Head>
      
      <Header />

      <div ref={sliderContainerRef} className={styles.slider}>

        <AvatarSlider currentSlideIndex={currentSlideIndex} />

        <Cards/>

        <GalaxyOfStars currentSlideIndex={currentSlideIndex} />

        <Constructor currentSlideIndex={currentSlideIndex}/>

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
