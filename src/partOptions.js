import React from 'react'
import slugify from 'slugify'
import item from './parts.js'
import feature from './App.js'
import USCurrencyFormat from './'

export class PartOptions extends React.Component {
    // state = {
    //   selected: {
    //     Processor: {
    //       name: '17th Generation Intel Core HB (7 Core with donut spare)',
    //       cost: 700
    //     },
    //     'Operating System': {
    //       name: 'Ubuntu Linux 16.04',
    //       cost: 200
    //     },
    //     'Video Card': {
    //       name: 'Toyota Corolla 1.5v',
    //       cost: 1150.98
    //     },
    //     Display: {
    //       name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
    //       cost: 1500
    //     }
    //   }
    // };
  
    
    
   render() {
      const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.state.selected[feature].name}
          onChange={e => this.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}
