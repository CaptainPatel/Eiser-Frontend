import { Box } from "@mui/material"
import FeatureCard from "./FeatureCard"
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import HeadsetIcon from '@mui/icons-material/Headset';


const FeatureRow = () => {
    return (
        <Box display={"flex"} px={{ xs: "1rem", md: "7rem" }} py="6rem">
            <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} width={"100%"} justifyContent={"space-evenly"} alignItems={"center"}>
                <FeatureCard icon={<PriceCheckIcon sx={{ fontSize: "3rem" }} />} head="MONEY BACK GURANTEE" subHead="Shall open divide a one" />
                <FeatureCard icon={<LocalShippingIcon sx={{ fontSize: "3rem" }} />} head="FREE DELIVERY" subHead="Shall open divide a one" />
                <FeatureCard icon={<HeadsetIcon sx={{ fontSize: "3rem" }} />} head="ALWAYS SUPPORT" subHead="Shall open divide a one" />
                <FeatureCard icon={<SecurityIcon sx={{ fontSize: "3rem" }} />} head="SECURE PAYMENT" subHead="Shall open divide a one" />
            </Box>
        </Box >
    )
}

export default FeatureRow




