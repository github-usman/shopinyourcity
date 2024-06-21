import React from "react";
import web_log from "../../../assets/media/images/header/logo/logo.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {

  return (
    <div className="header-web-log">
    <Link href={'/'}  className={'container'}>
      <Image
        className={'logoImg'}
        src={web_log}
        alt="shopping in you city logo"
      />
      <h2 className={'logoName'}>ShopinYourCity</h2>
    </Link>
    </div>
  );
};

export default Logo;
