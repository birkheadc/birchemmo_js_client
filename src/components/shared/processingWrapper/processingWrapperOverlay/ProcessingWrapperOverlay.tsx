import * as React from 'react';
import Spinner from '../../spinner/Spinner';
import './ProcessingWrapperOverlay.css'

interface IProcessingWrapperOverlayProps {
  isProcessing: boolean
}

/**
 * The overlay that is shown only when `isProcessing` is true.
 * @param {boolean} props.isProcessing - Whether to show this element or not.
 * @returns {JSX.Element}
 */
function ProcessingWrapperOverlay(props: IProcessingWrapperOverlayProps): JSX.Element {
  return (
    <div className='processing-wrapper-overlay'>
      <Spinner />
    </div>
  );
}

export default ProcessingWrapperOverlay;