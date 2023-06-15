import * as React from 'react';
import './GameUI.css'
import IGameState from '../GameState/IGameState';

interface IGameUIProps {
  gameState: IGameState
}

/**
*
* @returns {JSX.Element | null}
*/
export default function GameUI(props: IGameUIProps): JSX.Element | null {

  console.log('PawnsState: ', props.gameState.pawnsState);

  return (
    <div>
      Game UI
    </div>
  );
}