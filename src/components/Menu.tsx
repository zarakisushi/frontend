import Image from 'next/image';
import { FLAVORS } from '@/data';

export function Menu() {
  return (
    <section id="cardapio" className="menu">
      <div className="container">
        <div className="menu__head">
          <div>
            <div className="eyebrow eyebrow--red">参 · CARDÁPIO</div>
            <h2 className="section-title">Push-Pop Sushi</h2>
          </div>
          <div className="menu__badge">10 PEÇAS POR TUBO</div>
        </div>

        <div className="menu__grid">
          {FLAVORS.map((f) => (
            <article key={f.id} className={f.special ? 'card card--special' : 'card'}>
              {f.special && <span className="card__tag">ESPECIAL</span>}
              <div className="card__media">
                <Image src={f.image} alt={f.name} fill sizes="(max-width: 600px) 100vw, (max-width: 1240px) 50vw, 300px" />
              </div>
              <div className="card__body">
                <h3>{f.name}</h3>
                <p lang="pt-BR">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
