import React, { createContext, useEffect, useState } from 'react'

export const SmoothScrollContext = createContext({
  scroll: null,
})

export const SmoothScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    if (!scroll) {
      ; (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]') ?? undefined,
            smooth: true,
            smoothMobile: true
          })
          // scroll.stop();
          // document.querySelector('.c-scrollbar')?.classList.add("c-scrollbar_hidden");

          setScroll(scroll)

        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
