import { Box } from "@mui/material";
import React from "react";
import { Post } from "./Post";




export const Feed = ()=>{
   



    return(
        <Box  flex={6} p={2}>
            <Post/>
            <Post/>
            
        </Box>
    )
}