import { ChevronDown, ShoppingCart, Trash2 } from 'react-feather';
import './Ope.scss';
import { useAppSelector } from '../../../hooks/redux';

interface OpeProps {
  id: number | null;
  description: string;
  price: number | null;
  removeOperation: (id: number | null) => void;
}

function Ope({ id, description, price, removeOperation }: OpeProps) {
  const deleteToolIsOpen = useAppSelector((state) => state.deleteToolIsOpen);

  const handleRemove = () => {
    removeOperation(id);
  };
  return (
    <div className="ope_list">
      <div className="ope_list_visu">
        <div className="ope_list_left">
          <div className="ope_list_left_icon">
            <ShoppingCart />
          </div>
          <span className="ope_list_left_description">{description}</span>
        </div>
        <div className="ope_list_right">
          <span className="ope_list_right_price">{price} €</span>
          <ChevronDown className="ope_list_right_icon" />
          {deleteToolIsOpen && <Trash2 onClick={handleRemove} />}
        </div>
        <div className="ope_list_content" />
      </div>
    </div>
  );
}

export default Ope;
