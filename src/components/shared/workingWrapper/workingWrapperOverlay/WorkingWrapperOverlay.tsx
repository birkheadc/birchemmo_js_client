import * as React from 'react';
import './WorkingWrapperOverlay.css'

interface IWorkingWrapperOverlayProps {
  isWorking: boolean
}

function WorkingWrapperOverlay(props: IWorkingWrapperOverlayProps): JSX.Element {
  return (
    <div className='working-wrapper-overlay'>
      LOADING
    </div>
  );
}

export default WorkingWrapperOverlay;