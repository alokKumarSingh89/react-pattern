import React from "react";
import "./switch.css";

export class Switch extends React.Component {
  render() {
    const { on, className = "", ...props } = this.props;
    const btnClassName = [
      className,
      "toggle-btn",
      on ? "toggle-btn-on" : "toggle-btn-off"
    ]
      .filter(Boolean)
      .join(" ");
    return (
      <div>
        <input
          type="checkbox"
          className="toggel-input"
          checked={on}
          onChange={() => {}}
        />
        <button className={btnClassName} arial-label="Toggle" {...props} />
      </div>
    );
  }
}
