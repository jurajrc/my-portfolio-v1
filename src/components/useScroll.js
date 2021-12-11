import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const UseScroll = (percentage=.5) => {
    const controls = useAnimation()
    const [element, view] = useInView({threshold: percentage})
    if (view) {
        controls.start("show")
    } else {
        controls.start("hidden")
    }

    return[element, controls]
}