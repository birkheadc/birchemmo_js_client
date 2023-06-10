import * as React from 'react';
import './ProcessingWrapperContents.css'

interface IProcessingWrapperContentsProps {
  isProcessing: boolean,
  children: React.ReactNode
}

/**
 * The contents of the `ProcessingWrapper` that are made less opaque and uninteractable when `isProcessing` is true.
 * @param {boolean} props.isProcessing - Whether to fade out the contents.
 * @param {React.ReactNode} props.children - The contents to show.
 * @returns {JSX.Element}
 */
function ProcessingWrapperContents(props: IProcessingWrapperContentsProps): JSX.Element {
  return (
    <div className='processing-wrapper-contents'>
      {props.children}
    </div>
  );
}

export default ProcessingWrapperContents;