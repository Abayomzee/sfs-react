import React, { Component } from "react";

class TableBody extends Component {
  state = {};
  render() {
    return (
      <tbody>
        <tr>
          <td>
            <div className="status_icon_good">
              <i className="fas fa-arrow-circle-up"></i>
              Doe
            </div>
          </td>

          <td>john@example.com</td>
          <td>John</td>
          <td>Doe</td>
        </tr>
        <tr>
          <td>
            <div className="status_icon_bad">
              <i className="fas fa-arrow-circle-down"></i>
              Moe
            </div>
          </td>

          <td>mary@example.com</td>
          <td>John</td>
          <td>Doe</td>
        </tr>
        <tr>
          <td>
            <div className="status_icon_good">
              <i className="fas fa-arrow-circle-up"></i>
              Dooley
            </div>
          </td>

          <td>july@example.com</td>
          <td>John</td>
          <td>Doe</td>
        </tr>
      </tbody>
    );
  }
}

export default TableBody;
