import { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CancelIcon from "@mui/icons-material/Cancel";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-scroll";
import Typography from "@mui/material/Typography";
import { FaInstalod } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  const [hide, showNav] = useState(true);

  const sidebarHandler = () => {
    showNav(!hide);
  };

  return (
    <Container
      component="div"
      maxWidth="xl"
      id="container-nav"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1d1e60",
        height: "120px",
        px: 0,
      }}
    >
      <Box
        component="div"
        className="max-width"
        sx={{
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1d1e60",
          width: "100%",
          px: {
            md: 3,
            sm: 1,
          },
          borderBottom: "3px solid #FBFAF5",
        }}
      >
        <Box
          component="div"
          id="left-nav"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image width={67} height={122} id="logo" src="/logo.png" alt="Logo" />
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{
              fontWeight: "800",
              color: "#FBFAF5",
              fontFamily: "Montserrat",
              fontSize: {
                xs: "20xp",
              },
            }}
          >
            Satoshi koi
          </Typography>
        </Box>
        <Box
          component="div"
          id="right-nav"
          sx={
            hide
              ? {
                  left: "-100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 999,
                  ml: 4,
                }
              : {
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  left: 0,
                  zIndex: 999,
                  ml: 4,
                }
          }
        >
          <Box
            component="div"
            className="nav-menu"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              duration={500}
              className={"nav-link"}
              onClick={sidebarHandler}
              to={"SNEAK"}
              spy={true}
              activeClass={"active"}
            >
              Sneak Peek
            </Link>

            <Link
              duration={500}
              className={"nav-link"}
              onClick={sidebarHandler}
              to={"ROADMAP"}
              spy={true}
              activeClass={"active"}
            >
              Road Map
            </Link>

            <Link
              duration={500}
              className={"nav-link"}
              onClick={sidebarHandler}
              to={"MINT"}
              spy={true}
              activeClass={"active"}
            >
              Mint
            </Link>
            <Box
              component="div"
              className="social-icon2"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: "none",
              }}
            >
              <a href="#">
                <TwitterIcon sx={{ fontSize: 45 }} />
              </a>
              <a href="#">
                <FaDiscord size={45} />
              </a>
              <a href="#">
                <FaInstalod size={45} />
              </a>
            </Box>
          </Box>
        </Box>
        <Box
          component="div"
          className="social-icon1"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="#">
            <TwitterIcon sx={{ fontSize: 40 }} />
          </a>
          <a href="#">
            <FaDiscord size={40} />
          </a>
          <a href="#">
            <FaInstalod size={40} />
          </a>
        </Box>
        <Box component="div" className="res-nav">
          {hide ? (
            <DehazeIcon
              onClick={() => showNav(!hide)}
              sx={{ fontSize: 45, color: "white", mr: 1 }}
            />
          ) : (
            <CancelIcon
              onClick={() => showNav(!hide)}
              sx={{ fontSize: 45, color: "white", mr: 1 }}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;
