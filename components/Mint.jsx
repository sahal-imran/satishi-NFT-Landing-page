import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Mint() {
  return (
    <>
      <Box
        component="div"
        // maxWidth="xl"
        id="MINT"
        sx={{
          backgroundColor: "#1d1e60",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 16,
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
          Mint
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ color: "#FBFAF5", fontFamily: "Montserrat",textAlign:'center' }}
          gutterBottom
        >
          <Box
            sx={{ color: "#23d3de", fontSize: "2rem", fontWeight: 600 }}
            component="span"
          >
            50%
          </Box>{" "}
          OF ALL ROYALTIES WILL BE PLACED IN THE COMMUNITY WALLET FOR WEEKLY
          RAFFLES/NFT PURCHASES!
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ color: "#FBFAF5", fontFamily: "Montserrat",textAlign:'center'  }}
          gutterBottom
        >
          1 SATOSHI KOI = 2 FREE AIRDROPS ON WEEK4 and WEEK8
        </Typography>
        <Box component="div" sx={{mb:9}}>
          <Button
            sx={{
              border: "2px solid #23d3de",
              borderRadius: "5px",
              width: "590px",
              height: "39px",
              color: "#23d3de",
              fontFamily: "Montserrat",
              fontWeight: 700,
              border: "2px solid #23D3DE",
              mt: 3,
              py:{
                  md:1,
                  sm:3,
                  xs:4
              },
              width:{
                  md:'510px',
                  sm:'auto'
              }
            }}
            variant="outlined"
          >
            JOIN THE KOI POND AND MINT A SATOSHI KOI
          </Button>
        </Box>
        <Typography
            variant="body1"
            component="div"
            sx={{ color: "#A5A4A1", fontFamily: "Montserrat",mt:3,textAlign:'center'  }}
            gutterBottom
          >
            Satoshi Koi © 2021 SATOSHIKOI. All rights reserved
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ color: "#A5A4A1", fontFamily: "Montserrat",textAlign:'center'  }}
            gutterBottom
          >
            Satoshikoi.com
          </Typography>
          <img id="cornerLeft" src="/cornerLeft.png" alt="Image" />
      </Box>
    </>
  );
}

export default Mint;
