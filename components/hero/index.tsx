import Image from "next/image";
import "./styles.scss";

export default function Hero(){
  return (<section className='hero'>
  <div className="hero-card-base hero-card">
    <h2>Produtos</h2>

    <div className="hero-detail">
      <Image
        src={'./icons/lab.svg'}
        alt={'Icon'}
        width={32}
        height={32}
      />
      <p>Vidrarias e Equipamentos</p>
    </div>
  </div>
  <div className="hero-card-base hero-car-high-light">
    <h2>Químicos</h2>

    <div className="hero-detail">
      <Image
        src={'./icons/bottle.svg'}
        alt={'Icon'}
        width={32}
        height={32}
      />
      <p>Materiais Químicos</p>
    </div>
  </div>
  <div className="hero-card-base hero-card">
    <h2>Laboratórios</h2>

    <div className="hero-detail">
      <Image
        src={'./icons/tool.svg'}
        alt={'Icon'}
        width={32}
        height={32}
      />
      <p>Ferramentas e utensílios</p>
    </div>
  </div>
</section>)
}