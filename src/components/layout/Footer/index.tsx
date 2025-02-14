import React from "react";
import Image from "next/image";
import Link from "next/link";

import facebook from "../../assets/faceBook.svg";
import instagram from "../../assets/instagram.svg";
import appStore from "../../assets/logo appstore.png";
import googlePlay from "../../assets/logo googlestore.png";
import logoImg from "../../assets/Insta Order.svg";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Footer: React.FC = () => {
  const t = useTranslations("common.footer");
  const { locale } = useParams();

  return (
    <footer
      className={`flex flex-col items-center py-5 ${locale === "ar" ? "rtl" : ""
        }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl px-4">
        {/* Logo Section */}
        <div className="mb-6 lg:mb-0">
          {/* <Image src={} alt="Logo" className="w-32" /> */}
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <div className="flex items-center gap-4 text-white">
            <p className="mb-0">
              <Link href="/ContactUs" className="hover:underline">
                {t("Contact us")}
              </Link>
            </p>
            <p className="mb-0">{t("Follow Us")}</p>
            {/* <Image src={facebook} alt="Facebook" className="w-6" /> */}
            {/* <Image src={instagram} alt="Instagram" className="w-6" /> */}
          </div>
          <div className="flex gap-4">
            <button className="border-0">
              {/* <Image src={appStore} alt="Download on the App Store" className="w-32"/> */}
            </button>
            <button type="button" title="btn" className="border-0">
              {/* <Image src={googlePlay} alt="Get it on Google Play" className="w-32" /> */}
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full max-w-6xl mt-5 text-center">
        <p className="text-gray-500">
          {t("Copyright © 2023 LOGO. Design & Develop by Majec Soft")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

/**
 * 
 * 
 * .footer {
    background-color: #1f1f1f;
}

.footerLogo {
    width: 267px;
    height: 117px;
}

.appDownload img {
    width: 150px;
}

.cobyRight p {
    color: #afafaf;
}

.footer a {
    text-decoration: none;
    color: #afafaf;
}
 */
