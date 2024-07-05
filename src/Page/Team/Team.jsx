
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './Data';

import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";



const Team = () => {

    const theme = useTheme()

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 33,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "name",
            headerName: "name",
            align: "center",
            headerAlign: "center",
        },
        {
            field: "email",
            headerName: "email",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        { field: "age", headerName: "age", align: "center", headerAlign: "center" },
        {
            field: "phone",
            headerName: "phone",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "access",
            headerName: "access",
            flex: 1,
            align: "center",
            headerAlign: "center",

            renderCell: ({ row: { access } }) => {
                return (

                    <
                        // @ts-ignore
                        Box sx={{
                            display: " flex", alignItems: "center",
                            justifyContent: "center", padding: "5px",
                            mt: "6px",
                            borderRadius: "2px",
                            bgcolor: access === "Admin" ? theme.palette.primary.dark :
                                access === "Manager" ? theme.palette.secondary.dark : "#3da58a",


                        }}  >

                        {access === "Admin" &&
                            (<  AdminPanelSettingsOutlined
                                sx={{ color: "#fff", mr: "5px" }} fontSize="small" />)}


                        {access === "Manager" && (<   SecurityOutlined sx={{ color: "#fff", mr: "5px" }} fontSize="small" />)}



                        {access === "User" && (<      LockOpenOutlined sx={{ color: "#fff", mr: "5px" }} fontSize="small" />)}



                        <Typography color="#FFF"> {access}</Typography>
                    </Box>
                )

            }

        },

    ];

    return (
        <
            // @ts-ignore
            Box sx={{ height: 600, width: "98%", mx: "auto" }}

            sm={{ width: "97% " }} >
            <DataGrid rows={rows}
                // @ts-ignore
                columns={columns} />
        </Box>
    );
}

export default Team;
