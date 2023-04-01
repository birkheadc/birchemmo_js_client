import * as React from 'react';
import ApiResult from '../../../types/apiResult/ApiResult';
import './ApiResultDisplay.css'

interface IApiResultDisplayProps {
  apiResult: ApiResult<any> | null
}

/**
 * Displays a message for a given ApiResult. If the ApiResult is null or the ApiResult does not contain a message, nothing is displayed.
 * @param {ApiResult<any> | null} props.apiResult - The ApiResult to display the message of.
 * @returns {JSX.Element | null}
 */
function ApiResultDisplay(props: IApiResultDisplayProps): JSX.Element | null {

  if (props.apiResult == null) return null;
  if (props.apiResult.message == null) return null;

  return (
    <span className={'api-result-display ' + (props.apiResult.wasSuccess ? 'clr-green' : 'clr-red')}>{props.apiResult.message}</span>
  );
}

export default ApiResultDisplay;