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
import SwipeDetector from "@/helpers/swipeDetector/swipeDetector";

export default function Home() {

  const scrollContext = useContext(SmoothScrollContext);

  const [stopped, setStopped] = useState(true);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  
  const [progress, _setProgress] = useState(0);
  const progressRef = useRef(progress);
  const setProgress = (progress: number) => {
    progressRef.current = progress;
    _setProgress(progress);
  }; // 😋 delicious

  useEffect(() => {
    scrollContext.scroll?.on('scroll', ({ limit, scroll }) => {
      setProgress(scroll.y)
    })
  }, [scrollContext.scroll]);

  function enableScroll() {
    scrollContext.scroll?.start()
    document.querySelector('.c-scrollbar')?.classList.remove("c-scrollbar_hidden");
    setStopped(false)
  }
  function disableScroll() {
    scrollContext.scroll?.stop()
    document.querySelector('.c-scrollbar')?.classList.add("c-scrollbar_hidden");
    setStopped(true)
  }

  function scrollToNext() {
    console.log("next")
    scrollContext.scroll?.scrollTo(progressRef.current + window.innerHeight);
    setCurrentBlockIndex(currentBlockIndex + 1);
  }
  function scrollToPrev() {
    console.log("prev")
    scrollContext.scroll?.scrollTo(progressRef.current - window.innerHeight);
    setCurrentBlockIndex(currentBlockIndex - 1);
  }

  useEffect(() => {
    if(!scrollContext.scroll) return;

    const swipeDetector = new SwipeDetector(
      scrollToNext,
      scrollToPrev
    );

    return () => {
      swipeDetector.destroy();
    };
  }, [scrollContext.scroll]);

  return (
    <>
      <div data-scroll-container>
        <div data-scroll-section>
          <Slider text="#1 Slider" />
        </div>
        <div data-scroll-section>
          <Cards text="#2 Cards" />
        </div>
        <div data-scroll-section>
          <GalaxyOfStars text="#3 GalaxyOfStars" />
        </div>
        <div data-scroll-section>
          <NFTWithRealUtility text="#4 NFTWithRealUtility" />
        </div>
        <div data-scroll-section>
          <Form text="#5 Form" />
        </div>
        <div data-scroll-section>
          <Footer text="#6 Footer" />
        </div>
      </div>

      <CustomCursor />
    </>
  )
}
