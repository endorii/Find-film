export const handleScroll = (item) => {
    const container = document.querySelector(`${item}`);
    const scrollDistance = 700;
  
    container.scrollLeft += scrollDistance;
  
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
};