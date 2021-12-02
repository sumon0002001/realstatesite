import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '9bd3878cd7msha0d0cca7c29f77bp1b32d3jsn9854d308596b'
      }
      
    })
    return data
}

