import { useDispatch, useSelector } from 'react-redux'
import { toggleFight } from '../../../actions/actions';
import { selectArea } from '../../../reducers/areaSlice'

export default function FightBtn() {
    const area = useSelector(selectArea);
    const dispatch = useDispatch();

  return (
    <button onClick={() => toggleFight(dispatch)}>
      {area.fighting ? 'pause' : 'fight'}
    </button>
  )
}
