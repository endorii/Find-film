import './footer.scss';
import pixar from '../../../assets/images/sponsors/pixar.png';
import dreamworks from '../../../assets/images/sponsors/dreamworks.png';
import disney from '../../../assets/images/sponsors/disney.png';
import marvel from '../../../assets/images/sponsors/marvel.png';
import netflix from '../../../assets/images/sponsors/netflix.png';
import sony from '../../../assets/images/sponsors/sony.png';
import universal from '../../../assets/images/sponsors/universal.png';
import spotify from '../../../assets/images/sponsors/spotify.png';

import instagram from '../../../assets/images/social/instagram.svg';
import telegram from '../../../assets/images/social/telegram.svg';
import twitter from '../../../assets/images/social/twitter.svg';

const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <div className="footer_wrapper">
                    <div className="footer_contact">
                        <ul className="footer_contact-list">
                            <span>Contact us: </span>
                            <li className="footer_contact-list-item">
                                somemail@gmail.com
                            </li>
                            <li className="footer_contact-list-item">
                                <a href="tel:+380000000000">+380 00 00 00 000</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer_questions">
                        <ul className="footer_questions-list">
                            <li className="footer_questions-list-item">
                                <a href="/faq">FAQ</a>
                            </li>
                            |
                            <li className="footer_questions-list-item">
                                <a href="/help">Need help?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_social">
                        <ul className="footer_social-list">
                            <li className="footer_social-list-item">
                                <a href="/telegram">
                                    <img src={telegram} alt="telegram" />
                                </a>
                            </li>
                            <li className="footer_social-list-item">
                                <a href="/instagram">
                                    <img src={instagram} alt="instagram" />
                                </a>
                            </li>
                            <li className="footer_social-list-item">
                                <a href="/twitter">
                                    <img src={twitter} alt="twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_sponsors">
                    <ul className="footer_sponsors-list">
                        <li className="footer_sponsors-list-item">
                            <img src={disney} alt="disney" />
                        </li>
                        <li className="footer_sponsors-list-item">
                            <img src={netflix} alt="netflix" />
                        </li>
                        <li className="footer_sponsors-list-item">
                            <img src={spotify} alt="spotify" style={{height: '40px'}}/>
                        </li>
                        <li className="footer_sponsors-list-item">
                            <img src={marvel} alt="marvel" />
                        </li>
                        <li className="footer_sponsors-list-item">
                            <img src={pixar} alt="pixar" />
                        </li>
                        <li className="footer_sponsors-list-item">
                            <img src={dreamworks} alt="dream_works"  style={{height: '60px'}}/>
                        </li>
                        <li className="footer_sponsors-list-item">
                            <img src={universal} alt="universal" />
                        </li>
                        <li className="footer_sponsors-list-item">
                            <img src={sony} alt="sony"  style={{height: '50px'}}/>
                        </li>
                    </ul>
                </div>
                <div className="footer_copy">© Copyright 2022 </div>
            </div>
        </footer>
    )
}

export default Footer;