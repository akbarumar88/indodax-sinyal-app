import React from "react"
import classnames from "classnames"
import { usePagination, DOTS } from "../helper/usePagination"
// import "./pagination.scss"
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })
  // console.warn(paginationRange, {
  //   onPageChange,
  //   totalCount,
  //   siblingCount,
  //   currentPage,
  //   pageSize,
  //   className,
  // })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <nav aria-label="Page navigation example" className="mt-4">
      <ul className="inline-flex -space-x-px">
        {/* Left navigation arrow */}
        {/* <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li> */}

        {paginationRange.map((pageNumber, i) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                key={i}
                className="pagination-item dots dark:text-gray-100"
                style={{ marginLeft: 8, marginRight: 8 }}
              >
                &#8230;
              </li>
            )
          }

          // Render our Page Pills
          return (
            <React.Fragment key={i}>
              <li
                onClick={(_) => onPageChange(pageNumber)}
                style={{ display: "inherit" }}
              >
                <a
                  href="#!"
                  //   className=""
                  className={classnames(
                    {
                      "dark:bg-purple-700 dark:hover:bg-purple-800":
                        pageNumber == currentPage,
                      "dark:bg-gray-800 dark:hover:bg-gray-700":
                        pageNumber != currentPage,
                    },
                    "py-2 px-3 leading-tight text-slate-900 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-100 dark:hover:text-white font-medium",
                    {
                      "rounded-r-lg": pageNumber == lastPage,
                      "rounded-l-lg": pageNumber == 1,
                    }
                  )}
                >
                  {pageNumber}
                </a>
              </li>
              {/* <li
                className={classnames("pagination-item", {
                  selected: pageNumber === currentPage,
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li> */}
            </React.Fragment>
          )
        })}
        {/*  Right Navigation arrow */}
        {/* <li
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li> */}
      </ul>
    </nav>
  )
}

export default Pagination
