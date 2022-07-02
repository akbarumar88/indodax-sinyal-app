import React, { Fragment, useState, useEffect } from "react"
import { empty, toCurrency } from "../helper/basic_helper"
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
import ReactLoading from "react-loading"
// import { BASE_API } from "../GlobalVar"
// import dotenv from 'dotenv'
// dotenv.config()

import env from "react-dotenv"
const { REACT_APP_BASE_API: BASE_API } = process.env
// console.log(BASE_API, process.env.REACT_APP_BASE_API)

export default function Chart() {
  const { height, width } = useWindowDimensions()
  const [chart1, setChart1] = useState([])
  const [loadingPart1, setLoadingPart1] = useState(true)
  const [loadingPart2, setLoadingPart2] = useState(true)
  const [loadingPart3, setLoadingPart3] = useState(true)
  const [loadingPart4, setLoadingPart4] = useState(true)
  const [loadingPart5, setLoadingPart5] = useState(true)

  useEffect(() => {
    console.log("Masuk useEffect gan")
    axios
      .get(`${BASE_API}/levelchart`, {
        params: {
          level: ["Crash1", "Wajar2", "Recover1", "Recover2", "Moon1"],
        },
      })
      .then(({ data: res }) => {
        console.log("sukses Part 1", res)
        if (!chart1.length) {
          // Jika masih kosong maka langsung di-assign saja
          setChart1(res.data)
        } else {
          // Jika sudah ada isinya, maka concat properti dari hasil api ke data saat ini.
          let replicate = [...chart1]
          for (let i = 0; i < replicate.length; i++) {
            replicate[i] = {
              ...replicate[i],
              ...res.data[i],
            }
          }
          setChart1(replicate)
          console.log(replicate)
        }
        setLoadingPart1(false)
      })
      .catch((err) => {
        console.log(
          "Err saat get Chart1 Part1",
          err.response?.data ?? err.message
        )
      })

    axios
      .get(`${BASE_API}/levelchart`, {
        params: {
          level: ["Wajar1", "Moon2", "SuperMoon1", "sama", "Crash2"],
        },
      })
      .then(({ data: res }) => {
        console.log("sukses Part 2", res)
        if (!chart1.length) {
          // Jika masih kosong maka langsung di-assign saja
          setChart1(res.data)
        } else {
          // Jika sudah ada isinya, maka concat properti dari hasil api ke data saat ini.
          let replicate = [...chart1]
          for (let i = 0; i < replicate.length; i++) {
            replicate[i] = {
              ...replicate[i],
              ...res.data[i],
            }
          }
          setChart1(replicate)
          console.log(replicate)
        }
        setLoadingPart2(false)
      })
      .catch((err) => {
        console.log(
          "Err saat get Chart1 Part 2",
          err.response?.data ?? err.message
        )
      })

    axios
      .get(`${BASE_API}/levelchart`, {
        params: {
          level: [
            "SuperCrash1",
            "SuperCrash2",
            "MegaCrash1",
            "MegaCrash2",
            "UltraCrash1",
          ],
        },
      })
      .then(({ data: res }) => {
        console.log("sukses Part 3", res)
        if (!chart1.length) {
          // Jika masih kosong maka langsung di-assign saja
          setChart1(res.data)
        } else {
          // Jika sudah ada isinya, maka concat properti dari hasil api ke data saat ini.
          let replicate = [...chart1]
          for (let i = 0; i < replicate.length; i++) {
            replicate[i] = {
              ...replicate[i],
              ...res.data[i],
            }
          }
          setChart1(replicate)
          console.log(replicate)
        }
        setLoadingPart3(false)
      })
      .catch((err) => {
        console.log(
          "Err saat get Chart1 Part 3",
          err.response?.data ?? err.message
        )
      })

    axios
      .get(`${BASE_API}/levelchart`, {
        params: {
          level: [
            "UltraCrash2",
            "GoldenCrash1",
            "GoldenCrash2",
            "DiamondCrash",
            "SuperMoon2",
          ],
        },
      })
      .then(({ data: res }) => {
        console.log("sukses Part 4", res)
        if (!chart1.length) {
          // Jika masih kosong maka langsung di-assign saja
          setChart1(res.data)
        } else {
          // Jika sudah ada isinya, maka concat properti dari hasil api ke data saat ini.
          let replicate = [...chart1]
          for (let i = 0; i < replicate.length; i++) {
            replicate[i] = {
              ...replicate[i],
              ...res.data[i],
            }
          }
          setChart1(replicate)
          console.log(replicate)
        }
        setLoadingPart4(false)
      })
      .catch((err) => {
        console.log(
          "Err saat get Chart1 Part 4",
          err.response?.data ?? err.message
        )
      })

    axios
      .get(`${BASE_API}/levelchart`, {
        params: {
          level: ["MegaMoon1", "MegaMoon2", "UltraMoon1", "UltraMoon2"],
        },
      })
      .then(({ data: res }) => {
        console.log("sukses Part 5", res)
        if (!chart1.length) {
          // Jika masih kosong maka langsung di-assign saja
          setChart1(res.data)
        } else {
          // Jika sudah ada isinya, maka concat properti dari hasil api ke data saat ini.
          let replicate = [...chart1]
          for (let i = 0; i < replicate.length; i++) {
            replicate[i] = {
              ...replicate[i],
              ...res.data[i],
            }
          }
          setChart1(replicate)
          console.log(replicate)
        }
        setLoadingPart5(false)
      })
      .catch((err) => {
        console.log(
          "Err saat get Chart1 Part 5",
          err.response?.data ?? err.message
        )
      })

    return () => {}
  }, [])

  return (
    <Fragment>
      {(() => {
        const chartData = [
          { level: ["Crash1", "Wajar2", "Recover1", "Recover2", "Moon1"] },
          { level: ["Wajar1", "Moon2", "SuperMoon1", "sama", "Crash2"] },
          {
            level: [
              "SuperCrash1",
              "SuperCrash2",
              "MegaCrash1",
              "MegaCrash2",
              "UltraCrash1",
            ],
          },
          {
            level: [
              "UltraCrash2",
              "GoldenCrash1",
              "GoldenCrash2",
              "DiamondCrash",
              "SuperMoon2",
            ],
          },
          { level: ["MegaMoon1", "MegaMoon2", "UltraMoon1", "UltraMoon2"] },
        ]
        let color = ["magenta", "#ff7300", "#387908", "lightskyblue", "yellow"]
        return (
          <Fragment>
            {loadingPart1 ||
            loadingPart2 ||
            loadingPart3 ||
            loadingPart4 ||
            loadingPart5 ? (
              <ReactLoading type={"balls"} color="#fff" />
            ) : console.log(chart1)}
            {chartData.map((item, i) => {
              return (
                <Fragment>
                  <div className="mx-6 mb-4">
                    {item.level.map((area, k) => (
                      <div className="flex">
                        <span
                          className="p-2"
                          style={{ backgroundColor: color[k] }}
                        ></span>
                        <p className="text-white ml-2 text-xs">{area}</p>
                      </div>
                    ))}
                  </div>
                  <AreaChart
                    key={i}
                    width={width - 100}
                    height={400}
                    data={chart1}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <XAxis dataKey="periode" stroke="white" />
                    <YAxis stroke="white" style={{ color: "white" }} />
                    <Tooltip />
                    <CartesianGrid stroke="#fff" />
                    {item.level.map((area, j) => (
                      <Area
                        key={j}
                        type="monotone"
                        dataKey={area}
                        stroke={color[j]}
                        fill={color[j]}
                      />
                    ))}
                  </AreaChart>
                </Fragment>
              )
            })}
          </Fragment>
        )
      })()}
    </Fragment>
  )
}
