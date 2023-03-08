// @ts-nocheck

import "locomotive-scroll/dist/locomotive-scroll.css"
import { SmoothScrollContext } from '@/contexts/SmoothScroll.context';
import { useContext, useEffect, useRef, useState } from 'react';
import CustomCursor from '@/components/feature/common/CustomCursor';

import Slider from '@/components/feature/pages/home/Slider';
import Cards from '@/components/feature/pages/home/Cards';
import GalaxyOfStars from '@/components/feature/pages/home/GalaxyOfStars';
import NFTWithRealUtility from '@/components/feature/pages/home/NFTWithRealUtility';
import Form from '@/components/feature/pages/home/Form';
import Footer from '@/components/feature/pages/home/Footer';
import SwipeDetector from "@/helpers/swipeDetector/SwipeDetector";
import Constructor from "@/components/feature/pages/home/Constructor";

export default function Home() {

  const swipeDetectorRef = useRef(null);

  const sliderRef = useRef(null);
  const cardsRef = useRef(null);
  const constructorRef = useRef(null);
  const galaxyOfStarsRef = useRef(null);
  const NFTWithRealUtilityRef = useRef(null);

  const fullPageBlocks = [
    sliderRef.current,
    cardsRef.current,
    galaxyOfStarsRef.current,
    constructorRef.current,
    NFTWithRealUtilityRef.current
  ]

  const scrollContext = useContext(SmoothScrollContext);

  const [currentBlockIndex, _setCurrentBlockIndex] = useState(0);
  const currentBlockIndexRef = useRef(currentBlockIndex);
  const setCurrentBlockIndex = (currentBlockIndex: number) => {
    currentBlockIndexRef.current = currentBlockIndex;
    _setCurrentBlockIndex(currentBlockIndex);
  }; // 😋 delicious

  function enableScroll() {
    scrollContext.scroll?.start()
    document.querySelector('.c-scrollbar')?.classList.remove("c-scrollbar_hidden");
    swipeDetectorRef.current.setCanSwipe(false);
  }

  function disableScroll() {
    scrollContext.scroll?.stop()
    document.querySelector('.c-scrollbar')?.classList.add("c-scrollbar_hidden");
    swipeDetectorRef.current.setCanSwipe(true);
  }

  const [needEnable, _setNeedEnable] = useState(false);
  const needEnableRef = useRef(needEnable);
  const setNeedEnable= (needEnable: number) => {
    needEnableRef.current = needEnable;
    _setNeedEnable(needEnable);
  }; // 😋 delicious

  function scrollToNext() {
    console.log("scrollToNext")
    if (currentBlockIndexRef.current < fullPageBlocks.length - 1) {
      scrollContext.scroll?.scrollTo(fullPageBlocks[currentBlockIndexRef.current + 1]);
      setCurrentBlockIndex(currentBlockIndexRef.current + 1);
    }
    if (currentBlockIndexRef.current > fullPageBlocks.length - 2) {
      setNeedEnable(true)
    }
  }

  function scrollToPrev() {
    console.log("scrollToPrev")
    if (currentBlockIndexRef.current > 0) {
      scrollContext.scroll?.scrollTo(fullPageBlocks[currentBlockIndexRef.current - 1]);
      setCurrentBlockIndex(currentBlockIndexRef.current - 1);
    }
  }

  useEffect(() => {
    if (!scrollContext.scroll) return;
    scrollContext.scroll.on('scroll', ({ limit, scroll }) => {
      if(scrollContext.scroll.scroll.animatingScroll === false && needEnableRef.current){
        console.log('enabled')
        enableScroll();
        setNeedEnable(false)
      }
    })
  }, [scrollContext])

  useEffect(() => {
    if (!scrollContext.scroll) return;

    swipeDetectorRef.current = new SwipeDetector({
      element: window,
      upCallback: scrollToNext,
      downCallback: scrollToPrev,
    })

    return () => {
      swipeDetectorRef.current.destroy();
    };
  }, [scrollContext]);

  return (
    <>
      <div data-scroll-container>
        <div data-scroll-section ref={sliderRef}>
          <Slider text="#1 Slider" />
        </div>
        <div data-scroll-section ref={cardsRef}>
          <Cards text="#2 Cards" />
        </div>
        <div data-scroll-section ref={galaxyOfStarsRef}>
          <GalaxyOfStars text="#3 GalaxyOfStars" />
        </div>
        <div data-scroll-section ref={constructorRef}>
          <Constructor text="#4 Constructor" />
        </div>
        <div data-scroll-section ref={NFTWithRealUtilityRef}>
          <NFTWithRealUtility text="#5 NFTWithRealUtility" />
        </div>
        <div data-scroll-section>
          <Form text="#6 Form" />
        </div>
        <div data-scroll-section>
          <Footer text="#7 Footer" />
        </div>
      </div>

      <CustomCursor />
    </>
  )
}
