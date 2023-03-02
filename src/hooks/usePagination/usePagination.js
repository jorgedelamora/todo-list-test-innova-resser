import {useState, useEffect} from "react";
import { getNumberOfPages } from "./utils";

const usePagination = (items, itemsPerPage ) => {
 const [paginatedItems, setPaginatedItems] = useState(null);
 const {numberOfPages, itemsInIncompleteLastPage} = getNumberOfPages(items.length, itemsPerPage);
 
 useEffect(() => {
     let idxFirstItemOnPage = 0;
     
     const pages = Array.from({length: numberOfPages}, (_, page) => {
         const isNotFullLastPage = page === numberOfPages - 1 && itemsInIncompleteLastPage;
         if(isNotFullLastPage){
            const currentPage = items.slice(items.length - itemsInIncompleteLastPage, items.length);
             return currentPage;
         }
         const idxLastItemOnPage = idxFirstItemOnPage + itemsPerPage;
         const currentPage = items.slice(idxFirstItemOnPage, idxLastItemOnPage);
         idxFirstItemOnPage = idxLastItemOnPage;
        return currentPage;
     });

     setPaginatedItems(pages);
 },[items])

 return {paginatedItems}
}

export default usePagination;