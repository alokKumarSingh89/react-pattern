import React, { Component } from "react";
import { Switch } from "./switch";
// pass data in tree like structer
const ToggelContext = React.createContext();
class Toggle extends Component {
  static On = ({ children }) => (
    <ToggelContext.Consumer>
      {contextValue => (contextValue.on ? children : null)}
    </ToggelContext.Consumer>
  );
  static Off = ({ children }) => (
    <ToggelContext.Consumer>
      {contextValue => (contextValue.on ? null : children)}
    </ToggelContext.Consumer>
  );
  static Button = props => (
    <ToggelContext.Consumer>
      {contextValue => (
        <Switch on={contextValue.on} onClick={contextValue.toggle} {...props} />
      )}
    </ToggelContext.Consumer>
  );

  state = {
    on: false
  };
  toggle = () => {
    this.setState(
      ({ on }) => ({
        on: !on
      }),
      () => {
        this.props.onToggel(this.state.on);
      }
    );
  };
  render() {
    return (
      <ToggelContext.Provider
        value={{
          on: this.state.on,
          toggle: this.toggle
        }}
      >
        {this.props.children}
      </ToggelContext.Provider>
    );
  }
}

const UsageContext = ({
  onToggel = (...args) => console.log("onToggle", ...args)
}) => {
  return (
    <Toggle onToggel={onToggel}>
      <Toggle.On> This is button on </Toggle.On>{" "}
      <Toggle.Off> This is button off </Toggle.Off>
      <div>
        <Toggle.Button />
      </div>
    </Toggle>
  );
};
export default UsageContext;
