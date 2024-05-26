import { ChevronDown, ChevronUp, ToggleLeft, Trash2 } from 'react-feather';
import './OpeVirRe.scss';
import { useState } from 'react';
import virmre from '../../../assets/virmentr_white.svg';
import { useAppSelector } from '../../../hooks/redux';

interface OpeVirReProps {
  id: number | null;
  description: string;
  price: number | null;
  dateEffect: string;
  dateCompt: string;
  libel: string;
  removeOperation: (id: number | null) => void;
}

function OpeVirRe({
  id,
  description,
  price,
  dateEffect,
  dateCompt,
  libel,
  removeOperation,
}: OpeVirReProps) {
  const [contentIsOpen, setContentIsOpen] = useState(false);
  const deleteToolIsOpen = useAppSelector((state) => state.deleteToolIsOpen);

  const handleRemove = () => {
    removeOperation(id);
  };

  return (
    <div className="opeVirRe_list">
      <div className="opeVirRe_list_visu">
        <div className="opeVirRe_list_left">
          <div className="opeVirRe_list_left_icon">
            <img src={virmre} alt="" />
          </div>
          <span className="opeVirRe_list_left_description">{description}</span>
        </div>
        <div className="opeVirRe_list_right">
          <span className="opeVirRe_list_right_price">{price} €</span>
          {contentIsOpen ? (
            <ChevronUp
              className="opeVirRe_list_right_icon"
              onClick={() => {
                setContentIsOpen(false);
              }}
            />
          ) : (
            <ChevronDown
              className="opeVirRe_list_right_icon"
              onClick={() => {
                setContentIsOpen(true);
              }}
            />
          )}
          {deleteToolIsOpen && <Trash2 onClick={handleRemove} />}
        </div>
      </div>

      {contentIsOpen && (
        <div className="opeVirRe_list_content_container">
          <div className="opeVirRe_list_content">
            <div className="opeVirRe_list_content_part1">
              <h3>Détail de l&apos;opération</h3>
              <span className="opeVirRe_list_content_part1_text">
                Transaction effectuée le: {dateEffect}
              </span>
              <span className="opeVirRe_list_content_part1_text">
                Compatabilisée à la date du: {dateCompt}
              </span>
            </div>
            <div className="opeVirRe_list_content_part2">
              <h3>Libellé complet</h3>
              <span className="opeVirRe_list_content_part1_text">{libel}</span>
            </div>
            <div className="opeVirRe_list_content_part3">
              <h3>Catégorie</h3>
              <span className="opeVirRe_list_content_part1_text">
                Virement émis
              </span>
            </div>
            <div className="opeVirRe_list_content_part4">
              <h3>Pointer cette opération</h3>
              <ToggleLeft />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpeVirRe;
