import { ChevronDown } from 'react-feather';
import './OpeVirEm.scss';
import virmem from '../../../assets/virmsort.svg';

interface OpeVirEmProps {
  description: string;
  price: number | null;
}

function OpeVirEm({ description, price }: OpeVirEmProps) {
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
        </div>
        <div className="opeVirEm_list_content" />
      </div>
    </div>
  );
}

export default OpeVirEm;
