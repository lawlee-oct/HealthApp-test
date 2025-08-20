import { Link, NavLink } from "react-router-dom";

import styles from "./styles.module.css";

import logo from "../icons/logo.svg";
import iconMemo from "../icons/icon_memo.svg";
import iconChallenge from "../icons/icon_challenge.svg";
import iconInfo from "../icons/icon_info.svg";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Header() {
  const menuItems = [
    { path: "/record", label: "自分の記録" },
    { path: "#", label: "体重グラフ" },
    { path: "#", label: "目標" },
    { path: "#", label: "選択中のコース" },
    { path: "/column", label: "コラム一覧" },
    { path: "#", label: "設定" },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Link
          to="/"
          className={styles.logo}
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <img src={logo} alt="Healthy" className={styles.iconLg} />
        </Link>

        <nav className={`${styles.nav} ${styles.japanese}`}>
          <NavLink to="/record" className={getNavLinkClass}>
            <img src={iconMemo} alt="" className={styles.icon} />
            自分の記録
          </NavLink>

          <NavLink to="/column" className={getNavLinkClass}>
            <img src={iconChallenge} alt="" className={styles.icon} />
            チャレンジ
          </NavLink>

          <NavLink
            to="/#"
            className={`${styles.navLink} ${styles.badged}`}
            data-badge="1"
          >
            <img src={iconInfo} alt="" className={styles.icon} />
            お知らせ
          </NavLink>
          <HamburgerMenu menuItems={menuItems} />
        </nav>
      </div>
    </header>
  );
}
