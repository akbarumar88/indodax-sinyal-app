import React, { Fragment, useState, useEffect } from "react"
import { toCurrency } from "../helper/basic_helper"
import Pagination from "../components/Pagination"
import Datepicker from "flowbite-datepicker/Datepicker"
import DateRangePicker from "flowbite-datepicker/DateRangePicker"
import FilterPeriode from "../components/FilterPeriode"
import FilterView from "../components/FilterView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import useWindowDimensions from "../helper/useWindowDimensions"
import axios from "axios"
// import { BASE_API } from "../GlobalVar"
// import dotenv from 'dotenv'
// dotenv.config()

const { REACT_APP_BASE_API: BASE_API } = process.env

export default function Home() {
  let [data, setData] = useState([])
  let [page, setPage] = useState(1)
  let [pageCount, setPageCount] = useState(1)
  let [dataCount, setDataCount] = useState(1)
  let [tglAwal, setTglAwal] = useState("")
  let [tglAkhir, setTglAkhir] = useState("")
  let [filterViewVisible, setFilterViewVisible] = useState(false)
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

  let [jenis, setJenis] = useState(null)
  let [level, setLevel] = useState(null)

  let perPage = 10
  let firstPage = page == 1
  let lastPage = page == pageCount
  let offset = (page - 1) * perPage
  let noFrom = offset + 1,
    noTo = offset + data.length

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      // console.log("keypress event", e)
      switch (e.code) {
        case "Escape":
          setFilterViewVisible(false)

          break

        case "KeyF":
          setFilterViewVisible(!false)
        default:
          break
      }
    })
    const data = {
      page,
      tglawal: tglAwal,
      tglakhir: tglAkhir,
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
    }
    // const params = new URLSearchParams(data)
    // console.log(params.toString())
    axios
      .get(`${BASE_API}/all`, {
        params: data,
      })
      .then(({ data: res }) => {
        // console.log("sukses", res)
        setData(res.data)
        setPageCount(res.pageCount)
        setDataCount(res.dataCount)
      })
      .catch((err) => {
        console.log("Err saat get data all", err.response?.data ?? err.message)
      })
  }, [
    page,
    tglAwal,
    tglAkhir,
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
  ])

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }
  return (
    <Fragment>
      {/* Component Modal */}
      <FilterView
        visible={filterViewVisible}
        onSubmit={({
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
        }) => {
          setHargaUSDTDari(hargaUSDTDari)
          setHargaUSDTSampai(hargaUSDTSampai)
          setHargaIDRDari(hargaIDRDari)
          setHargaIDRSampai(hargaIDRSampai)
          setVolUSDTDari(volUSDTDari)
          setVolUSDTSampai(volUSDTSampai)
          setVolIDRDari(volIDRDari)
          setVolIDRSampai(volIDRSampai)
          setLastBuyDari(lastBuyDari)
          setLastBuySampai(lastBuySampai)
          setLastSellDari(lastSellDari)
          setLastSellSampai(lastSellSampai)
          setJenis(jenis)
          setLevel(level)
          setPage(1) // Kembalikan Page ke Halaman Pertama
        }}
        onBtnClosePress={() => {
          setFilterViewVisible(false)
        }}
      />

      {/* Date range Picker */}
      <section
        className="relative pt-16 pb-0 bg-blueGray-50"
        id="dateRangePickerId"
      >
        <FilterPeriode
          onSubmit={(fromDate, toDate) => {
            // cari()
            setTglAwal(fromDate)
            setTglAkhir(toDate)
            setPage(1)
          }}
        />

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 dark:bg-purple-700 dark:hover:bg-purple-800 focus:outline-none dark:focus:ring-purple-900 mb-4"
          onClick={() => {
            setFilterViewVisible(true)
          }}
        >
          Filter (F)
          <FontAwesomeIcon className="ml-2" icon={faFilter} />
        </button>

        <div className="w-full mb-12 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-pink-900 text-white"
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                  <h3 className="font-semibold text-lg text-white">
                    Data Sinyal Indodax
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      #{" "}
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Sinyal
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Level
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Tanggal{" "}
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Harga (IDR)
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Harga (USDT)
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Volume (IDR)
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Volume (USDT)
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Last Buy
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Last Sell
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      {" "}
                      Jenis
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.map(
                    (
                      {
                        id,
                        sinyal,
                        level,
                        tanggal,
                        hargaidr,
                        hargausdt,
                        volidr,
                        volusdt,
                        lastbuy,
                        lastsell,
                        jenis,
                      },
                      i
                    ) => {
                      let warnaJenis
                      switch (jenis) {
                        case "crash":
                          warnaJenis = "bg-rose-500"
                          break

                        case "moon":
                          warnaJenis = "bg-green-500"
                          break

                        default:
                          break
                      }
                      let warnaBaris
                      if (sinyal >= 0 && sinyal <= 9) {
                        warnaBaris = "bg-emerald-700"
                      } else if (sinyal >= 10 && sinyal <= 19) {
                        warnaBaris = "bg-sky-700"
                      } else {
                        warnaBaris = "bg-fuchsia-700"
                      }
                      return (
                        <tr className={`${warnaBaris}`} key={i}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {id}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {sinyal}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {level}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {tanggal}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Rp. {toCurrency(hargaidr)}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            $ {toCurrency(hargausdt)}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                            {toCurrency(volidr, 10)}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                            {toCurrency(volusdt)}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                            {toCurrency(lastbuy)}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                            {toCurrency(lastsell)}
                          </td>
                          <td
                            className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right font-semibold ${warnaJenis}`}
                          >
                            {jenis?.toUpperCase()}
                          </td>
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center pb-12">
        <span className="text-sm text-white dark:text-white">
          Showing{" "}
          <span className="font-semibold text-white">{toCurrency(noFrom)}</span>{" "}
          to{" "}
          <span className="font-semibold text-white">{toCurrency(noTo)}</span>{" "}
          of{" "}
          <span className="font-semibold text-white">
            {toCurrency(dataCount)}
          </span>{" "}
          Entries
        </span>
        {/* <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button> */}

        {/* Component untuk Pagination */}
        <Pagination
          className="pagination-bar"
          currentPage={page}
          totalCount={dataCount}
          pageSize={perPage}
          onPageChange={(page) => setPage(page)}
        />

      </div>
    </Fragment>
  )
}
