import { ChevronDown, Trash2 } from 'react-feather';
import './OpeVirEm.scss';
import virmem from '../../../assets/virmsort.svg';
import { useAppSelector } from '../../../hooks/redux';

interface OpeVirEmProps {
  id: number | null;
  description: string;
  price: number | null;
  removeOperation: (id: number | null) => void;
}

function OpeVirEm({ id, description, price, removeOperation }: OpeVirEmProps) {
  const deleteToolIsOpen = useAppSelector((state) => state.deleteToolIsOpen);

  const handleRemove = () => {
    removeOperation(id);
  };
  return (
    <div className="opeVirEm_list">
      <div className="opeVirEm_list_visu">
        <div className="opeVirEm_list_left">
          <div className="opeVirEm_list_left_icon">
            <img src={virmem} alt="" />
          </div>
          <span className="opeVirEm_list_left_description">{description}</span>
        </div>
        <div className="opeVirEm_list_right">
          <span className="opeVirEm_list_right_price">{price} €</span>
          <ChevronDown className="opeVirEm_list_right_icon" />
          {deleteToolIsOpen && <Trash2 onClick={handleRemove} />}
        </div>
        <div className="opeVirEm_list_content" />
      </div>
    </div>
  );
}

export default OpeVirEm;
