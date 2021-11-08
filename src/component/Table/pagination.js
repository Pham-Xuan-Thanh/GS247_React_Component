import React, { useState, useEffect } from 'react';

import PropTypes from "prop-types";
import { cls } from '../../utils/helpers';
// static right-85.46 top-1/10 bottom-1/10
const classes = {
  pagination: "flex flex-row items-center p-0 relative h-10 w-full ",
  prevButton: "flex flex-row items-center left-0 rounded-lg flex-none order-none flex-grow-0 px-3 py-2  mx-6",
  nextButton: "flex flex-row items-center  left-0 rounded-lg flex-none order-2 flex-grow-0 px-3 py-2  mx-6",
  buttonText: {
    base: "not-italic  flex items-center  font-inter leading-160 mx-2.5    order-none flex-none ",
    prev: " font-medium flex-grow-0 text-919DAF",
    next: "font-medium flex-grow text-center text-919DAF ",
    page: " text-center font-semibold text-xs text-E8E9EA flex-grow ",
    active: " text-center font-semibold text-xs text-white flex-grow ",
  },
  pageList: "flex flex-row items-center p-0 static top-0 bottom-0 flex-none order-1 flex-grow-0 mx-6",
  button: {// order with index of array
    normal: "flex flex-row justify-center items-center p-2 static w-8 h-8 box-border rounded-md flex-none flex-grow-0  rounded-md border-344356 border-2 mx-3",
    active: "flex flex-row justify-center items-center p-2 static w-8 h-8 bg-E77941 rounded-md flex-none  flex-grow-0 mx-3",
  }
}

const defaultButton = (props) => <button {...props}>{props.children}</button>;

function Pagination(props) {


  const filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter((page) => isNaN(page) ||  page <= totalPages );
  };

  const getVisiblePages = (page, total) => {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 3 < total) {
        return [1,"..." ,page - 2, page - 1, page, page + 1, page + 2, " ...",total];
      } else if (page % 5 >= 0 && page > 4 && page + 3 >= total) {
        return [1,"...", total - 4, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, "..." ,total];
      }
    }
  };

  const [listPages, setListPages] = useState(getVisiblePages(null, props.pages));
  useEffect(() => {

    setListPages(getVisiblePages(null, props.pages));
    changePage(props.page + 1);
  }, [props.pages])



  const changePage = (page) => {
    const activePage = props.page + 1;
    if (page === activePage) {
      return;
    }

    const visiblePages = getVisiblePages(page, props.pages);

    setListPages(
      filterPages(visiblePages, props.pages)
    );

    props.onPageChange(page - 1);
  }




  const { PageButtonComponent = defaultButton } = props;
  const visiblePages = listPages;
  const activePage = props.page + 1;
  // <PageButtonComponent disabled={true} className={cls(`${classes.button.normal} ${index === 1 ? "order-none" : `order-${index-1}`} `)}>...</PageButtonComponent>

  return (
    <div className={classes.pagination}>

      <PageButtonComponent
        className={classes.prevButton}
        onClick={() => {
          if (activePage === 1) return;
          changePage(activePage - 1);
        }}
        disabled={activePage === 1}
      >
        <p className={cls(`${classes.buttonText.base} ${classes.buttonText.prev}`)}>{props.previousText}</p>
      </PageButtonComponent>

      <div className={classes.pageList}>
        {visiblePages.map((page, index, array) => {
          let class4Button;
          if (isNaN(page)) {
            class4Button = `  ${classes.button.normal} border-0 border-transparent cursor-default  order-${index} `
          }
          else {
            class4Button = activePage === page
            ? `${classes.button.active} ${index === 0 ? "order-none" : `order-${index}`}`
            : `${classes.button.normal} ${index === 0 ? "order-none" : `order-${index}`}`
          }
          return (
            
            <PageButtonComponent
              key={page}
              className={class4Button}
              value={page}
              disabled={isNaN(page)}
              onClick={changePage.bind(null, page)}
            >
              <p className={cls(`${classes.buttonText.base} ${classes.buttonText.page}  `)}>{page}</p>
            </PageButtonComponent>

          );
        })}
      </div>

      <PageButtonComponent
        className={classes.nextButton}
        onClick={() => {
          if (activePage === props.pages) return;
          changePage(activePage + 1);
        }}
        disabled={activePage === props.pages}
      >
        <p className={cls(`${classes.buttonText.base} ${classes.buttonText.next}`)}>{props.nextText}</p>
      </PageButtonComponent>

    </div>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  PageButtonComponent: PropTypes.any,
  onPageChange: PropTypes.func,
  previousText: PropTypes.string,
  nextText: PropTypes.string
};
export default Pagination;