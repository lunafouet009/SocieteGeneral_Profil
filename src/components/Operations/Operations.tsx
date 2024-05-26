import { useEffect } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  Clock,
  Info,
  MoreVertical,
} from 'react-feather';
import './Operations.scss';
import { Link } from 'react-router-dom';
import Ope from './Ope/Ope';
import Date from './Date/Date';
import OpeVirEm from './OpeVirEm/OpeVirEm';
import OpeVirRe from './OpeVirRe/OpeVirRe';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  actionRemoveOp,
  actionSwitchDeleteTool,
} from '../../store/reducer/operation';

function Operations() {
  const dispatch = useAppDispatch();
  const operations = useAppSelector((state) => state.operations);

  const removeOperation = (id: number) => {
    dispatch(actionRemoveOp({ id }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    dispatch(actionSwitchDeleteTool());
  };
  return (
    <div className="operation">
      <div className="operation_header">
        <Link to="/SocieteGeneral_Profil" className="operation_header_link">
          <div className="operation_header_left">
            <ArrowLeft />
            <span className="operation_header_left_return">Retour</span>
          </div>
        </Link>

        <div className="operation_header_right">
          <MoreVertical />
        </div>
      </div>
      <h1 className="operation_title">Mes opérations</h1>
      <div className="operation_container">
        <div className="operation_sold">
          <div className="operation_sold_account">
            <h2 className="operation_sold_account_title">
              Solde indicatif de mon compte
            </h2>
            <Info className="operation_sold_account_info" />
          </div>
          <div className="operation_sold_description">
            <div className="operation_sold_description_left">
              <h3 className="operation_sold_description_left_title">
                Compte Bancaire
              </h3>
              <span className="operation_sold_description_left_description">
                N° ••••9407
              </span>
            </div>
            <div className="operation_sold_description_right">
              <span>3 458,87€</span>
              <ChevronDown />
            </div>
          </div>
        </div>
        <div className="operation_soldIC">
          <div className="operation_soldIC_account">
            <div className="operation_soldIC_account_container">
              <h2 className="operation_soldIC_account_container_title">
                Mes opérations à venir
              </h2>
              <Info
                className="operation_soldIC_account_container_info"
                onClick={handleClick}
              />
            </div>
            <span className="operation_soldIC_account_total">0,00€</span>
          </div>
          <div className="operation_soldIC_description">
            <div className="operation_soldIC_description_left">
              <Clock className="operation_soldIC_description_left_title" />
              <span className="operation_soldIC_description_left_description">
                Virements et prélèvements à venir
              </span>
            </div>
            <div className="operation_soldIC_description_right">0,00 €</div>
          </div>
        </div>
        <div className="operation_list">
          <div className="operation_list_container">
            <h2 className="operation_list_container_title">
              Liste de mes opérations
            </h2>
            <Link
              to="/SocieteGeneral_Profil/operation"
              className="operation_list_container_link"
            >
              <Info className="operation_list_container_info" />
            </Link>
          </div>
        </div>
        <div className="operations">
          {operations.map((operation) => {
            switch (operation.type) {
              case 'date':
                return (
                  <Date
                    key={operation.id}
                    id={operation.id}
                    date={operation.description}
                    removeOperation={removeOperation}
                  />
                );
              case 'shop':
                return (
                  <Ope
                    key={operation.id}
                    id={operation.id}
                    description={operation.description}
                    price={operation.price}
                    removeOperation={removeOperation}
                  />
                );
              case 'income':
                return (
                  <OpeVirEm
                    key={operation.id}
                    id={operation.id}
                    description={operation.description}
                    price={operation.price}
                    removeOperation={removeOperation}
                  />
                );
              case 'outgoing':
                return (
                  <OpeVirRe
                    key={operation.id}
                    id={operation.id}
                    description={operation.description}
                    price={operation.price}
                    dateEffect={operation.dateEffect}
                    dateCompt={operation.dateCompt}
                    libel={operation.libel}
                    removeOperation={removeOperation}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Operations;
