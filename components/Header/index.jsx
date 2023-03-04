import Image from "next/image";
import LogoIfro from '../../images/logo-ifro.svg'
import style from './style.module.css'

export default function Header(){
  return(
    <header className={style.cabecalho}>
      <section>
        <Image
          src={LogoIfro}
          alt="Logotipp do IFRO" />
      </section>
      <section>
        Repositório do TCC do Bacharelado
        em Arquitetura e Urbanismo
      </section>
    </header>
  )
}