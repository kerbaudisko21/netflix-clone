import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import React from 'react'

const useMoviesList = () => {
    const {data, error, isLoading} = useSWR('/api/movies', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {
        data,
        error,
        isLoading
    }
}

export default useMoviesList;
