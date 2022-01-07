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

function Sneak() {
  return (
    <>
      <Container
        component="div"
        maxWidth="xl"
        id="SNEAK"
        sx={{
          backgroundColor: "#1d1e60",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py:4,
          // marginTop:'-3px',
          textAlign:'center'
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
            textAlign:'center'
          }}
          gutterBottom
        >
          Sneak Peek
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ color: "#A5A4A1",fontFamily: "Montserrat" }}
          gutterBottom
        >
          The Satoshi Koi NFT set includes 7770 randomly generated Koi with
          common, uncommon, unique, rare, legendary, and epic
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ color: "#A5A4A1",fontFamily: "Montserrat" }}
          gutterBottom
        >
          traits.The Satoshi Koi NFT collection also includes 7 hyper rare
          unique Koi unlike anything generated
        </Typography>
        <Box
          component="div"
          sx={{width:'90%',mt:5}}
        >
          <Grid sx={{justifyContent: "center",alignItems:'center'}} container gap={0} columns={{ md: 4, sm: 2, xs: 1 }}>
            <Grid sx={{ boxShadow: "none" }}>
              <Item sx={{ boxShadow: "none" }} className="item">
                <img src="/sneak/1.png" alt="" />
              </Item>
            </Grid>
            <Grid sx={{ boxShadow: "none" }}>
              <Item sx={{ boxShadow: "none" }} className="item">
                <img src="/sneak/2.png" alt="" />
              </Item>
            </Grid>
            <Grid sx={{ boxShadow: "none" }}>
              <Item sx={{ boxShadow: "none" }} className="item">
                <img src="/sneak/3.png" alt="" />
              </Item>
            </Grid>
            <Grid sx={{ boxShadow: "none" }}>
              <Item sx={{ boxShadow: "none" }} className="item">
                <img src="/sneak/4.png" alt="" />
              </Item>
            </Grid>
            <Grid sx={{ boxShadow: "none" }}>
              <Item sx={{ boxShadow: "none" }} className="item">
                <img src="/sneak/5.png" alt="" />
              </Item>
            </Grid>
            <Grid sx={{ boxShadow: "none" }}>
              <Item sx={{ boxShadow: "none" }} className="item">
                <img src="/sneak/6.png" alt="" />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Sneak;
