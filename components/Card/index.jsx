import Image from "next/image";
import style from "./style.module.css"
import Link from 'next/link'

export default function Card({ id, titulo, autor, orientador, capa, ...props }) {
  return (
    <Link href={`/pagina/${id}`}>
      <div {...props} className={style.card}>
        <Image
          src={capa}
          width="387"
          height="282"
          className={style.imagem}
          alt="Imagem"
        />
        <div className={style.dados}>
          <h4>{titulo}</h4>
          <p>Autor(a): {autor}</p>
          <p>Orientador(a): {orientador}</p>
        </div>
      </div>
    </Link>
  )
}