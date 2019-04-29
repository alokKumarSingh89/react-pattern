import React, { Component } from "react";
import { Switch } from "./switch";

class Toggle extends Component {
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Button = ({ on, toggle, ...props }) => (
    <Switch on={on} onClick={toggle} {...props} />
  );

  state = {
    on: false
  };
  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggel(this.state.on);
      }
    );
  };
  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    );
  }
}

const Usage = ({
  onToggel = (...args) => console.log("onToggle", ...args)
}) => {
  return (
    <Toggle onToggel={onToggel}>
      <Toggle.On>This is button on</Toggle.On>
      <Toggle.Off>This is button off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
};
export default Usage;
