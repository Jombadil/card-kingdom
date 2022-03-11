import React from 'react'
import { useDispatch } from 'react-redux'
import { handleKingdomCardUpgrade } from '../../../actions/actions';

export default function KingdomCard(props) {
  
  const dispatch = useDispatch();


  return (
    <div style={{backgroundColor: 'white', padding: '10px', margin: '10px', borderRadius: '2px', color: 'darkblue'}}>
        {props.name}: {props.level}<br />
        <button disabled={props.enabled} onClick={(event) => handleKingdomCardUpgrade(dispatch, event, props.cost, props.id)}>Upgrade</button><br />
        {props.cost}
    </div>
  )
}

