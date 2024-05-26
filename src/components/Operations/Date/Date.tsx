import { ChevronDown, ShoppingCart } from 'react-feather';
import './Date.scss';

interface DateProps {
  date: string;
}

function Date({ date }: DateProps) {
  return <h3 className="date">{date}</h3>;
}

export default Date;
