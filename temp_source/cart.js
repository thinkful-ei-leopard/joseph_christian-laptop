
import summary from 'cartSummary';
import React from 'react';
import features from 'app.js';
import USCurrencyFormat from 'app.js';

export class cart extends React.Component {


const total = Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost,
    0
  );

  return (
    <div className="App">
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
        </form>
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
      </main>
    </div>
  );
  }
  
