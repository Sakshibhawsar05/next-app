import LandingTabpanel from "./components/LandingTabpanel";
import { Container } from "@mui/material";


const landingConfig = ()=>{
  return(
    <Container maxWidth={false} sx={{ mt: "6%" }}>
    <LandingTabpanel />
  </Container>
  )
}

export default landingConfig;