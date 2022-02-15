import { useEffect } from 'react'

export function useGetWidth(setWindowWidth) {
    useEffect(() => {
        const innerWidth = () => {
          const newWindowWidth = window.innerWidth
          setWindowWidth(newWindowWidth)
        }
        window.addEventListener('resize', innerWidth)
      }, [])
} 