import { Stack } from "@mui/material";
import Cart from "./Cart";


import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1 } from "./data";



const RowOne = () => {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} gap={2} sx={{ flexWrap: "wrap" }}  >
            <Cart icon={<EmailIcon />} title={"12,361"}
                subTitle={"Emails Sent"}
                increase={"+14%"} data={data1} scheme={'nivo'} />

            <Cart icon={<PointOfSaleIcon />} title={"12,361"}
                subTitle={"Emails Sent"}
                increase={"+14%"} data={data1} scheme={'dark2'} />
            <Cart icon={<PersonAddIcon />} title={"12,361"}
                subTitle={"Emails Sent"}
                increase={"+14%"} data={data1} scheme={'pastel2'} />
            <Cart icon={< TrafficIcon />} title={"12,361"}
                subTitle={"Emails Sent"}
                increase={"+14%"} data={data1} scheme={'spectral'} />

        </Stack>
    );
}

export default RowOne