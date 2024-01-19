import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import Header from "./../header//Header";

function NavLink({
  href,
  exact,
  children,
  activeColor = "#c6181f",
  addClass = "",
  ...props
}) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.includes(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <Header
        className={`link_wrapper ${addClass}`}
        color={isActive ? activeColor : "black"}
        fontSize={24}
        fontWeight="medium"
      >
        {children}
      </Header>
    </Link>
  );
}

export default NavLink;
