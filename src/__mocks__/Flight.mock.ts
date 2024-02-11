import { IFlighDetailQuery, IFlightDetails } from "../Flight.interface";

export const mockFlightDetails: IFlightDetails[] = [{
    "id": "1",
    "fare": 3840,
    "displayData": {
      "source": {
        "airport": {
          "cityCode": "DEL",
          "cityName": "Delhi",
          "terminal": "3",
          "airportCode": "DEL",
          "airportName": "Indira Gandhi Airport",
          "countryCode": "IN",
          "countryName": "India"
        },
        "depTime": "2023-03-31T06:20"
      },
      "airlines": [
        {
          "airlineCode": "AB",
          "airlineName": "JetSpice",
          "flightNumber": "1234"
        }
      ],
      "stopInfo": "Non stop",
      "destination": {
        "airport": {
          "cityCode": "BOM",
          "cityName": "Mumbai",
          "terminal": "2",
          "airportCode": "BOM",
          "airportName": "Mumbai",
          "countryCode": "IN",
          "countryName": "India"
        },
        "arrTime": "2023-03-31T08:40"
      },
      "totalDuration": "2h 20m"
    }
  },
  {
    "id": "2",
    "fare": 4820,
    "displayData": {
      "source": {
        "airport": {
          "cityCode": "BOM",
          "cityName": "Mumbai",
          "terminal": "1",
          "airportCode": "BOM",
          "airportName": "Chhatrapati Shivaji International Airport",
          "countryCode": "IN",
          "countryName": "India"
        },
        "depTime": "2023-03-31T09:30"
      },
      "airlines": [
        {
          "airlineCode": "CD",
          "airlineName": "Air India",
          "flightNumber": "4567"
        }
      ],
      "stopInfo": "1 Stop",
      "destination": {
        "airport": {
          "cityCode": "MAA",
          "cityName": "Chennai",
          "terminal": "4",
          "airportCode": "MAA",
          "airportName": "Chennai International Airport",
          "countryCode": "IN",
          "countryName": "India"
        },
        "arrTime": "2023-03-31T12:35"
      },
      "totalDuration": "3h 05m"
    }
  },
  {
    "id": "2",
    "fare": 4820,
    "displayData": {
      "source": {
        "airport": {
          "cityCode": "BOM",
          "cityName": "Mumbai",
          "terminal": "1",
          "airportCode": "BOM",
          "airportName": "Chhatrapati Shivaji International Airport",
          "countryCode": "IN",
          "countryName": "India"
        },
        "depTime": "2023-03-31T09:30"
      },
      "airlines": [
        {
          "airlineCode": "CD",
          "airlineName": "Air India",
          "flightNumber": "4567"
        }
      ],
      "stopInfo": "1 Stop",
      "destination": {
        "airport": {
          "cityCode": "MAA",
          "cityName": "Chennai",
          "terminal": "4",
          "airportCode": "MAA",
          "airportName": "Chennai International Airport",
          "countryCode": "IN",
          "countryName": "India"
        },
        "arrTime": "2023-03-31T12:35"
      },
      "totalDuration": "3h 05m"
    }
  }]

  export const mockCorruptFare: IFlightDetails[] = [{
    "id": "1",
    "fare": Infinity,
    "displayData": {
      "source": {
        "airport": {
          "cityCode": "DEL",
          "cityName": "Delhi",
          "terminal": "3",
          "airportCode": "DEL",
          "airportName": "Indira Gandhi Airport",
          "countryCode": "IN",
          "countryName": "India"
        },
        "depTime": "2023-03-31T06:20"
      },
      "airlines": [
        {
          "airlineCode": "AB",
          "airlineName": "JetSpice",
          "flightNumber": "1234"
        }
      ],
      "stopInfo": "Non stop",
      "destination": {
        "airport": {
          "cityCode": "BOM",
          "cityName": "Mumbai",
          "terminal": "2",
          "airportCode": "BOM",
          "airportName": "Mumbai",
          "countryCode": "IN",
          "countryName": "India"
        },
        "arrTime": "2023-03-31T08:40"
      },
      "totalDuration": "2h 20m"
    }
  }]

  export const mockFlightDetailQuery: IFlighDetailQuery = {
    data:{
        result: mockFlightDetails
    }
  }