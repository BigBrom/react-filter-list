import React from 'react';
import './css/list-item.css'

export default props => { 
  return (
    <div className="list-item">
      <section className="ist-item__description">
        <span className="list-item__title">Статус</span>
        <h4 className="list-item__result">{props.data.status}</h4>
      </section> 
      <section className="ist-item__description">
        <span className="list-item__title">Клиент</span>
        <h4 className="list-item__result">{props.data.сlient}</h4>
      </section> 
      <section className="ist-item__description">
        <span className="list-item__title">Банк</span>
        <h4 className="list-item__result">{props.data.bank}</h4>
      </section> 
      <section className="ist-item__description">
        <span className="list-item__title">Брокер</span>
        <h4 className="list-item__result">{props.data.broker}</h4>
      </section> 
      <section className="ist-item__description">
        <span className="list-item__title">Тип объекта</span>
        <h4 className="list-item__result">{props.data['object-type']}</h4>
      </section> 
      <section className="ist-item__description">
        <span className="list-item__title">Сумма кредита</span>
        <h4 className="list-item__result">{props.data.amount}</h4>
      </section> 
      <section className="ist-item__description">
        <span className="list-item__title">Дата изменения</span>
        <h4 className="list-item__result">{props.data.data}</h4>
      </section> 
    </div>
  )
}
