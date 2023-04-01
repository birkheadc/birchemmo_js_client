import * as React from 'react';
import './WorkingWrapper.css'
import WorkingWrapperContents from './workingWrapperContents/WorkingWrapperContents';
import WorkingWrapperOverlay from './workingWrapperOverlay/WorkingWrapperOverlay';

interface IWorkingWrapperProps {
  isWorking: boolean,
  children: React.ReactNode
}

/**
 * A wrapper that allows toggling a working overlay on or off.
 * When `isWorking` is true, the contents becomes less opaque and uninteractable, and a loading spinner is displayed over it.
 * @param {boolean} props.isWorking - Whether the overlay should be shown or not.
 * @param {React.ReactNode} props.children - The contents to show when not working. `props.children` is automatically populated with whatever is placed inside this JSX element.
 * @returns 
 */
function WorkingWrapper(props: IWorkingWrapperProps): JSX.Element {
  return (
    <div className={'working-wrapper ' + (props.isWorking ? 'working' : 'not-working')}>
      <WorkingWrapperOverlay isWorking={props.isWorking} />
      <WorkingWrapperContents isWorking={props.isWorking} children={props.children} />
    </div>
  );
}

export default WorkingWrapper;