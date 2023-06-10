import * as React from 'react';
import './GamePage.css'

interface IGamePageProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function GamePage(props: IGamePageProps): JSX.Element | null {
  return (
    <div className='full-page'>
      <h1>GAME</h1>
    </div>
  );
}