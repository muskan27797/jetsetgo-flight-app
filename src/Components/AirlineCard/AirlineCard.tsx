import "./AirlineCard.css"
import { AirlineFilters } from '../../Flight.interface';

interface AirlineCardProps {
  selectedAirline: string[],
  airLine: AirlineFilters,
  handleAirlineSelection: (airlineCode: string) => void
}

export const AirlineCard = ({ airLine, handleAirlineSelection, selectedAirline }: AirlineCardProps) => {

  const selectAirline = () => {
    handleAirlineSelection(airLine.airlineCode);
  }

  return (
    <>
      <div className="flight-name">
        <div className='airline-selection'>
          <div className='airlinename-checkbox'>
            <label className="checkbox-label">
              <input className="checkbox" type="checkbox" checked={selectedAirline.includes(airLine.airlineCode)} onChange={selectAirline}></input>
              <span className="airline-name">{airLine.airlineName} </span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}