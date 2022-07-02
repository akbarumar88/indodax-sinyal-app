import React, { Fragment } from "react"
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

  const totalPageCount = Math.ceil(totalCount / pageSize)
  let onFirstPage = currentPage == 1
  let onLastPage = currentPage == totalPageCount
  return (
    <Fragment>
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

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={onFirstPage}
          onClick={onPrevious}
          className={`inline-flex items-center py-2 px-4 text-sm font-medium text-white  rounded-l bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 ${
            onFirstPage
              ? "cursor-not-allowed bg-slate-400 text-dark"
              : "hover:bg-purple-800 bg-purple-700 text-white"
          }`}
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Prev
        </button>
        <button
          disabled={onLastPage}
          onClick={onNext}
          className={`inline-flex items-center py-2 px-4 text-sm font-medium text-white  rounded-r bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 ${
            onLastPage
              ? "cursor-not-allowed bg-slate-400 text-dark"
              : "hover:bg-purple-800 bg-purple-700 text-white"
          }`}
        >
          Next
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Tombol Goto First Page & Go to Last Page */}
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => {
            onPageChange(1)
          }}
          disabled={onFirstPage}
          className={`inline-flex items-center py-2 px-4 text-sm font-medium   rounded-l  focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 ${
            onFirstPage
              ? "cursor-not-allowed bg-slate-400 text-dark"
              : "hover:bg-purple-800 bg-purple-700 text-white"
          }`}
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Go to First Page
        </button>

        <button
          disabled={onLastPage}
          onClick={() => {
            onPageChange(totalPageCount)
          }}
          className={`inline-flex items-center py-2 px-4 text-sm font-medium text-white  rounded-r bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 ${
            onLastPage
              ? "cursor-not-allowed bg-slate-400 text-dark"
              : "hover:bg-purple-800 bg-purple-700 text-white"
          }`}
        >
          Go to Last Page
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </Fragment>
  )
}

export default Pagination
