import {
  faFilter,
  faRupiahSign,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React from "react"

export default function FilterView(props) {
  return (
    //  Main modal
    <React.Fragment>
      <div
        id="bottom-right-modal"
        data-modal-placement="bottom-right"
        tabindex="-1"
        class={classNames(
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex",
          { hidden: !props.visible }
        )}
        aria-modal="true"
        role="dialog"
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                Filter Lanjutan
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="bottom-right-modal"
                onClick={props.onBtnClosePress}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="p-6 space-y-6">
              <form>
                <div class="grid gap-6 mb-6 lg:grid-cols-2">
                  {/* Rentang harga IDR */}
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Harga (IDR)
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                      />
                    </div>
                  </div>

                  {/* Rentang Harga USDT */}
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Harga (USDT)
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                      />
                    </div>
                  </div>

                  {/* Rentang Volume IDR */}
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Volume (IDR)
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                      />
                    </div>
                  </div>

                  {/* Rentang Volume USDT */}
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Volume (USDT)
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                      />
                    </div>
                  </div>

                  {/* Rentang Last Buy IDR */}
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Last Buy (IDR)
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                      />
                    </div>
                  </div>

                  {/* Rentang Last Sell */}
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Last Sell (IDR)
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="input-group-1"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="bottom-right-modal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="bottom-right-modal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
