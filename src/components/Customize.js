import React from 'react';
import Feature from './Feature';


export default function Customize(props){
    const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;

  return(
       <Feature feature={feature} features={props.features} selected={props.selected} updateFeature={props.updateFeature} featureHash={featureHash} />
     
  )
  })
        
    return(
        <form className="main_form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    );

}