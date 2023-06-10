import * as React from 'react';
import './Spinner.css'

interface ISpinnerProps {

}

/**
 * Simply displays a rotating spinner to imply processing. Takes up to 60% of the given space in a perfect circle.
 * @returns {JSX.Element}
 */
function Spinner(props: ISpinnerProps): JSX.Element {
  return (
    <div className='spinner'>
      
    </div>
  );
}

export default Spinner;