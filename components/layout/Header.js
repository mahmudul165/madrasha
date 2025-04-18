import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import CartItemsModal from "../common/CartItemsModal";
import Logo from "/public/logo2.png";
import { useRouter } from "next/router";
function Header() {
  // start header
  const [scroll, setScroll] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    const sidebar = document.querySelector(".offcanvas");
    const body = document.querySelector("body");

    console.log({ sidebar });

    const isCollapse = sidebar.classList.contains("show");
    const offcanvasDiv = document.querySelector(".offcanvas-backdrop");
    const isShow = offcanvasDiv.classList.contains("show");

    if (isCollapse) {
      sidebar.classList.remove("show");
      offcanvasDiv.classList.remove("show");
      body.click();
    } else if (!isCollapse && !isShow) {
      sidebar.classList.add("show");
      offcanvasDiv.classList.add("show");
      sidebar.classList.add("offcanvas-toggling");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // end header
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <>
      <CartItemsModal show={modalShow} onHide={() => setModalShow(false)} />
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          sticky="top"
          // bg="light"
          expand={expand}
         className="bg-light"
        // className={`row align-items-center    m-auto   navPosition py-2 ${
        //   scroll
        //     ? " bg-light container-fluid py-3 add-transition "
        //     : "container  add-transition-1 "
        // }`}
        >

          <div className="col-lg-5  col-sm-3  col-3">
            <Nav
              className="m-auto p-1 align-items-center  justify-content-center "
              as="ul"
            >
              {" "}
              <Nav.Item as="li" className="d-flex cus-app-logo ">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="logo"
                    width={120}
                    height={120}
                    layout={500}
                  />
                </Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-lg-3  d-md-none d-lg-block   d-none   ">
            <Nav className=" justify-content-end " as="ul">
              <Nav.Item
                as="li"
                className={`${router.pathname === "/" ? "active-li" : ""}`}
              >
                <Nav.Link as="span">
                  <Link href={"/"}>হোম</Link>
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title="পরিচিতি"
                id="collasible-nav-dropdown"
                className={`${router.pathname === "/about" ? "active-li" : ""}`}
              >
                <NavDropdown.Item as="li">
                  <Link href={"/about"}>পরিচিতি </Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item as="span">
                  <Link href={"/press-releases"}>Press Releases</Link>
                </NavDropdown.Item> */}
              </NavDropdown>
              {/* <Nav.Link
                as="span"
                className={`${router.pathname === "/our-business" ? "active-li" : ""
                  } text-nowrap`}
              >
                <Link href={"/our-business"}>বিভাগ</Link>
              </Nav.Link> */}
              <Nav.Link
                as="span"
                className={`${router.pathname === "/teachers" ? "active-li" : ""
                    }`}
              >
                <Link href={"/teachers"}>শিক্ষক মন্ডলী</Link>
              </Nav.Link>
            </Nav>
          </div>
          <div className="col-lg-4  col-sm-2   col-3">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* Sultan Tea */} তাকওয়া নূরানী ও হাফেজিয়া মাদরাসা
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <Nav className=" justify-content-center "> */}
                <div className="  d-block  d-lg-none d-md-block  d-xs-block ">
                  <Nav as="ul">
                    <Nav.Item
                      as="li"
                      className={`${router.pathname === "/" ? "active-li" : ""
                        }`}
                    >
                      <Nav.Link as="span">
                        <Link href={"/"}>হোম</Link>

                      </Nav.Link>
                    </Nav.Item>

                    <NavDropdown
                      title="পরিচিতি"
                      id="collasible-nav-dropdown"
                      className={`${router.pathname === "/about" ? "active-li" : ""
                        }`}
                    >
                      <NavDropdown.Item as="li">
                        <Link href={"/about"}>পরিচিতি </Link>
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      {/* <NavDropdown.Item as="li">
                        <Link href={"/press-releases"}>Press Releases</Link>
                      </NavDropdown.Item> */}
                    </NavDropdown>

                    {/* <NavDropdown
                      title="Our Business"
                      id="collasible-nav-dropdown"
                      className={`${
                        router.pathname === "/our-business" ? "active-li" : ""
                      } `}
                    >
                      <NavDropdown.Item as="span">
                        <Link href={"/our-business"}>পরিচিতি</Link>
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    {/* <Nav.Link
                      as="span"
                      className={`${router.pathname === "/our-brand" ? "active-li" : ""
                        } text-nowrap`}
                    >
                      <Link href={"/our-brand"}>বিভাগ</Link>


                    </Nav.Link> */}
                  </Nav>
                </div>
                

                <NavDropdown
                  title="গ্যালারি"
                  id="collasible-nav-dropdown"
                  className={`${router.pathname === "/picture" ? "active-li" : ""
                    }`}
                >
                  <NavDropdown.Item as="li">
                    <Link href={"/picture"}>ছবি</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="li">
                    <Link href={"/"}>ভিডিও</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as="span"
                  className={`${router.pathname === "/notices" ? "active-li" : ""
                    }`}
                >
                  <Link href={"/notices"}>নোটিশ</Link>

                </Nav.Link>

                <Nav.Link
                  as="span"
                  className={`${router.pathname === "/contact" ? "active-li" : ""
                    } text-nowrap`}
                >
                  <Link href={"/contact"}>যোগাযোগ</Link>
                </Nav.Link>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
