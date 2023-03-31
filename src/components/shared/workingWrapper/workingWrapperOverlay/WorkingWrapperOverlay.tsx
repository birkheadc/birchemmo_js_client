import * as React from 'react';
import Spinner from '../../spinner/Spinner';
import './WorkingWrapperOverlay.css'

interface IWorkingWrapperOverlayProps {
  isWorking: boolean
}

function WorkingWrapperOverlay(props: IWorkingWrapperOverlayProps): JSX.Element {
  return (
    <div className='working-wrapper-overlay'>
      <Spinner />
    </div>
  );
}

export default WorkingWrapperOverlay;