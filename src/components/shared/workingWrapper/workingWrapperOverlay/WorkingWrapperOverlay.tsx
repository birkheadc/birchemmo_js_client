import * as React from 'react';
import Spinner from '../../spinner/Spinner';
import './WorkingWrapperOverlay.css'

interface IWorkingWrapperOverlayProps {
  isWorking: boolean
}

/**
 * The overlay that is shown only when `isWorking` is true.
 * @param {boolean} props.isWorking - Whether to show this element or not.
 * @returns {JSX.Element}
 */
function WorkingWrapperOverlay(props: IWorkingWrapperOverlayProps): JSX.Element {
  return (
    <div className='working-wrapper-overlay'>
      <Spinner />
    </div>
  );
}

export default WorkingWrapperOverlay;