import { useState } from "react"

export function useFilter(dataArr, callback) {
    const [query, setQuery] = useState("")
    const filteredData = dataArr.filter((data) => (callback(data).toLowerCase().includes(query)))

    return [filteredData, setQuery]

}