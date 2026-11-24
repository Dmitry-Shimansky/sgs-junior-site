'use client'

import clsx from 'clsx'
import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import styles from './Slider.module.scss'

type SliderProps = {
  /** Accessible name of the carousel. */
  label: string
  prevLabel: string
  nextLabel: string
  /** Slides as `<li>` elements. */
  children: ReactNode
}

/** A scroll counts as settled when no scroll event arrived for this long. */
const SCROLL_SETTLE_MS = 150

/** Native scroll-snap carousel (swipeable); the arrows move one slide and wrap around at both ends. */
export const Slider = (props: SliderProps) => {
  const { label, prevLabel, nextLabel, children } = props
  const trackId = useId()
  const trackRef = useRef<HTMLUListElement>(null)
  // Index a running arrow animation is heading to, so quick clicks add up.
  const targetIndex = useRef<number | null>(null)
  const settleTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(settleTimer.current), [])

  const handleScroll = () => {
    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(() => {
      targetIndex.current = null
    }, SCROLL_SETTLE_MS)
  }

  const move = (direction: -1 | 1) => {
    const track = trackRef.current
    const [first, second] = Array.from(track?.children ?? []) as HTMLElement[]

    if (!track || !first || !second) {
      return
    }

    const step = second.offsetLeft - first.offsetLeft
    const positions = Math.round((track.scrollWidth - track.clientWidth) / step) + 1
    const current = targetIndex.current ?? Math.round(track.scrollLeft / step)
    const next = (current + direction + positions) % positions

    targetIndex.current = next
    track.scrollTo({ left: next * step })
  }

  return (
    <div className={styles.slider} role="group" aria-roledescription="Karussell" aria-label={label}>
      <ul ref={trackRef} id={trackId} role="list" className={styles.track} onScroll={handleScroll}>
        {children}
      </ul>
      <button
        type="button"
        className={clsx(styles.arrow, styles.prev)}
        aria-label={prevLabel}
        aria-controls={trackId}
        onClick={() => move(-1)}
      >
        <Icon iconId="arrow-left" />
      </button>
      <button
        type="button"
        className={clsx(styles.arrow, styles.next)}
        aria-label={nextLabel}
        aria-controls={trackId}
        onClick={() => move(1)}
      >
        <Icon iconId="arrow-right" />
      </button>
    </div>
  )
}
