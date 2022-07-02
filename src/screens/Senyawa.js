import React, { useState } from "react"
import { Fragment } from "react"
import Pagination from "../components/Pagination"
import Searchbar from "../components/Searchbar"
import { toCurrency } from "../helper/basic_helper"

let daftar_senyawa = [
  { nama: "Air", kode: "H2O" },
  { nama: "Etanol", kode: "C2H5OH" },
  { nama: "Glukosa", kode: "C6H12O6" },
  { nama: "Perak(I) Nitrat", kode: "AgNO3" },
  { nama: "Kalsium Nitrat", kode: "Ca(NO3)2" },
  { nama: "Kalium Sulfat", kode: "K2SO4" },
  { nama: "Magnesium Hidroksida", kode: "Mg(OH)2" },
  { nama: "Kalsium Karbonat", kode: "CaCO3" },
  { nama: "Perak(I) Klorida", kode: "AgCl" },
  { nama: "Propanon", kode: "C3H6O" },
  { nama: "Tembaga(II) Sulfat", kode: "CuSO4" },
  { nama: "Karbon Dioksida", kode: "CO2" },
  { nama: "Natrium Klorida", kode: "NaCl" },
  { nama: "Asam Klorida", kode: "HCl" },
  { nama: "Magnesium Oksida", kode: "MgO" },
  { nama: "Barium Klorida", kode: "BaCl2" },
  { nama: "Litium Fluorida", kode: "LiF" },
  { nama: "Barium Sulfida", kode: "BaS" },
  { nama: "Tembaga(I) Oksida", kode: "Cu2O" },
  { nama: "Besi(III) Klorida", kode: "FeCl3" },
  { nama: "Amonium Hidroksida", kode: "NH4OH" },
  { nama: "Natrium Karbonat", kode: "Na2CO3" },
  { nama: "Amonium Nitrat", kode: "NH4NO3" },
  { nama: "Besi(II) Sulfida", kode: "FeS" },
  { nama: "Metana", kode: "CH4" },
  { nama: "Amonia", kode: "NH3" },
  { nama: "Natrium Hidroksida", kode: "NaOH" },
  { nama: "Kalium Fosfat", kode: "K3PO4" },
  { nama: "Rubidium Oksalat", kode: "Rb2C2O4" },
  { nama: "Sesium Bromida", kode: "CsBr" },
  { nama: "Timbal(II) Iodida", kode: "PbI2" },
  { nama: "Besi(III) Bromida", kode: "FeBr3" },
  { nama: "Hidrogen Sulfida", kode: "H2S" },
  { nama: "Aluminium Bromida", kode: "AlBr3" },
  { nama: "Barium Oksida", kode: "BaO" },
  { nama: "Silikon Dioksida atau Silika", kode: "SiO2" },
  { nama: "Etuna atau Asetilena", kode: "C2H2" },
  { nama: "Butana", kode: "C4H10" },
  { nama: "Hidrogen Peroksida", kode: "H2O2" },
  { nama: "Kalium Tiosulfat", kode: "K2S2O3" },
  { nama: "Timbal(II) Nitrat", kode: "Pb(NO3)2" },
  { nama: "Tembaga(II) Sulfida", kode: "CuS" },
  { nama: "Asam Oksalat", kode: "H2C2O4" },
  { nama: "Besi(III) Sulfat", kode: "Fe2(SO4)3" },
  { nama: "Belerang Trioksida", kode: "SO3" },
  { nama: "Asam Salisilat", kode: "C7H6O3" },
  { nama: "Aspirin", kode: "C9H8O4" },
  { nama: "Kalsium Klorida", kode: "CaCl2" },
  { nama: "Litium Bromida", kode: "LiBr" },
  { nama: "Natrium Sulfit", kode: "Na2SO3" },
]

export default function Unsur() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [search, setSearch] = useState("")

  let filteredSearch = daftar_senyawa.filter((item) => {
    let re = new RegExp(search, "i")
    let kodeMatch = item.kode.search(re) != -1
    let namaMatch = item.nama.search(re) != -1
    return kodeMatch || namaMatch
  })
  let filteredPaging = filteredSearch.filter((item, i) => {
    let offsetStart = (page - 1) * perPage
    let offsetEnd = offsetStart + perPage - 1

    return i >= offsetStart && i <= offsetEnd
  })

  let noFrom = (page - 1) * perPage + 1
  let noTo = noFrom + filteredPaging.length - 1
  return (
    <Fragment>
      <Searchbar
        onChange={(val) => {
          setSearch(val)
        }}
        containerClass={"p-4"}
      />

      <div className="w-full mb-12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
    bg-pink-900 text-white"
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                <h3 className="font-semibold text-lg text-white">Data Senyawa</h3>
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
                    Nama
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                    {" "}
                    Kode
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPaging.map(({ nama, kode }, i) => {
                  let warnaBaris
                  if (i % 2 == 0) {
                    warnaBaris = ""
                  } else {
                    warnaBaris = "bg-stone-700"
                  }
                  let warnaJenis
                  return (
                    <tr className={`${warnaBaris}`} key={i}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                        {noFrom + i}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                        {nama}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                        {kode}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pb-12">
        <span className="text-sm text-white dark:text-white">
          Showing{" "}
          <span className="font-semibold text-white">{toCurrency(noFrom)}</span>{" "}
          to{" "}
          <span className="font-semibold text-white">{toCurrency(noTo)}</span>{" "}
          of{" "}
          <span className="font-semibold text-white">
            {toCurrency(filteredSearch.length)}
          </span>{" "}
          Entries
        </span>
        {/* Component untuk Pagination */}
        <Pagination
          className="pagination-bar"
          currentPage={page}
          totalCount={filteredSearch.length}
          pageSize={perPage}
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </Fragment>
  )
}
