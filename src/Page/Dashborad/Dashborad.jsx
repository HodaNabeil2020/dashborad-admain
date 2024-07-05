import { Box, Button, Stack, Typography } from "@mui/material";

import { DownloadOutlined } from "@mui/icons-material";
import RowOne from "./RowOne";
import Row2 from "./Row2";

const Dashborad = () => {
    return (
        <Box >

            DASHBOARD
            <Stack direction={"row"} justifyContent={"space-between"} sx={{ mt: "10px" }} >
                <Typography  >    Welcome to your dashboard</Typography>
                <Button variant="contained" sx={{ textTransform: "capitalize" }}>
                    < DownloadOutlined />
                    Download Reports
                </Button>
            </Stack>

            <RowOne />
            <Row2 />

        </Box>
    );
}

export default Dashborad;
