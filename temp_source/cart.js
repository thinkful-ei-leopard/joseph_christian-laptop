
import summary from 'cartSummary';
import React from 'react';
import features from 'app.js';
import USCurrencyFormat from 'app.js';

export class cart extends React.Component {


const total = Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost, 0
  );

render() {
  return (
        <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        </section>
  );
  }
}
  
