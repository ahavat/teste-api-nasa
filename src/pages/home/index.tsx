import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Ipisctures {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
}

const Home: React.FC = () => {
  const [pictures, setpictures] = useState<Ipisctures[]>([])

  useEffect(() => {
    loadpictures()
  }, [])

  async function loadpictures() {
    const response = await api.get('&start_date=2020-10-23&end_date=2020-10-23')
    setpictures(response.data)
  }

  return (
    <>
      <button onClick={loadpictures}><br /></button>
      <thead>
        <tr>
          <th>
            1
          </th>
          <th>
            1
          </th>
          <th>
            1
          </th>
          <th>
            1
          </th>
        </tr>
      </thead>
      <tbody>
        {
          pictures.map(picture =>
            <><tr key={picture.hdurl} /><td>{picture.title}</td><td>{picture.date}</td>
              <td>{picture.explanation}</td></>
          )
        }
      </tbody>
    </>
  )
}
export default Home;
