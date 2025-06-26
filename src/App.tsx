import "./scss/App.scss";
import MainImg from "./assets/images/main-img.svg";
import { Container, Modal } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Container>
        <div className="row vh-100 align-items-center justify-content-center flex-wrap-reverse">
          <div className="col-12 col-xl-8">
            <h1 className="fs-1 text-center text-xl-start text-wrap">
              Технология выпуска на линию
            </h1>
            <p id="subtitle" className="text-center text-xl-start">
              КИС Автопарк: набор приложений, объединённых одной учётной
              системой
            </p>
            <div className="row gap-3 w-100 mx-auto">
              <a
                className="col-12 col-xl-4 btn btn-primary p-3"
                href="#"
                id="pagelink"
                onClick={() => setShow(!show)}
              >
                Онлайн демонстрация
              </a>
              <a
                className="col-12 col-xl-5 btn btn-primary bg-transparent border border-primary text-primary px-5 py-3"
                href="#"
                id="pagelink"
                onClick={() => setShow(!show)}
              >
                Скачать презентацию
              </a>
            </div>
          </div>
          <div className="col-xl-4 d-flex justify-content-center">
            <img
              src={MainImg}
              alt="Main Image"
              className="w-100"
              id="pageimage"
            />
          </div>
        </div>
      </Container>
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => setShow(!show)}
        className="requestModal"
      >
        <div className="modal-content" id="request-modal">
          <h2>Оставь заяку</h2>
          <p id="sub">
            Укажите номер телефона и e-mail для связи, вышлем презентацию и
            свяжемся в удобное для Вас время
          </p>
          <div className="row" id="request-form">
            <div className="col-12">
              <input
                type="text"
                className="form-control modal-input"
                placeholder="Имя"
                aria-label="Имя"
              />
            </div>
            <div className="col-12 col-xl">
              <input
                type="tel"
                className="form-control modal-input"
                placeholder="Телефон"
                aria-label="Телефон"
              />
            </div>
            <div className="col-12 col-xl">
              <input
                type="email"
                className="form-control modal-input"
                placeholder="E-mail"
                aria-label="E-mail"
              />
            </div>
          </div>
          <a
            href="#"
            className="btn btn-primary"
            id="request-btn"
            onClick={() => setShow(!show)}
          >
            Отправить
          </a>
          <p id="accepts">
            Нажимая кнопку «Получить промокод» вы соглашаетесь с
            <a href="#">Пользовательским соглашением</a> и
            <a href="#">Политикой конфиденциальности</a>
          </p>
        </div>
      </Modal>
    </>
  );
};
export default App;
