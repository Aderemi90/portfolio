import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
function Footer() {
    return (
        <footer>
            <div className="copy"><p>&copy; {new Date().getFullYear()} Blackhost</p></div>
            <div className="footlink">
            <a href="https://www.linkedin.com/in/aderemi-oje-b-sc-dip-cii-in-view-45946810a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footlink" />
                </a>
                <a href="https://web.facebook.com/IMEREDA" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="footlink"/>
                </a>
                <a href="https://x.com/REMITE90" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="footlink" />
                </a>
                <a href="https://www.instagram.com/remii_black/" target="_blank" rel="noopener noreferrer">
                    < FaInstagram className="footlink" />
                </a>
                <a href="mailto:remoj2003@yahoo.com">
                    < FaEnvelope   className="footlink"/>
                </a>
          </div>
        </footer>
    )
}

export default Footer
