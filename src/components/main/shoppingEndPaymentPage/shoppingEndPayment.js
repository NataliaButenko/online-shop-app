import React, { Component } from "react";

export class ShoppingEndPayment extends Component {

  render() {
    return(
      <div className='row shoppingEndPayment'>
        <h4>
          Makeup beauty style доставляет товар по всей территории Украины двумя вариантами
        </h4>
        <section>
          <h5 className='titleUM'>Укрпочта</h5>
          <p>
            При доставке "Укрпочтой" ваш заказ будет отправлен на следующий день после заказа. Доставка "Укрпочтой" занимает
            от 1 до 3 дней. Оплатить заказ вы сможете наличными в отделении "Укрпочта" при получении.<br />
            Никаких скрытых платежей, оплаты услуг транспортной компании, платы за перевод денег и комиссий!
            Вы оплачиваете только сумму Вашего заказа.<br />
            <b>Обратите внимание!</b>
            <br />
            Заказы хранятся бесплатно на отделении в течение 5 дней, начиная с 6-го дня взимается оплата
            3 грн. 80 коп. за каждый день хранения. Эти услуги оплачиваете вы!<br />
            Получить заказ может только человек, указанный в  транспортной декларации в качестве получателя.
            При себе необходимо обязательно  иметь удостоверение личности!<br/>
            Заказы с доставкой через Укрпочту принимаются согласно графику работы перевозчика. График работы компании
            Вы можете найти на официальном сайте компании. Также Вы можете отследить заказ с помощью специального сервиса
            на сайте компании "Укрпочта".
          </p>
        </section>
        <section>
          <h5 className='titleNM '>Новая почта</h5>
          <p>
            Время доставки Вашей посылки компанией «Новая почта» в пункт назначения обычно составляет не более 3-х
            рабочих дней. Заказы, оформленные до 14:00, мы передаем в тот же день компании «Новая почта» для осуществления доставки.
            Заказы, оформленные после 14:00 - мы передаем компании "Новая Почта" на следующий день.
            После этого перевозчик уведомит Вас о точных сроках и времени прибытия товара в пункт назначения.<br />
            Оплатить товары Вы сможете наличными в отделении компании «Нова пошта».
            Никаких скрытых платежей, оплаты услуг транспортной компании, платы за перевод денег и комиссий!
            Вы оплачиваете только сумму Вашего заказа.<br />
            <b>Обратите внимание!</b>
            <br />
            При доставке до склада транспортной компании заказ хранится на пункте выдачи не более 5 рабочих дней, после чего отправляется обратно.
            Заказы с доставкой через «Нову пошту» принимаются согласно графику работы перевозчика. График работы компании «Нова пошта»
            Вы можете найти на официальном сайте компании. Также Вы можете отследить заказ с помощью специального сервиса на сайте компании.
          </p>
        </section>

      </div>

    )
  }
}
