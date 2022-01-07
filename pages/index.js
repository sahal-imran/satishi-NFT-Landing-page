import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Sneak from "../components/Sneak"
import Mint from "../components/Mint"
import Roadmap from "../components/Roadmap"
import {Box} from "@mui/material";

export default function Home() {
  return (
    <Box sx={{
      background: '#1d1e60',
    }}>
    <Navbar />
    <Hero />
    <Sneak />
    <Roadmap />
    <Mint />
    </Box>
  )
}
