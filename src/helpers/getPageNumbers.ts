export const getPageNumbers = (currentPage: number, pageCount: number) => {
    const firstThree = [1, 2, 3];
    const lastThree = [pageCount - 2, pageCount - 1, pageCount];
    const pageNumbers = [];
    let startValue = 0;
    let endValue = 0;

    switch (true) {
        case firstThree.includes(currentPage):
            startValue = 1;
            endValue = pageCount >= 5 ? 5 : pageCount;
            break;
        case lastThree.includes(currentPage):
            startValue = pageCount - 4;
            endValue = pageCount;
            break;
        default:
            startValue = currentPage - 2;
            endValue = currentPage + 2;
    }

    for (let i = startValue; i <= endValue; i += 1) {
        pageNumbers.push(i);
    }

    return pageNumbers;
};
