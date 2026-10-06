import { WHATSAPP_LABEL, WHATSAPP_URL } from '@/data';
import { OrderForm } from '@/components/OrderForm';

export function Order() {
  return (
    <section id="encomendas" className="order">
      <div className="container">
        <div className="order__info">
          <div className="eyebrow">肆 · ENCOMENDAS</div>
          <h2 className="section-title">Delivery, festas e eventos</h2>
          <p className="lead">
            Preencha o formulário e enviamos a confirmação pelo WhatsApp. Para festas e eventos, informe a data e a
            quantidade estimada de convidados.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="order__wa">
            <span aria-hidden="true">WA</span>
            {WHATSAPP_LABEL}
          </a>
          <div className="order__city">Goiânia · Goiás</div>
        </div>
        <OrderForm />
      </div>
    </section>
  );
}
