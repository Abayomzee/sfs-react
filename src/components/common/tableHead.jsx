import React, { Component } from "react";

class TableHead extends Component {
  state = {};
  render() {
    return (
      <thead>
        <tr>
          <th>KIND</th>
          <th>AMOUNT</th>
          <th>PLAN</th>
          <th>DATE</th>
        </tr>
      </thead>
    );
  }
}

export default TableHead;
