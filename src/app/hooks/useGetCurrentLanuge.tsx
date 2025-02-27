'use client'
import { usePathname } from "next/navigation"


const useGetCurrentLanuge = () => {
    const pathname = usePathname()
    return pathname.slice(1,3)
}

export default useGetCurrentLanuge
