import React, { Fragment, useState, useEffect } from "react"
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import useWindowDimensions from "../helper/useWindowDimensions"
import axios from "axios"
import { BASE_API } from "../GlobalVar"
import ReactLoading from "react-loading"

export default function Chart() {
  const { height, width } = useWindowDimensions()
  const [chart1, setChart1] = useState([])
  const [jenis, setJenis] = useState("moon")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
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
          jenis,
        },
      })
      .then(({ data: res }) => {
        console.log("sukses", res)
        setChart1(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log("Err saat get Chart1", err.response?.data ?? err.message)
        alert(
          "Err saat get Chart1 " + JSON.stringify(err.response?.data),
          err.response?.data ?? err.message
        )
      })

    return () => {}
  }, [jenis])

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
            {/* Jenis */}
            <div className="grid gap-6 mb-6 lg:grid-cols-4">
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
                    <option value="crash" selected={jenis == "crash"}>
                      crash
                    </option>
                    <option value="moon" selected={jenis == "moon"}>
                      moon
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {loading ? <ReactLoading type={"balls"} color="#fff" /> : null}
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
