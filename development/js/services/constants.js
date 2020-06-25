export const API_URL_REST = 'http://data.fixer.io/api';

export const latest_REST = '/latest'; //option for latest spots -> http://data.fixer.io/api/latest?access_key=YOUR_ACCESS_KEY&base=JPY&symbols=USD,AUD,CAD,PLN,MXN
export const historical_REST = '2020-01-01'; //option for historical rates/spots from given date until now -> http://data.fixer.io/api/YYYY-MM-DD?access_key=YOUR_ACCESS_KEY&base=JPY&symbols=USD,AUD,CAD,PLN,MXN

export const API_KEY_REST = '?access_key=c02b87d109a928029679584b8d27fb65';

export const base_REST = '&base=EUR'; //optional //looks like only EUR is free. also EUR is default value (no need to provide this part at all)
export const symbols_API_REST = 'USD,AUD,CAD'; //optional //quote currencies (against base)