import { ChevronDown, ShoppingCart } from 'react-feather';
import './Ope.scss';

interface OpeProps {
  description: string;
  price: number | null;
}

function Ope({ description, price }: OpeProps) {
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
        </div>
        <div className="ope_list_content" />
      </div>
    </div>
  );
}

export default Ope;
