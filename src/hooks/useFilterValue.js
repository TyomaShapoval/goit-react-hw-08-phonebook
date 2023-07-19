import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filter/selectors';

export const useFilterValue = () => useSelector(selectFilterValue);