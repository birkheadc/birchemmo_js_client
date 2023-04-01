import * as React from 'react';
import './WorkingWrapperContents.css'

interface IWorkingWrapperContentsProps {
  isWorking: boolean,
  children: React.ReactNode
}

/**
 * The contents of the `WorkingWrapper` that are made less opaque and uninteractable when `isWorking` is true.
 * @param {boolean} props.isWorking - Whether to fade out the contents.
 * @param {React.ReactNode} props.children - The contents to show.
 * @returns {JSX.Element}
 */
function WorkingWrapperContents(props: IWorkingWrapperContentsProps): JSX.Element {
  return (
    <div className='working-wrapper-contents'>
      {props.children}
    </div>
  );
}

export default WorkingWrapperContents;