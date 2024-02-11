import { AirlineFilterStore, IFlighDetailQuery, IFlightDetails } from "./Flight.interface";

export const extractCheapestFlight = (filterFlightDetails: IFlightDetails[]) => {

    if (filterFlightDetails.length === 0) return 0;
    let minValue = Infinity;
    filterFlightDetails.forEach(item => {
        minValue = Math.min(minValue, item.fare)
    })
    return minValue === Infinity ? 0 : minValue 
}

export const extractAirlines = (flighData: IFlighDetailQuery | null) => {
    if (!flighData) return {}
    const airlines: AirlineFilterStore = {};
    flighData.data.result.forEach(item => {
        item.displayData.airlines.forEach(it => {
            if (!airlines[it.airlineCode]) {
                airlines[it.airlineCode] = {
                    airlineCode: it.airlineCode,
                    airlineName: it.airlineName
                }
            }
        })
    })
    return airlines
}