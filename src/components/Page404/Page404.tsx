import { Link } from 'react-router-dom';
import './Page404.scss';

function Page404() {
  return (
    <div className="page404">
      <Link to="/SocieteGeneral_Profil">
        <button type="button">GO HOME</button>
      </Link>
    </div>
  );
}

export default Page404;
