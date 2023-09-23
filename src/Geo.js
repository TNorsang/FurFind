import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Geo(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://geocodeapi.p.rapidapi.com/GetNearestCities',
        params: {
          latitude: props.lat,
          longitude: props.long,
          range: '0'
        },
        headers: {
          'X-RapidAPI-Key': '27ee28dde4msh2a84542d4967eddp152359jsnaa97879f23cd',
          'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.lat, props.long]);

  return (
    <div>
      <p>Response Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Geo;
