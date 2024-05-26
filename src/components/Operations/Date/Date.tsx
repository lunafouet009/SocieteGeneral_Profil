import { ChevronDown, ShoppingCart, Trash2 } from 'react-feather';
import './Date.scss';
import { useAppSelector } from '../../../hooks/redux';

interface DateProps {
  id: number | null;
  date: string;
  removeOperation: (id: number | null) => void;
}

function Date({ id, date, removeOperation }: DateProps) {
  const deleteToolIsOpen = useAppSelector((state) => state.deleteToolIsOpen);

  const handleRemove = () => {
    removeOperation(id);
  };
  return (
    <div className="date">
      <h3 className="date">{date}</h3>
      {deleteToolIsOpen && <Trash2 onClick={handleRemove} />}
    </div>
  );
}

export default Date;
