import {
  faFilter,
  faRupiahSign,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React, { useState } from "react"

export default function FilterView(props) {
  let [hargaUSDTDari, setHargaUSDTDari] = useState(null)
  let [hargaUSDTSampai, setHargaUSDTSampai] = useState(null)
  let [hargaIDRDari, setHargaIDRDari] = useState(null)
  let [hargaIDRSampai, setHargaIDRSampai] = useState(null)

  let [volUSDTDari, setVolUSDTDari] = useState(null)
  let [volUSDTSampai, setVolUSDTSampai] = useState(null)
  let [volIDRDari, setVolIDRDari] = useState(null)
  let [volIDRSampai, setVolIDRSampai] = useState(null)

  let [lastBuyDari, setLastBuyDari] = useState(null)
  let [lastBuySampai, setLastBuySampai] = useState(null)
  let [lastSellDari, setLastSellDari] = useState(null)
  let [lastSellSampai, setLastSellSampai] = useState(null)

  let [level, setLevel] = useState(null)
  let [jenis, setJenis] = useState(null)

  return (
    //  Main modal
    <React.Fragment>
      <div
        id="bottom-right-modal"
        data-modal-placement="bottom-right"
        tabIndex={-1}
        className={classNames(
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex",
          { hidden: !props.visible }
        )}
        aria-modal="true"
        role="dialog"
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <div className="relative p-4 w-full max-w-2xl h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Filter Lanjutan
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="bottom-right-modal"
                onClick={props.onBtnClosePress}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className="p-6 space-y-6 modal-body"
              style={{
                maxHeight: "calc(100vh - 210px)",
                overflowY: "auto",
              }}
            >
              <form>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                  {/* Jenis */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Jenis
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <select
                        type="number"
                        min={0}
                        id="website-admin"
                        className=" p-4 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                          // console.log(e.target.value)
                          let val = e.target.value
                          setJenis(val)
                        }}
                      >
                        <option value="">Semua</option>
                        <option value="crash">crash</option>
                        <option value="moon">moon</option>
                      </select>
                    </div>
                  </div>

                  {/* Level */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Level
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <select
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                          let val = e.target.value
                          setLevel(val)
                        }}
                      >
                        <option value="">Semua</option>
                        <option value={"Crash1"}>Crash1</option>
                        <option value={"Wajar2"}>Wajar2</option>
                        <option value={"Recover1"}>Recover1</option>
                        <option value={"Recover2"}>Recover2</option>
                        <option value={"Moon1"}>Moon1</option>
                        <option value={"Wajar1"}>Wajar1</option>
                        <option value={"Moon2"}>Moon2</option>
                        <option value={"SuperMoon1"}>SuperMoon1</option>
                        <option value={"sama"}>sama</option>
                        <option value={"Crash2"}>Crash2</option>
                        <option value={"SuperCrash1"}>SuperCrash1</option>
                        <option value={"SuperCrash2"}>SuperCrash2</option>
                        <option value={"MegaCrash1"}>MegaCrash1</option>
                        <option value={"MegaCrash2"}>MegaCrash2</option>
                        <option value={"UltraCrash1"}>UltraCrash1</option>
                        <option value={"UltraCrash2"}>UltraCrash2</option>
                        <option value={"GoldenCrash1"}>GoldenCrash1</option>
                        <option value={"GoldenCrash2"}>GoldenCrash2</option>
                        <option value={"DiamondCrash"}>DiamondCrash</option>
                        <option value={"SuperMoon2"}>SuperMoon2</option>
                        <option value={"MegaMoon1"}>MegaMoon1</option>
                        <option value={"MegaMoon2"}>MegaMoon2</option>
                        <option value={"UltraMoon1"}>UltraMoon1</option>
                        <option value={"UltraMoon2"}>UltraMoon2</option>
                      </select>
                    </div>
                  </div>

                  {/* Rentang harga IDR */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Harga (IDR)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                        onChange={(e) => {
                          let val = e.target.value
                          setHargaIDRDari(val)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                        onChange={(e) => {
                          let val = e.target.value
                          setHargaIDRSampai(val)
                        }}
                      />
                    </div>
                  </div>

                  {/* Rentang Harga USDT */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Harga (USDT)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                        onChange={(e) => {
                          let val = e.target.value
                          setHargaUSDTDari(val)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                        onChange={(e) => {
                          let val = e.target.value
                          setHargaIDRSampai(val)
                        }}
                      />
                    </div>
                  </div>

                  {/* Rentang Volume IDR */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Volume (IDR)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                        onChange={(e) => {
                          let val = e.target.value
                          setVolIDRDari(val)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                        onChange={(e) => {
                          let val = e.target.value
                          setVolIDRSampai(val)
                        }}
                      />
                    </div>
                  </div>

                  {/* Rentang Volume USDT */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Volume (USDT)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                        onChange={(e) => {
                          let val = e.target.value
                          setVolUSDTDari(val)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                        onChange={(e) => {
                          let val = e.target.value
                          setVolIDRSampai(val)
                        }}
                      />
                    </div>
                  </div>

                  {/* Rentang Last Buy IDR */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Last Buy (IDR)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                        onChange={(e) => {
                          let val = e.target.value
                          setLastBuyDari(val)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Rp
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                        onChange={(e) => {
                          let val = e.target.value
                          setLastBuySampai(val)
                        }}
                      />
                    </div>
                  </div>

                  {/* Rentang Last Sell */}
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Rentang Last Sell (IDR)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Dari"
                        onChange={(e) => {
                          let val = e.target.value
                          setLastSellDari(val)
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {"."}
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        T
                      </span>
                      <input
                        type="number"
                        min={0}
                        id="website-admin"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sampai"
                        onChange={(e) => {
                          let val = e.target.value
                          setLastSellSampai(val)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="bottom-right-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  // console.log({
                  //   hargaUSDTDari,
                  //   hargaUSDTSampai,
                  //   hargaIDRDari,
                  //   hargaIDRSampai,
                  //   volUSDTDari,
                  //   volUSDTSampai,
                  //   volIDRDari,
                  //   volIDRSampai,
                  //   lastBuyDari,
                  //   lastBuySampai,
                  //   lastSellDari,
                  //   lastSellSampai,
                  // })
                  props.onSubmit?.({
                    hargaUSDTDari,
                    hargaUSDTSampai,
                    hargaIDRDari,
                    hargaIDRSampai,
                    volUSDTDari,
                    volUSDTSampai,
                    volIDRDari,
                    volIDRSampai,
                    lastBuyDari,
                    lastBuySampai,
                    lastSellDari,
                    lastSellSampai,
                    jenis,
                    level,
                  })
                  props.onBtnClosePress()
                }}
              >
                Simpan
              </button>
              <button
                data-modal-toggle="bottom-right-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={props.onBtnClosePress}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
