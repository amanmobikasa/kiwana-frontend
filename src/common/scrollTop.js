// create a scroll top global finc

const scrollTop = (top = 0, behavior = "smooth") => {
    window.scrollTo({ top: top, behavior: behavior });
}

export default scrollTop;