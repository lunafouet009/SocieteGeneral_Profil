import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  actionAddOp,
  actionChangeOperation,
} from '../../../store/reducer/operation';
import './OpeAdd.scss';

function OpeAdd() {
  const dispatch = useAppDispatch();

  const { type, description, price, dateEffect, dateCompt, libel } =
    useAppSelector((state) => state.input);

  const id = useAppSelector((state) => state.operations.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      actionAddOp({
        operation: {
          id,
          type,
          description,
          price,
          dateEffect,
          dateCompt,
          libel,
        },
      })
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(
      actionChangeOperation({
        name: name as
          | 'type'
          | 'description'
          | 'price'
          | 'dateEffect'
          | 'dateCompt'
          | 'libel',
        value,
      })
    );
  };

  return (
    <div className="opeAdd">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type-select"
            value={type}
            onChange={handleChange}
          >
            <option value="date">Date</option>
            <option value="shop">Course</option>
            <option value="income">Virement entrant</option>
            <option value="outgoing">Virement sortant</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="CARTE X1854 24/05 E.LECLERC"
            value={description}
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="price">Prix</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="12,00"
            value={price || ''}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="date_effect">Date transaction</label>
          <input
            type="string"
            name="dateEffect"
            id="dateEffect"
            placeholder="05/04/2024"
            value={dateEffect}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="date_compt">Date comptabilisé</label>
          <input
            type="string"
            name="dateCompt"
            id="dateCompt"
            placeholder="05/04/2024"
            value={dateCompt}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="libel">Libellé</label>
          <input
            type="string"
            name="libel"
            id="libel"
            placeholder="Libellé de l'opération"
            value={libel}
            onChange={handleChange}
            required
          />
        </fieldset>

        <button type="submit">Valider</button>
        <Link className="link" to="/SocieteGeneral_Profil/history">
          <button type="button">Retour</button>
        </Link>
      </form>
    </div>
  );
}

export default OpeAdd;
