import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios(url, method = 'get', data = null) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    // switch (method) {
    //   case 'get':
    //     axios.get(url).then((res) => setResult(res.data));
    //     return;
    //   case 'post':
    //     axios.post(url, data).then((res) => setResult(res.data));
    //     return;
    //   default:
    //     return;
    // }
    axios.request({ url, method, data }).then((res) => setResult(res.data));
  }, []);
  return { data: result };
}
