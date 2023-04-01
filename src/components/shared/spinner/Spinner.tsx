import * as React from 'react';
import './Spinner.css'

interface ISpinnerProps {

}

/**
 * Simply displays a rotating spinner to imply working. Takes up to 60% of the given space in a perfect circle.
 * @returns 
 */
function Spinner(props: ISpinnerProps): JSX.Element {
  return (
    <div className='spinner'>
      
    </div>
  );
}

export default Spinner;