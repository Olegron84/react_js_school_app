import React, { useState } from "react";
import Back from "../../components/Back/Back";
import "./contacts.css";

const Contacts = () => {
  const [message, setMessage] = useState("");
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.653419833835!2d36.340143576126145!3d50.01785091841813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412709dea72f2a97%3A0x324e0d27ba282882!2z0KXQsNGA0LrRltCy0YHRjNC60LAg0LfQsNCz0LDQu9GM0L3QvtC-0YHQstGW0YLQvdGPINGI0LrQvtC70LAgSeKAk0lJSSDRgdGC0YPQv9C10L3RltCyIOKEliAxNDA!5e0!3m2!1suk!2sua!4v1690457055281!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  const phoneNumber = "+380577251651";
  const formSpreeEndpoint = "https://formspree.io/f/xrgwezpa";

  const handleTextareaFocus = () => {
    if (message === "Напишіть ваше повідомлення...") {
      setMessage("");
    }
  };

  const handleTextareaBlur = () => {
    if (message.trim() === "") {
      setMessage("Напишіть ваше повідомлення...");
    }
  };
  return (
    <>
      <Back title="Наші контакти" />
      <section className="contacts">
        <div className="container shadow flexSB">
          <div className="contacts-left row">
            <iframe src={map} title="Наш заклад на Google картах"></iframe>
          </div>
          <div className="contacts-right row">
            <h1 className="contacts-title">
              КЗ "Харківський ліцей № 140" Харківської міської ради
            </h1>
            <ul className="items grid3">
              <li className="box">
                <h4>Адреса:</h4>
                <p>61135, м.Харків, вул.Гвардійців Широнінців, 61</p>
              </li>
              <li className="box">
                <h4>Email:</h4>
                <p>sch140@kharkivosvita.net.ua</p>
              </li>
              <li className="box">
                <h4>Телефон:</h4>
                <a href={`tel:${phoneNumber}`}>+380577251651</a>
              </li>
            </ul>

            <form action={formSpreeEndpoint} method="POST">
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  placeholder="Прізвище Ім'я"
                  required
                />
                <input
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  name="_replyto"
                  placeholder="Ваша електронна пошта"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Тема повідомлення"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон у форматі +380ХХХХХХХХХ"
                pattern="^\+380\d{9}$"
                title="Введіть номер телефону у форматі +380ХХХХХХХХХ "
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={handleTextareaFocus}
                onBlur={handleTextareaBlur}
                placeholder="Напишіть ваше повідомлення..."
              ></textarea>
              <div className="center-button">
                <button type="submit" className="primary-btn">
                  Відправити повідомлення
                </button>
              </div>
            </form>

            <h3>Приєднуйтесь до нас у соціальній мережі</h3>
            <a
              href="https://www.facebook.com/groups/2421366434855904/"
              target="_blank"
              rel="noopener noreferrer"
              className="head_icon_link"
            >
              {" "}
              <span>FACEBOOK</span>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
