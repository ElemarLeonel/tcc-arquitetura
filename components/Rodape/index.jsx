import style from './style.module.css'

export default function Rodape() {
  return (
    <footer className={style.rodape}>
      <section className={style.fslab}>
        <h4>
          FSLab
        </h4>
        <p>
          Laboratório de Fábricas de Software
        </p>
      </section>

      <section className={style.ifro}>
        <div>
          <p>IFRO - Instituto Federal de Rondônia</p>
          <p>Endereço: Rodovia BR-174, Km 3 S/N Zona Urbana, Vilhena - RO, 76980-000</p>
          <p>Fone: (69) 2101-0700</p>
        </div>

      </section>
    </footer>
  )
}