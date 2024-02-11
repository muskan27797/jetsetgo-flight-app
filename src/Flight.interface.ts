export interface IAirportInfo {
    cityCode: string,
    cityName: string,
    terminal: string,
    airportCode: string
    airportName: string,
    countryCode: string,
    countryName: string
  }

export interface IAirlinesInfo {
    airlineCode: string,
    airlineName: string,
    flightNumber: string
}

export interface IDestinationInfo {
    airport: IAirportInfo,
    arrTime: string
  }

  export interface IAirlineSource {
    airport: IAirportInfo
    depTime: string
  }

export interface IFlightDetails {
    id: string,
    fare: number,
    displayData: {
      source: IAirlineSource
      airlines: IAirlinesInfo[],
      stopInfo: string,
      destination: IDestinationInfo,
      totalDuration: string
    }
  }

export interface IFlighDetailQuery {
    data: {
        result: IFlightDetails[]
    }
}
export interface AirlineFilters {
    airlineCode:string;
    airlineName: string;
};

export interface AirlineFilterStore  {
  [key: string]: AirlineFilters
}

export enum SEARCH_PLACEHOLDER {
    FROM = 'from',
    TO = 'to',
    DATE = 'date',
    PASSENGERS = 'passengers'
}