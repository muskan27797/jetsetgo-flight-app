import './SortFlights.css'
import { SORTING } from '../FlightDetails/FlightDetails';
import Arrow from '../../Assets/arrow.jpg'
import { CONSTANTS } from '../../Constants';

interface SortFlightsProps {
    toggle: SORTING;
    setToggle: React.Dispatch<React.SetStateAction<SORTING>>
    totalCount: number
    cheapestFlight: number
}
export const SortFlights = ({toggle, setToggle, totalCount, cheapestFlight}: SortFlightsProps) => {

    const handleSortFlights = () => {
        setToggle(prevToggle => prevToggle === SORTING.ASC ? SORTING.DSC : SORTING.ASC) 
    }
    return (
        <>
            <div className="sort-heading">
                <div className="sort-title">{CONSTANTS.SORT_BY}</div>
                <div className="flight-count"> {`showing ${totalCount} flights`}</div>
            </div>
            <div className="sorting-basis" onClick={handleSortFlights}>
                <div className="price-title">Price {toggle === SORTING.NO? "" : <span><img className={`image ${toggle === SORTING.DSC ? "down": ""}`} src={Arrow} /></span>}
                </div>
                <div className="cheapest-price">{cheapestFlight > 0 ? `cheapest @ ${cheapestFlight}` : ""}</div>
            </div></>
    )

}