import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge } from "@mui/material";
import "../Navbar/navbar.css";
import {Link} from "react-router-dom";

function TextLinkExample() {
  return (
    <div className="pb-5">
          <Navbar fixed="top" bg="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo-white.svg" alt="" style={{width:"65%"}}/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex align-items-center">
            <div>
              <LanguageIcon sx={{ marginLeft: 2, color:"white"}} />
            </div>
            <div>
              <Badge color="primary" badgeContent={10} max={99}>
                <NotificationsNoneIcon sx={{ marginLeft: 2, color:"white"}} />
              </Badge>
            </div>
            <div>
              <Link to="/logIn"><SettingsIcon sx={{ marginLeft: 2, color:"white"}} /></Link>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
}

export default TextLinkExample;
