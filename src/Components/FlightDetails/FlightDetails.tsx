import { useMemo, useState } from 'react';
import "./FlightDetails.css";
import { Header } from "../Header/Header"
import { FilterAirline } from '../FilterAirline/FilterAirline';
import { SortFlights } from '../SortFlights/SortFlights';
import { FlightDetailCard } from '../FlightDetailCard/FlightDetailCard';
import { useFlightHook } from '../../Hooks/useFlightHook';
import { extractCheapestFlight } from '../../Flight.helper';
import { CONSTANTS } from '../../Constants';

export enum SORTING {
  ASC='asc',
  DSC='dsc',
  NO='no'
}

export const FlightDetails = () => {
 
  const [selectedAirline, setSelectedAirline] = useState<string[]>([]);
  const [toggle, setToggle] = useState<SORTING>(SORTING.NO);
  const {filterFlightDetails, handleOnSubmit, isLoading, allPossibleAirlines} = useFlightHook(toggle, selectedAirline); 

  const handleResetFilters = () => {
    setSelectedAirline([]);
  }

  const handleAirlineSelection = (airlineCode: string) => {

    if (selectedAirline.includes(airlineCode)) {
      setSelectedAirline(prevAirlines => prevAirlines.filter(item => item !== airlineCode))
    } else {
      setSelectedAirline(prevAirlines => [...prevAirlines, airlineCode])
    }
  }

  const cheapestFlightPrice = useMemo(() => {
    return extractCheapestFlight(filterFlightDetails ?? [])
  }, [filterFlightDetails])


  // Empty State Handling
   if(filterFlightDetails === null){
    return null;
   }
   
  return (
    <div className='main'>
      {/* User Selection And Logo */}
      <Header handleOnSubmit={handleOnSubmit}/>
      <div className="details-container">

      {/* Filter Airline */}
      <FilterAirline totalCount={filterFlightDetails.length} selectedAirline={selectedAirline} handleReset={handleResetFilters} handleAirlineSelection ={handleAirlineSelection} airlines={allPossibleAirlines}/>
        <div className="show-details">
          {/* Sort By Price */}
         <SortFlights cheapestFlight={cheapestFlightPrice}  totalCount={filterFlightDetails.length} toggle={toggle} setToggle={setToggle}/>
         {isLoading && <div className="loading">{CONSTANTS.LOADING}</div>}
         {/* Display Card Details */}
         {filterFlightDetails.map(flightDetail => {
              return <FlightDetailCard key={flightDetail.id} flightDetail={flightDetail}/>
         }) }
        </div>
      </div>
    </div>
  )
}