import { MoreVertical } from 'react-feather';
import { Link } from 'react-router-dom';
import './Home.scss';
import cb from '../../assets/cc.png';

function Home() {
  return (
    <div className="home">
      <h3 className="home_title">Mes comptes</h3>
      <div className="home_bank">
        <h2 className="home_bank_title">COMPTES BANCAIRES</h2>
        <Link to="/history" className="home_bank_link">
          <div className="home_bank_part1">
            <div className="home_bank_part1_color" />
            <div className="home_bank_part1_top">
              <div className="home_bank_part1_top_left">
                <h4>Compte Bancaire</h4>
                <span>•••• 9407</span>
              </div>
              <MoreVertical className="home_bank_part1_top_right" />
            </div>
            <span className="home_bank_part1_bottom">3 458,87 €</span>
          </div>
        </Link>

        <div className="home_bank_part2">
          <img className="home_bank_part2_img" src={cb} alt="" />
          <div className="home_bank_part2_cb">
            <span className="home_bank_part2_cb_text1">CB Visa Evolution</span>
            <span className="home_bank_part2_cb_text2">•••• 1892</span>
          </div>
        </div>
      </div>

      <div className="home_saving">
        <div className="home_saving_title">
          <h2 className="home_saving_title_text">COMPTES D&apos;ÉPARGNE</h2>
          <h2 className="home_saving_title_price">0,00 €</h2>
        </div>

        <div className="home_saving_part1">
          <div className="home_saving_part1_color" />
          <div className="home_saving_part1_top">
            <div className="home_saving_part1_top_left">
              <h4>Livret A</h4>
              <span>•••• 9407</span>
            </div>
            <MoreVertical className="home_saving_part1_top_right" />
          </div>
          <span className="home_saving_part1_price">0,00 €</span>
          <div className="home_saving_part1_progress" />
          <span className="home_saving_part1_bottom">
            Plafond des versements: 22 950,00 €
          </span>
        </div>

        <div className="home_saving_part2">
          <div className="home_saving_part2_color" />
          <div className="home_saving_part2_top">
            <div className="home_saving_part2_top_left">
              <h4>Livret Dévelop. Durable</h4>
              <span>•••• 9407</span>
            </div>
            <MoreVertical className="home_saving_part2_top_right" />
          </div>
          <span className="home_saving_part2_price">0,00 €</span>
          <div className="home_saving_part2_progress" />
          <span className="home_saving_part2_bottom">
            Plafond des versements: 12 000,00 €
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
