import React, { useState } from "react"
import { Fragment } from "react"
import Pagination from "../components/Pagination"
import Searchbar from "../components/Searchbar"
import { toCurrency } from "../helper/basic_helper"

let daftar_unsur = [
  { nama: "Hidrogen", kode: "H" },
  { nama: "Helium", kode: "He" },
  { nama: "ithium", kode: "Li" },
  { nama: "Beryllium", kode: "Be" },
  { nama: "Boron", kode: "B" },
  { nama: "Carbon", kode: "C" },
  { nama: "Nitrogen", kode: "N" },
  { nama: "Oxygen", kode: "O" },
  { nama: "luorine", kode: "F" },
  { nama: "Neon", kode: "Ne" },
  { nama: "Sodium", kode: "Na" },
  { nama: "Magnesium", kode: "Mg" },
  { nama: "Aluminum", kode: "Al" },
  { nama: "Silicon", kode: "Si" },
  { nama: "Phosphorus", kode: "P" },
  { nama: "Sulfur", kode: "S" },
  { nama: "Chlorine", kode: "Cl" },
  { nama: "Argon", kode: "Ar" },
  { nama: "Potassium", kode: "K" },
  { nama: "Calcium", kode: "Ca" },
  { nama: "Scandium", kode: "Sc" },
  { nama: "Titanium", kode: "Ti" },
  { nama: "Vanadium", kode: "V" },
  { nama: "Chromium", kode: "Cr" },
  { nama: "Manganese", kode: "Mn" },
  { nama: "Iron", kode: "Fe" },
  { nama: "Cobalt", kode: "Co" },
  { nama: "Nickel", kode: "Ni" },
  { nama: "Copper", kode: "Cu" },
  { nama: "Zinc", kode: "Zn" },
  { nama: "Gallium", kode: "Ga" },
  { nama: "Germanium", kode: "Ge" },
  { nama: "Arsenic", kode: "As" },
  { nama: "Selenium", kode: "Se" },
  { nama: "Bromine", kode: "Br" },
  { nama: "Krypton", kode: "Kr" },
  { nama: "Rubidium", kode: "Rb" },
  { nama: "Strontium", kode: "Sr" },
  { nama: "Yttrium", kode: "Y" },
  { nama: "Zirconium", kode: "Zr" },
  { nama: "Niobium", kode: "Nb" },
  { nama: "Molybdenum", kode: "Mo" },
  { nama: "Technetium", kode: "Tc" },
  { nama: "Ruthenium", kode: "Ru" },
  { nama: "Rhodium", kode: "Rh" },
  { nama: "Palladium", kode: "Pd" },
  { nama: "Silver", kode: "Ag" },
  { nama: "Cadmium", kode: "Cd" },
  { nama: "Indium", kode: "In" },
  { nama: "Tin", kode: "Sn" },
  { nama: "Antimony", kode: "Sb" },
  { nama: "Tellurium", kode: "Te" },
  { nama: "Iodine", kode: "I" },
  { nama: "Xenon", kode: "Xe" },
  { nama: "Cesium", kode: "Cs" },
  { nama: "Barium", kode: "Ba" },
  { nama: "Lanthanum", kode: "La" },
  { nama: "Cerium", kode: "Ce" },
  { nama: "Praseodymium", kode: "Pr" },
  { nama: "Neodymium", kode: "Nd" },
  { nama: "Promethium", kode: "Pm" },
  { nama: "Samarium", kode: "Sm" },
  { nama: "Europium", kode: "Eu" },
  { nama: "Gadolinium", kode: "Gd" },
  { nama: "Terbium", kode: "Tb" },
]
export default function Unsur() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [search, setSearch] = useState("")

  

  let filteredSearch = daftar_unsur.filter((item) => {
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
  let noTo = noFrom + filteredPaging.length-1
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
                <h3 className="font-semibold text-lg text-white">Data Unsur</h3>
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
