export const sectionVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5,
        },
    },
};
export const titleVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,

        transition: {
            delay: 0.4, // tambahkan delay sebelum animasi berakhir
            duration: 2,
            type: "spring",
            stiffness: 100,
        },
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 120,
        },
    },
};


export const subtitleVariants = {
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 0.5,
        },

    },
};

export const manImageVariants = {
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 0.5,
        },
    },
};

export const womanImageVariants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 0.5,
        },
    },
};

export const galleryVariants = {
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,

        transition: {
            delay: 0.1, // tambahkan delay sebelum animasi berakhir
            duration: 1,

        },
    },
    exit: {
        opacity: 1,
        y: 50,

        transition: {
            delay: 1,
            duration: 1,

        },
    },

}