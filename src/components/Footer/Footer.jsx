import React from "react";
import s from "./Footer.module.css";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { PiWhatsappLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <h2 className={s.title}>Contact</h2>
        <div className={s.contacts}>
          <div className={s.block}>
            <div className={s.item}>
              <h3 className={s.heading}>Phone</h3>
              <a href="tel:+499999999999" className={s.text} target="_blank">
                +49 000 111 22 333
              </a>
            </div>
            <div className={`${s.item} ${s.itemRight}`}>
              <h3 className={s.heading}>Socials</h3>
              <div className={s.socials}>
                <a
                  href="https://www.instagram.com/"
                  className={s.socials}
                  target="_blank"
                >
                  <BiLogoInstagramAlt />
                </a>
                <a
                  href="https://www.whatsapp.com/"
                  className={s.socials}
                  target="_blank"
                >
                  <PiWhatsappLogoFill />
                </a>
              </div>
            </div>
          </div>
          <div className={s.block}>
            <div className={s.item}>
              <h3 className={s.heading}>Address</h3>
              <a
                href="https://www.google.com/maps/place/Starta+Institute+by+Tel-Ran/@52.5079361,13.3724698,17z/data=!3m2!4b1!5s0x47a851cbc6be2f3b:0x7edf0a3a9c29227c!4m6!3m5!1s0x47a8515353a68755:0xd0866511db4f838f!8m2!3d52.5079329!4d13.3750447!16s%2Fg%2F11sb3nrbfl?authuser=0&entry=ttu"
                className={s.text}
                target="_blank"
              >
                Königsallee 56, 40212 Düsseldorf, Germany
              </a>
            </div>
            <div className={`${s.item} ${s.itemRight}`}>
              <h3 className={s.heading}>Working Hours</h3>
              <p className={s.text}>Mo-Sa 10:00-20:00</p>
            </div>
          </div>
          <div className={s.map}>
            <iframe
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=1360&amp;height=350&amp;hl=en&amp;q=Sevens%20Königsallee%2056%2040212%20Düsseldorf&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="http://maps-generator.com/ru"></a>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=d350ca5a448bce3d9a503f4693857443ff066ab6"
            ></script>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
