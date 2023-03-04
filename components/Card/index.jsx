import Image from "next/image";
import style from "../Card"

export default function Card({titulo, autor, orientador, capa, ...props}){
  return(
    <div {...props} className="card">
        <Image 
          src={capa}
          width="387"
          height="282"
        />
        <h2>{titulo}</h2>
        <div>Autor(a): {autor}</div>
        <div>Orientador(a): {orientador}</div>
    </div>
  )
}