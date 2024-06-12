import React from "react";

function Form() {
  return (
    <div className="box">
      <div className="box-contain">
        <h1>Basic Data Table</h1>
      </div>
      <div className="box-icon">
        <i class="fa-solid fa-minus"></i>
      </div>
      <div className="box-para">
        <p>
          This is default example from Material UI.it Demonstrates the use of
          Checkbox and clickable rows for selection,with a custom Toolbar.It
          uses the TableSortLabel Component to help style column headings.
        </p>
      </div>
      <div className="colour">
        <i class="fa-solid fa-palette"></i>
      </div>

      <div className="inner-box">
        <div className="flex">
          <h2>Nutrition</h2>
          <i id="wi-fi" class="fa-solid fa-wifi"></i>
        </div>

        <div className="main-table">
          <table className="tbl">
            <tr>
              <td>
                <input type="checkbox" id="checkbox" />
              </td>
              <th>Dessert (100g serving)</th>
              <th>
                <i id="arrow" class="fa-solid fa-arrow-up"></i>Calories
              </th>
              <th>Fat(g)</th>
              <th>Carbs(g)</th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox" />
              </td>
              <td>Frozen yoghurt</td>
              <td>159</td>
              <td>6</td>
              <td>24</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox" />
              </td>
              <td>Ice cream sandwich</td>
              <td>237</td>
              <td>9</td>
              <td>37</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox" />
              </td>
              <td>Eclair</td>
              <td>262</td>
              <td>16</td>
              <td>24</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox" />
              </td>
              <td>Cupcake</td>
              <td>305</td>
              <td>3.7</td>
              <td>67</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox" />
              </td>
              <td>Marshmallow</td>
              <td>318</td>
              <td>0</td>
              <td>81</td>
            </tr>
          </table>

          <div className="border"></div>
          <div className="footer">
            <h4>Rows per page:</h4>
            <h4>
              5 <i id="caret-down" class="fa-solid fa-caret-down"></i>
            </h4>
            <h4>1-5 of 13</h4>
            <i id="angel-left" class="fa-solid fa-angle-left"></i>
            <i id="angel" class="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div className="show">
          <div>
            <i class="fa-solid fa-angle-left"></i>
            <i id="angel" class="fa-solid fa-angle-right"></i>
          </div>
          <div>SHOW CODE</div>
        </div>
      </div>
    </div>
  );
}

export default Form;
