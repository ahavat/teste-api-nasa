import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './style'

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
    const response = await api.get('apod?api_key=3XIaMWfxniNXrKU4El6uSRkb5OWWtfULUo6sBBhI&start_date=2020-10-23&end_date=2020-10-23')
    setpictures(response.data)
  }

  return (
    <Container>
      <div className="header"></div>
      <div className="body"></div>
      <div className="body"></div>
      <div className="footer"></div>
    </Container>
  )
}
export default Home;
