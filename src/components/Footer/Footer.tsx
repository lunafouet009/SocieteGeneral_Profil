import { Facebook, HelpCircle, Instagram, MapPin } from 'react-feather';
import './Footer.scss';
import Xlogo from '../../assets/Xlogo_white.svg';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_part1">
        <HelpCircle />
        <span className="footer_part1_el1">Questions fréquentes</span>
        <MapPin />
        <span className="footer_part1_el2">Trouver une agence</span>
        <span className="footer_part1_el3">Autres sites SG</span>
        <div className="footer_part1_sn">
          <Facebook />
          <Instagram />
          <img className="footer_part1_sn_xlogo" src={Xlogo} alt="" />
        </div>
      </div>
      <div className="footer_part2">
        <img src={logo} alt="" />
        <span>Sécurité</span>
        <span>Nos engagements</span>
        <span>Gestion des Cookies</span>
        <span>Données personnelles</span>
        <span>Documentation et Tarifs</span>
        <span>Résilier une prestation</span>
        <span>Informations légales</span>
        <span>Accèssibilité Numérique (partiellement conforme)</span>

      </div>
    </div>
  );
}

export default Footer;
