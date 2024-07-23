import { useEffect } from 'react'

/**
 *
 * @param  ref - Ref of your parent div
 * @param callback fuction to be called when clicked outside
 */
const useOutsideClick = (ref: any, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (evt: Event) => {
      if (ref.current && !ref.current.contains(evt.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

export default useOutsideClick
