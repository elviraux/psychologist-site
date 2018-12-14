import React from "react";
import "normalize.css";
import photo from "./images/ph.png";
import "react-tabs/style/react-tabs.css";
import "gestalt/dist/gestalt.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Icon, Modal } from "gestalt";
import "styles/base/_main.sass"; // Global styles
import About from "./components/About";
import Trainings from "./components/Trainings";

class App extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      open: false
    };
  }

  handleModalClose() {
    this.setState({ open: false });
  }
  handleModalOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div className="main-page">
          <div>
            <span className="title">О</span>
            <span className="subtitle">льга</span>
            <span className="title">Ф</span>
            <span className="subtitle">атхи </span>
            <span />
          </div>
          <Button
            onClick={this.handleModalOpen.bind(this)}
            text="Записаться на тренинг"
            color="red"
            inline
          />
          {/* {open && (
            <Modal
              accessibilityCloseLabel="close"
              accessibilityModalLabel="View default padding and styling"
              heading="Запись"
              onDismiss={this.handleModalClose.bind(this)}
              size="sm"
            >
              <Button />
              <Button />
              <Button />
            </Modal>
          )} */}
          <Tabs>
            <TabList>
              {/* <Tab>Главная</Tab> */}
              <Tab>Обо мне</Tab>
              <Tab>Тренинги</Tab>
              <Tab>Контакты</Tab>
            </TabList>

            {/* <TabPanel>
        <Button text="Записаться на тренинг" color="red" inline />
      </TabPanel> */}
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <Trainings />
            </TabPanel>
            <TabPanel>
              <br />
              <div className="tabcontent">
                <Icon
                  icon="envelope"
                  accessibilityLabel="envelope"
                  color="gray"
                  inline
                />{" "}
                ogmalova@mail.ru
              </div>
            </TabPanel>

            <TabList>
              {/* <Tab>Главная</Tab> */}
              <Tab>Обо мне</Tab>
              <Tab>Тренинги</Tab>
              <Tab>Контакты</Tab>
            </TabList>
          </Tabs>
          <br />
          <br />
          <br />
          <br />
          <Button
            onClick={this.handleModalOpen.bind(this)}
            text="Записаться на тренинг"
            color="red"
            inline
          />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
