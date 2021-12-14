import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'store/filterSlice';

import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.filterContact);
  console.log(value);
  const dispatch = useDispatch();
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
