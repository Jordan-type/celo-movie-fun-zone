import React from "react";
import FormInput from "../FormInput";
import FooterBg from "../../assets/images/hero_bg.jpg";


export default function Footer() {
    return (
        <footer
        className='footer'
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundPosition: 'center ',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'auto'}}>
            <div className='footer__container'>
                <div className='footer__row'>
                    <h4 className='footer__header'>Resourrces</h4>
                    <p tabIndex='6' className='footer__link fs-small'>Contact Us</p>
                    <p tabIndex='6' className='footer__link fs-small'>Forums</p>
                    <p tabIndex='6' className='footer__link fs-small'>Blog</p>
                    <p tabIndex='6' className='footer__link fs-small'>Help Center</p>
                </div>
                <div className='footer__row'>
                    <h4 className='footer__header'>My Account</h4>
                    <p tabIndex='6' className='footer__link fs-small'>Watchlist</p>
                    <p tabIndex='6' className='footer__link fs-small'>Collections</p>
                    <p tabIndex='6' className='footer__link fs-small'>User Guide</p>
                </div>
                <div className='footer__row'>
                    <h4 className='footer__header'>Terms of Use</h4>
                    <p tabIndex='6' className='footer__link fs-small'>Privacy Policy</p>
                    <p tabIndex='6' className='footer__link fs-small'>Security</p>
                    <p tabIndex='6' className='footer__link fs-small'>Collections</p>
                </div>
                <div className='footer__row'>
                    <h4 className='footer__header'>Newsletter</h4>
                    <p className="fs-small">Subscribe to our newsletter system now to get latest news from us</p>
                    <FormInput className={'form-input'} />
                </div>
                <div className="footer__row">
                    <p className="logo">logo</p>
                    <p>Copyright @ 2022</p>
                </div>
            </div>
        </footer>
    )
}