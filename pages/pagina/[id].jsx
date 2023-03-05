import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
// import CardList from '../components/CardList'
import Footer from '../../components/Rodape'
import axios from 'axios'

export default function ListarPDF() {

  const [dados, setDados] = useState([])
  const request = useRouter();

  function carregaDados() {
    const { id } = request.query
    axios.get(`http://localhost:3001/dados/${id}`).then((resposta) => {
      setDados(resposta.data)
    });
  }

  useEffect(() =>{
    carregaDados()
  }, [])

  return (
    <>
      <Header />
      <iframe src={dados.arquivo} width="500" height="500" />
      <Footer />
    </>
  )
}
