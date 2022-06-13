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
import { BASE_API } from "../GlobalVar"

export default function Chart() {
  const { height, width } = useWindowDimensions()
  const [chart1, setChart1] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_API}/levelchart`, {
        params: {
          level: [
            "Crash1",
            "Wajar2",
            "Recover1",
            "Recover2",
            "Moon1",
            "Wajar1",
            "Moon2",
            "SuperMoon1",
            "sama",
            "Crash2",
            "SuperCrash1",
            "SuperCrash2",
            "MegaCrash1",
            "MegaCrash2",
            "UltraCrash1",
            "UltraCrash2",
            "GoldenCrash1",
            "GoldenCrash2",
            "DiamondCrash",
            "SuperMoon2",
            "MegaMoon1",
            "MegaMoon2",
            "UltraMoon1",
            "UltraMoon2",
          ],
        },
      })
      .then(({ data: res }) => {
        console.log("sukses", res)
        setChart1(res.data)
      })
      .catch((err) => {
        console.log("Err saat get Chart1", err.response?.data ?? err.message)
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
