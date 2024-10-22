# apipa

https://apipa.vercel.app/api/

## Elements

https://apipa.vercel.app/api/integer &nbsp; &nbsp; random integer

https://apipa.vercel.app/api/float &nbsp; &nbsp; random float

https://apipa.vercel.app/api/string &nbsp; &nbsp; random string

https://apipa.vercel.app/api/date &nbsp; &nbsp; random date (1970-01-01 -> now)

https://apipa.vercel.app/api/datetime &nbsp; &nbsp; random datetime (1970-01-01T00:00:00 -> now)

https://apipa.vercel.app/api/time &nbsp; &nbsp; random time (00:00:00 -> now)

https://apipa.vercel.app/api/moon &nbsp; &nbsp; random moon phase

https://apipa.vercel.app/api/weather &nbsp; &nbsp; random wheather

https://apipa.vercel.app/api/wind &nbsp; &nbsp; random wind velocity


### Interval

https://apipa.vercel.app/api/integer/2000  &nbsp; &nbsp; 0 -> 2000

https://apipa.vercel.app/api/integer/2000/3000 &nbsp; &nbsp; 2000 ->  3000

https://apipa.vercel.app/api/float/2000 &nbsp; &nbsp; 0 -> 2000

https://apipa.vercel.app/api/float/2000/3000 &nbsp; &nbsp; 2000 -> 3000

https://apipa.vercel.app/api/string/4 &nbsp; &nbsp; xxxx

https://apipa.vercel.app/api/date/now &nbsp; &nbsp; current date

https://apipa.vercel.app/api/date/2000-01-01 &nbsp; &nbsp; 1970-01-01 -> 2000-01-01

https://apipa.vercel.app/api/date/1950-01-01/2000-01-01 &nbsp; &nbsp; 1950-01-01 -> 2000-01-01

https://apipa.vercel.app/api/date/1950-01-01/now &nbsp; &nbsp; 1950-01-01 -> current date

https://apipa.vercel.app/api/datetime/now &nbsp; &nbsp; current datetime

https://apipa.vercel.app/api/datetime/2000-01-01T22:00:00 &nbsp; &nbsp; 1970-01-01T00:00:00 -> 2000-01-01T22:00:00

https://apipa.vercel.app/api/datetime/1950-01-01T12:00:00/2000-01-01T22:00:00 &nbsp; &nbsp; 1950-01-01T12:00:00 -> 2000-01-01T22:00:00

https://apipa.vercel.app/api/datetime/1950-01-01T12:00:00/now &nbsp; &nbsp; 1950-01-01T12:00:00 -> current datetime

https://apipa.vercel.app/api/time/now &nbsp; &nbsp; current time

https://apipa.vercel.app/api/time/12:00:00 &nbsp; &nbsp; 00:00:00 -> 12:00:00

https://apipa.vercel.app/api/time/12:00:00/22:00:00 &nbsp; &nbsp; 12:00:00 -> 22:00:00

https://apipa.vercel.app/api/time/12:00:00/now &nbsp; &nbsp; 12:00:00 -> current time

### Delayed

https://apipa.vercel.app/api/w/integer &nbsp; &nbsp; delay 1000 -> 5000

https://apipa.vercel.app/api/w/5000/integer &nbsp; &nbsp; delay 5000

https://apipa.vercel.app/api/w/2000/4000/integer  &nbsp; &nbsp; delay 2000 -> 4000
