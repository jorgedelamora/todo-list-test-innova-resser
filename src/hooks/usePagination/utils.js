export const getNumberOfPages = (numberOfItems, itemsPerPage) => {
    const pages = Math.floor(numberOfItems / itemsPerPage);
    const itemsInIncompleteLastPage = numberOfItems % itemsPerPage;
    return {
        numberOfPages: itemsInIncompleteLastPage !== 0 ? pages + 1 : pages,
        itemsInIncompleteLastPage
    };
}