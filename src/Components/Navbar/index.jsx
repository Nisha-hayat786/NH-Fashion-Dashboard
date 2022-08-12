import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge } from "@mui/material";

function TextLinkExample() {
  return (
    <Navbar className="sticky">
      <Container>
        <Navbar.Brand href="/">
          <img src="/download.webp" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex align-items-center">
            <div>
              <LanguageIcon sx={{ marginLeft: 2 }} />
            </div>
            <div>
              <Badge color="primary" badgeContent={10} max={99}>
                <NotificationsNoneIcon sx={{ marginLeft: 2 }} />
              </Badge>
            </div>
            <div>
              <SettingsIcon sx={{ marginLeft: 2 }} />
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
