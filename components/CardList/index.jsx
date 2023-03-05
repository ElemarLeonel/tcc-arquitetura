import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card'
import style from './style.module.css'

export default function CardList() {

  const [publicacoes, setPublicacoes] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [limite, setLimite] = useState(3);

  function carregaDados() {
    axios.get(`http://localhost:3001/api`).then((resposta) => {
      const dadosPaginados = paginacaoDeDados(
        resposta.data.dados,
        paginaAtual,
        limite
      );
      setPublicacoes(dadosPaginados);
      setTotalPages(resposta.data.totalPages);
    });
  }

  function paginacaoDeDados(items, pageActual, limitItems) {
    let result = [];
    let totalPage = Math.ceil(items.length / limitItems);
    let count = pageActual * limitItems - limitItems;
    let delimiter = count + limitItems;

    if (pageActual <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        if (items[i] != null) {
          result.push(items[i]);
        }
        count++;
      }
    }

    return result;
  }

  function setCurrentPage(page){
    setPaginaAtual(parseInt(page));
    
    carregaDados()
  }

  useEffect(() => {
    carregaDados();
  }, []);

  return (
    <>
    <div className={style.cardlist}>
      {publicacoes.map(p =>(
        <Card key={p.id}
          titulo={p.titulo}
          autor={p.autor}
          orientador={p.orientador} 
          capa={p.capa}
          id={p.id}
          />
      ))}
    </div>

    <div className={style.pagination}>
      
      {totalPages.map((b, index) => (
        <button key={index} 
          className={style.button}
          onClick={() => setCurrentPage(b)}>
            {b}
          </button>
        ))
      }
    </div>
    </>
  )
}