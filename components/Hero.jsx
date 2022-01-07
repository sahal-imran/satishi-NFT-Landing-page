import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <Box
      component="div"
      // maxWidth="xl"

      id="container-nav"
      sx={{
        backgroundColor: "#1d1e60",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py:5,
        position:'relative'
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="dix" className="hero-text" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              color: "#FBFAF5",
              fontFamily: "Montserrat",
              fontWeight: 800,
              lineHeight: "78.02px",
              fontSize:{
                  sm:"3.75rem",
                  xs:'3rem'
              }
            }}
            gutterBottom
          >
            Unique NFTs collection on
          </Typography>
          <Typography
            variant="h2"
            component="div"
            sx={{
              color: "#FBFAF5",
              fontFamily: "Montserrat",
              fontWeight: 800,
              lineHeight: "78.02px",
              fontSize:{
                sm:"3.75rem",
                xs:'3rem'
            },
              mb:5
            }}
            gutterBottom
          >
            Etherium{" "}
            <Box
              sx={{
                border: "2px solid rgba(35, 211, 222, 0.4)",
                borderRadius: "19px;",
                color:'#23d3de'
              }}
              component="span"
            >
              Blockchain
            </Box>
          </Typography>
          <Typography variant="body1" component="div" sx={{color:'#A5A4A1',fontFamily: "Montserrat"}} gutterBottom>
            A collection of 7777 randomly generated unique Koi NFTs living on
            Etherium blockchain.Your unique koi unlocks members-only
          </Typography>
          <Typography variant="body1" component="div" sx={{color:'#A5A4A1',fontFamily: "Montserrat",mb:8}} gutterBottom>
            benefits such as upcoming airdrops , raffles and giveaways.Remember,
            all Koi are lucky, but some are luckier than others
          </Typography>
        </Box>
        <Box component="div">
          <Button sx={{border:'2px solid #23d3de',borderRadius:'7px',width:'266px',height:'72px',color:'#23d3de',fontFamily:"Montserrat",fontWeight:700}} variant="outlined">Connect Wallet</Button>
        </Box>
      </Box>
      <Box component="dic" sx={{position:'absolute',width:'229px',height:'264px',left:'0px',top:'150px',background: '#2A7D8F',filter: 'blur(120px)',
}} ></Box>
<Box component="dic" sx={{position:'absolute',width:'229px',height:'264px',right:'25px',bottom:'150px',background: '#2A7D8F',filter: 'blur(120px)',
}} ></Box>
    </Box>
  );
}

export default Hero;
