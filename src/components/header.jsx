import { Grid, Box } from "@mui/material";

function Header() {
    return (
        <Grid container spacing={2} className="d-flex justify-content-center align-items-center">
            <Grid align="center" item md={4} xs={10} style={{padding:0}}>
                <Box id="header" className="text-center" component="section" sx={{ p: 2, background:"#a67ce3",
                 color:"white", boxShadow: "0px 0px 6px 1px #00000045",
                  fontWeight:"600", fontSize:"18px", borderRadius:"4px"}}>
                    ToDoList React Application
                </Box>
            </Grid>
        </Grid>
    );
}

export default Header;

