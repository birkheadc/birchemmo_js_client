import * as React from 'react';
import './WorkingWrapper.css'
import WorkingWrapperContents from './workingWrapperContents/WorkingWrapperContents';
import WorkingWrapperOverlay from './workingWrapperOverlay/WorkingWrapperOverlay';

interface IWorkingWrapperProps {
  isWorking: boolean,
  children: React.ReactNode
}

function WorkingWrapper(props: IWorkingWrapperProps): JSX.Element {
  return (
    <div className={'working-wrapper ' + (props.isWorking ? 'working' : 'not-working')}>
      <WorkingWrapperOverlay isWorking={props.isWorking} />
      <WorkingWrapperContents isWorking={props.isWorking} children={props.children} />
    </div>
  );
}

export default WorkingWrapper;