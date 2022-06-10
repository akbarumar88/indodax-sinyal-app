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
  return (
    <Fragment>
      {(() => {
        const chartData = [
          {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
        ]
        return (
          <AreaChart
            width={width - 100}
            height={400}
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="magenta"
              fill="magenta"
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
            />
          </AreaChart>
        )
      })()}
    </Fragment>
  )
}
