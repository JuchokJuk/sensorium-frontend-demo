import React, { createContext, useEffect, useState } from 'react'

export const SmoothScrollContext = createContext({
  scroll: null,
})

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null)

  useEffect(() => {
    console.log("useEffect SmoothScrollProvider scroll:", scroll)
    if (!scroll) {
      ;(async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          console.log("SCROLL INIT")
          setScroll(
            new LocomotiveScroll({
              el: document.querySelector('[data-scroll-container]') ?? undefined,
              ...options,
            })
          )
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
