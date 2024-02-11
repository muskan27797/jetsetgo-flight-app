import { FormEvent, useCallback, useEffect, useMemo, useState } from "react"
import { IFlighDetailQuery, IFlightDetails } from "../Flight.interface"
import { SORTING } from "../Components/FlightDetails/FlightDetails";
import { extractAirlines } from "../Flight.helper";
import { CONSTANTS } from "../Constants";

export const useFlightHook = (toggle: SORTING, selectedAirline: string[]) => {

    const [flightDetails, setFlightDetails] = useState<IFlighDetailQuery | null>(null);
    const [filterFlightDetails, setfilterFlightDetails] = useState<IFlightDetails[]| null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const handleOnSubmit = useCallback((event: FormEvent) => {
        event.preventDefault()

        setIsLoading(true);

        fetch(CONSTANTS.API)
        .then(data=> data.json())
        .then(res => {
            setFlightDetails(res);
            setfilterFlightDetails(res.data.result);
            setIsLoading(false);
        })
        .catch(() => {
            setFlightDetails(null);
            setfilterFlightDetails([]);
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        if(selectedAirline.length > 0){
            const filteredData = flightDetails?.data.result.filter(flightDetail => flightDetail.displayData.airlines.some(airline =>  selectedAirline.includes(airline.airlineCode))) ?? [];
            setfilterFlightDetails(filteredData)
        } else {
            setfilterFlightDetails(flightDetails?.data.result ?? [])
        }
    }, [selectedAirline])

    if(toggle === SORTING.ASC){
         filterFlightDetails?.sort((a, b) => (a.fare - b.fare))
    }else if (toggle === SORTING.DSC){
         filterFlightDetails?.sort((a, b) => (b.fare - a.fare))
    }

    const allPossibleAirlines = useMemo(() => extractAirlines(flightDetails), [flightDetails])

    return {
        filterFlightDetails,
        handleOnSubmit,
        isLoading,
        allPossibleAirlines
    }

}