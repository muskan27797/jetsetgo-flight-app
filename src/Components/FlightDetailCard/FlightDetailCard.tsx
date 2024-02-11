import { CONSTANTS } from "../../Constants"
import { IFlightDetails } from "../../Flight.interface"
import "./FlightDetailCard.css"

interface ShowFlightProps {
    flightDetail: IFlightDetails
}

export const FlightDetailCard = ({flightDetail}: ShowFlightProps) => {

    const depTime = new Date(flightDetail.displayData.source.depTime).getHours() + ":" + new Date(flightDetail.displayData.source.depTime).getMinutes()
    const arrTime = new Date(flightDetail.displayData.destination.arrTime).getHours() + ":" + new Date(flightDetail.displayData.destination.arrTime).getMinutes()
    return (
        <div className='show-flights'>
            <div className="flight-name-time-details">
                <div className="flight-name-details">
                    <div className="flight-name">{flightDetail.displayData.airlines[0].airlineName}</div>
                    <div className="from-to-detail">
                        <div className="from-name-timing">
                            <div className="from-name">
                                <span className="from-country-code">{flightDetail.displayData.source.airport.cityCode} </span>
                                <span>{flightDetail.displayData.source.airport.cityName}</span>
                                <span>, {flightDetail.displayData.source.airport.countryName}</span>
                            </div>
                            <span className="from-timing">{depTime}</span>
                        </div>
                        <div className="flight-duration-container">
                            <div></div>
                            <span className="flight-duration">{flightDetail.displayData.totalDuration}</span>
                        </div>
                        <div className="to-name-timing">
                            <div className="to-name">
                                <span>{flightDetail.displayData.destination.airport.cityCode} </span>
                                <span>{flightDetail.displayData.destination.airport.cityName}</span>
                                <span>, {flightDetail.displayData.destination.airport.countryName}</span>
                            </div>
                            <span className="to-timing">{arrTime}</span>
                        </div>
                    </div>
                </div>
                <div className="from-to-price">
                    <div className="flight-price">
                        ₹{flightDetail.fare}
                    </div>
                    <div className="book-flight">
                        <button className="book-button">{CONSTANTS.BOOK}</button>
                    </div>
                </div>

            </div>
            <div className="layover-count">
                {CONSTANTS.LAYOVER} {flightDetail.displayData.stopInfo}
            </div>
        </div>
    )

}