import React, { Component } from 'react';
import './css/filters.css'

class Filters extends Component {

  f = () => {
    this.props.aplyFilters({
      client: this.refs.client,
      broker: this.refs.broker,
      status: this.refs.status
    })
  }
  render() {
    return (
      <div className="filters">
        <input className="filters__input" type='text' placeholder="ФИО клиента" ref="client" onChange={this.f} />
        <select className="filters__select" onChange={this.f} ref="status">
          <option>Статус</option>
          <option>Новая</option>
          <option>Возвращена на доработку</option>
          <option>Кредитный договор подписан</option>
          <option>Отправлена в банк</option>
        </select>
        <select className="filters__select" onChange={this.f} ref="broker">
          <option>Брокер</option>
          <option>Иванов Иван Иванович</option>
          <option>Петров Артем Викторович</option>
          <option>Медведева Инна Васильевна</option>
          <option>Смирнова Людмила Петровна</option>
        </select>
      </div>
    )
  }
}
export default Filters