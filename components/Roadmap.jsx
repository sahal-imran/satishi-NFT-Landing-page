import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(3),
  backgroundColor: "unset",
  background: "unset",
}));
const Item1 = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(-3),
  backgroundColor: "unset",
  background: "unset",
  marginTop:'20px'
}));

function Roadmap() {
  return (
    <>
      <Box
        component="div"
        // maxWidth="xl"
        id="ROADMAP"
        sx={{
            px: '1rem',
          backgroundColor: "#1d1e60",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 20,
          // marginTop: "-3px",
          position:'relative'
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            color: "#FBFAF5",
            fontFamily: "Montserrat",
            fontWeight: 600,
            lineHeight: "73px",
            textAlign: "center",
          }}
          gutterBottom
        >
          Road Map
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "#A5A4A1",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
          gutterBottom
        >
          MASSIVE COMMUNITY GIVEAWAYS EVERY WEEK!
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "#A5A4A1",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
          gutterBottom
        >
          1 SATOSHI KOI = 1 TICKET IN WEEKLY COMMUNITY RAFFLES
        </Typography>
        {/* 24hours */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
              }}
            >
              24Hours
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{ fontSize: "18px", color: "#FBFAF5", fontSize: "22px" }}
            >
              {" "}
              3 MUTANT APE YACT CLUB NFTs WILL BE RAFFLED OFF TO HOLDERS{" "}
            </Box>
          </Typography>
          <Box component="div" sx={{}}>
            <Grid
              sx={{ justifyContent: "center", alignItems: "center" }}
              container
              gap={0}
              columns={{ md: 3, sm: 2, xs: 1 }}
            >
              <Grid sx={{ boxShadow: "none" }}>
                <Item1 sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/Giveaway_1.png" alt="" />
                </Item1>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item1 sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/Giveaway_2.png" alt="" />
                </Item1>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item1 sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/Giveaway_3.png" alt="" />
                </Item1>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* 1 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
              }}
            >
              1 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{ fontSize: "18px", color: "#FBFAF5", fontSize: "22px" }}
            >
              {" "}
              5 WORLD OF WOMEN NTFs WILL BE RAFFLED OFF TO HOLDERS{" "}
            </Box>
          </Typography>
          <Box component="div" sx={{}}>
            <Grid
              sx={{ justifyContent: "center", alignItems: "center", mt: 5 }}
              container
              gap={0}
              columns={{ md: 3, sm: 2, xs: 1 }}
            >
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak1.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak2.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak3.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak4.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak5.png" alt="" />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* 2 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
              }}
            >
              2 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{ fontSize: "18px", color: "#FBFAF5", fontSize: "22px" }}
            >
              {" "}
              5 CREATURE WORLD NTFs WILL BE RAFFLED OFF TO HOLDERS{" "}
            </Box>
          </Typography>
          <Box component="div" sx={{}}>
            <Grid
              sx={{ justifyContent: "center", alignItems: "center", mt: 5 }}
              container
              gap={0}
              columns={{ md: 3, sm: 3, xs: 1 }}
            >
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak6.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak7.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak8.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak9.png" alt="" />
                </Item>
              </Grid>
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak10.png" alt="" />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* 3 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
              }}
            >
              3 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{ fontSize: "18px", color: "#FBFAF5", fontSize: "22px" }}
            >
              {" "}
              1 COOL CAT NTF WILL BE RAFFLED OFF TO HOLDERS{" "}
            </Box>
          </Typography>
          <Box component="div" sx={{}}>
            <Grid
              sx={{ justifyContent: "center", alignItems: "center", mt: 5 }}
              container
              gap={0}
              columns={{ md: 3, sm: 2, xs: 1 }}
            >
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak11.png" alt="" />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* 4weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
              }}
            >
              4 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{ fontSize: "18px", color: "#FBFAF5", fontSize: "22px" }}
            >
              {" "}
              1st FREE NFT AIRDROP TO ALL SATOSHI KOI HOLDERS{" "}
            </Box>
          </Typography>
          <Box component="div" sx={{}}>
            <Grid
              sx={{ justifyContent: "center", alignItems: "center", mt: 5 }}
              container
              gap={0}
              columns={{ md: 3, sm: 2, xs: 1 }}
            >
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak12.png" alt="" />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* 5 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
                textAlign: "center",
              }}
            >
              5 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
                textAlign: "center",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: "18px",
                color: "#FBFAF5",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              {" "}
              10ETH NFT RAFFLE TO ALL HOLDERS - COMMUNITY VOTES ON SPECIFIC
              NFT(s)
            </Box>
          </Typography>
        </Box>
        {/* 6 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
                textAlign: "center",
              }}
            >
              6 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
                textAlign: "center",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: "18px",
                color: "#FBFAF5",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              {" "}
              10ETH NFT RAFFLE TO ALL HOLDERS - COMMUNITY VOTES ON SPECIFIC
              NFT(s)
            </Box>
          </Typography>
        </Box>
        {/* 7 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
                textAlign: "center",
              }}
            >
              7 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
                textAlign: "center",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: "18px",
                color: "#FBFAF5",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              {" "}
              10ETH NFT RAFFLE TO ALL HOLDERS - COMMUNITY VOTES ON SPECIFIC
              NFT(s)
            </Box>
          </Typography>
        </Box>
        {/* 8 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
              }}
            >
              8 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{ fontSize: "18px", color: "#FBFAF5", fontSize: "22px" }}
            >
              {" "}
              2st FREE NFT AIRDROP TO ALL SATOSHI KOI HOLDERS{" "}
            </Box>
          </Typography>
          <Box component="div" sx={{}}>
            <Grid
              sx={{ justifyContent: "center", alignItems: "center", mt: 5 }}
              container
              gap={0}
              columns={{ md: 3, sm: 2, xs: 1 }}
            >
              <Grid sx={{ boxShadow: "none" }}>
                <Item sx={{ boxShadow: "none" }} className="item">
                  <img src="/roadmap/weak12.png" alt="" />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* 9 weak */}
        <Box component="div" sx={{ mt: 8 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "#A5A4A1",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            gutterBottom
          >
            <Box
              component="span"
              sx={{
                color: "#23D3DE",
                lineHeight: "55px",
                fontSize: "45px",
                fontWeight: "bold",
                mr: 2,
                lineHeight: "54.86px",
                textAlign: "center",
              }}
            >
              9 Week
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "25px",
                color: "#FBFAF5",
                mr: 2,
                lineHeight: "30.58px",
                textAlign: "center",
              }}
            >
              {" "}
              AFTER SELL OUT
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: "18px",
                color: "#FBFAF5",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              {" "}
              COMMUNITY VOTED WEEKLY RAFFLES CONTINUE + POSSIBLE <br />
              BREEDING MECHANICS OF SATOSHKOI + POSSIBLE <br />
              TOKENOMICS + ROADMAP UPDATE
            </Box>
          </Typography>
        </Box>
        <img id="cornerRight" src="/cornerRight.png" alt="" />
        <img id="Group4" src="/Group 4.png" alt="" />
        <img id="Group5" src="/Group 4.png" alt="" />
        <img id="Group6" src="/Group 4.png" alt="" />
        <img id="Group7" src="/Group 4.png" alt="" />
      </Box>
    </>
  );
}

export default Roadmap;
