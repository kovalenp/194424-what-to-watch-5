import React, { PureComponent } from "react";

export const withActive = (Component, defaultActive = ``) => {
  return class Tabs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: defaultActive,
      };

      this.handleActiveChange = this.handleActiveChange.bind(this);
    }

    handleActiveChange(e, active) {
      e.preventDefault();
      this.setState({ active });
    }

    render() {
      return (
        <Component
          {...this.props}
          onActiveChange={this.handleActiveChange}
          active={this.state.active}
        />
      );
    }
  };
};
