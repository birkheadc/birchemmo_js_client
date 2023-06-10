import * as React from 'react';
import './ProcessingWrapper.css'
import ProcessingWrapperOverlay from './processingWrapperOverlay/ProcessingWrapperOverlay';
import ProcessingWrapperContents from './processingWrapperContents/ProcessingWrapperContents';

interface IProcessingWrapperProps {
  isProcessing: boolean,
  children: React.ReactNode
}

/**
 * A wrapper that allows toggling a processing overlay on or off.
 * When `isProcessing` is true, the contents becomes less opaque and uninteractable, and a loading spinner is displayed over it.
 * @param {boolean} props.isProcessing - Whether the overlay should be shown or not.
 * @param {React.ReactNode} props.children - The contents to show when not processing. `props.children` is automatically populated with whatever is placed inside this JSX element.
 * @returns {JSX.Element}
 */
function ProcessingWrapper(props: IProcessingWrapperProps): JSX.Element {
  return (
    <div className={'processing-wrapper ' + (props.isProcessing ? 'processing' : 'not-processing')}>
      <ProcessingWrapperOverlay isProcessing={props.isProcessing} />
      <ProcessingWrapperContents isProcessing={props.isProcessing} children={props.children} />
    </div>
  );
}

export default ProcessingWrapper;