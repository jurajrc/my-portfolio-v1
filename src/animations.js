export const pageAnimation = {
    hidden: { 
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
        }
    }
}

export const titleAnim = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: { 
            duration: 0.75,
            ease: "easeOut",
        },
    },
}



export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

export const fadeIn = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    },
    show: {
        opacity: 1,
        then: "beforeChildren",
        staggerChildren: 0.5,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            then: "afterChildren",
        }
    }
}

export const moveTextRight = {
    hidden: {
        opacity: 0,
        x: "50vw",
    },
    show: {
        opacity: 1,
        x: "0%",
        transition: {
            delay: 0.2,
            type: 'spring',
            stiffness: 200
        }
    },
    exit: {
        opacity: 0,
        y: "-50vw",
        transition: {
            duration: 1,
        } 
    }
}

export const fadeIn2 = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            then: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            then: "afterChildren",
        }
    }
}

export const moveTextRight2 = {
    hidden: {
        opacity: 0,
        x: "50vw",
    },
    show: {
        opacity: 1,
        x: "0%",
        transition: {
            type: "spring",
            mass: 0.5
        }
    },
    exit: {
        opacity: 0,
        x: "-50vw",
        transition: {
            duration: 0.5,
        } 
    }
}

