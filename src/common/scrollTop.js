// custom fucntion which will be used to scroll to top of the page
export const scrollTop = (top = 0, behavior = "smooth") => {
    window.scrollTo({
        top: top,
        behavior: behavior,
    });
}