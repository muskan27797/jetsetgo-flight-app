import { extractCheapestFlight, extractAirlines } from '../Flight.helper';
import { mockCorruptFare, mockFlightDetailQuery, mockFlightDetails } from '../__mocks__/Flight.mock';

describe('extractCheapestFlight', () => {
  it('returns 0 when input array is empty', () => {
    const result = extractCheapestFlight([]);
    expect(result).toBe(0);
  });

  it('returns the minimum fare from the input array', () => {
    const result = extractCheapestFlight(mockFlightDetails);
    expect(result).toBe(3840);
  });

  it('returns Infinity when fares are not provided', () => {
    const result = extractCheapestFlight(mockCorruptFare);
    expect(result).toBe(0);
  });
});

describe('extractAirlines', () => {
  it('returns an empty object when input is null', () => {
    const result = extractAirlines(null);
    expect(result).toEqual({});
  });

  it('returns an empty object when input data result is empty', () => {
    const flightData = {
      data: {
        result: []
      }
    };
    const result = extractAirlines(flightData);
    expect(result).toEqual({});
  });

  it('returns the correct airlines object', () => {
    const result = extractAirlines(mockFlightDetailQuery);
    expect(result).toEqual({
      AB: { airlineCode: 'AB', airlineName: "JetSpice"},
      CD: { airlineCode: 'CD', airlineName: "Air India" }
    })
    });

  it('handles duplicate airlines correctly', () => {
    const result = extractAirlines(mockFlightDetailQuery);
    expect(result).toEqual({
        AB: { airlineCode: 'AB', airlineName: "JetSpice"},
        CD: { airlineCode: 'CD', airlineName: "Air India" }
      })
  });
});