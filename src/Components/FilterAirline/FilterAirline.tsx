import { CONSTANTS } from "../../Constants";
import { AirlineFilterStore } from "../../Flight.interface";
import { AirlineCard } from "../AirlineCard/AirlineCard";
import "./FilterAirline.css"

interface FilterValueProps {
    airlines: AirlineFilterStore
    handleAirlineSelection: (airlineCode: string) => void
    handleReset: () => void
    selectedAirline: string[]
    totalCount: number
}

export const FilterAirline = ({ selectedAirline, handleReset, handleAirlineSelection, airlines, totalCount }: FilterValueProps) => {

    return (
        <div className="filter-details">
            <div className='filter-heading'>
                <div className="filter-title">{CONSTANTS.FILTERS}</div>
                <div className="flight-count"> {`showing ${totalCount} flights`}</div>
            </div>
            <div className="seperation"></div>
            <div className="preferred-airlines">
                <div className="airlines-heading">
                    <div className="airlines-title">{CONSTANTS.PREFERRED_AIRLINES}</div>
                    <span className={selectedAirline.length ? "reset-button-enabled" : "reset-button-disabled"} onClick={handleReset}>{CONSTANTS.RESET}</span>
                </div>
                {
                    Object.keys(airlines).map((airline: string, index: number) => {
                        return (<>
                            <AirlineCard selectedAirline={selectedAirline} key={index} airLine={airlines[airline]} handleAirlineSelection={handleAirlineSelection}></AirlineCard>
                        </>)
                    })
                }

            </div>
        </div>
    )
}