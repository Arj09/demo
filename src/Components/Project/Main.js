import React from "react";
import { Silde } from "./Side";
import { Feed } from "./Feed";
import { Right } from "./RightBar";
import { Box, Stack } from "@mui/material";
import { Add } from "./Add";



export const Main = ()=>{
   



    return(
        <Box sx={{marginTop: "10px"}}>
            <Stack direction="row"  >
            <Silde/>
            <Feed/>
            <Right/>
            </Stack>
            <Add/>
            
        </Box>
    )
}