import * as React from 'react';
import './WorkingWrapperContents.css'

interface IWorkingWrapperContentsProps {
  isWorking: boolean,
  children: React.ReactNode
}

function WorkingWrapperContents(props: IWorkingWrapperContentsProps): JSX.Element {
  return (
    <div className='working-wrapper-contents'>
      {props.children}
    </div>
  );
}

export default WorkingWrapperContents;