export const handleScrollRight = (item) => {
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

export const handleScrollLeft = (item) => {
    const container = document.querySelector(`${item}`);
    const scrollDistance = 700;

    container.scrollLeft -= scrollDistance;

    if (container.scrollLeft <= 0) {
        container.scrollTo({
            left: container.scrollWidth - container.clientWidth,
            behavior: 'smooth',
        });
    }
};