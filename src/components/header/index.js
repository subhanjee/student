 import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
 import "bootstrap/dist/css/bootstrap.min.css";
import {
  HeartOutlined,
  DollarOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Input,  } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function Haeder() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
          <img
            src="https://assets.casita.com/_next/static/media/dark-logo.72ccd553.svg"
            alt="abc"
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Search
                placeholder="Search by City, University or property "
                onSearch={onSearch}
                enterButton
                className="w-[25rem] mt-2 ml-2 flex justify-center"
              />
            </Form>
          </Nav>
          <Nav className="flex items-center">
            <Nav.Link href="#action1">
              <HeartOutlined className="mr-2" />
              Shortlist
            </Nav.Link>
            <Nav.Link href="#">
              <DollarOutlined className="mr-2" /> GBP
            </Nav.Link>
            {/* <NavDropdown title={<div className="flex"><DollarOutlined className="mr-2"/>GBP</div> }id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#">
              <QuestionCircleOutlined className="mr-2" /> FAQs
            </Nav.Link>
            <Nav.Link href="#">
              <button className="bg-[#761455] text-white p-2 w-32 rounded-sm">
                LET'S START!
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Haeder;
