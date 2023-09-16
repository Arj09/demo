import { Box, Fab, IconButton, Tooltip, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Mode } from "@mui/icons-material";


export const Add = ()=>{
    const [open, setOpen] = useState(false)

    
   



    return(
        <>
        <Tooltip title="Add Post" sx={{ position:"fixed", backgroundColor:"blue", color: "white", left:"30px" , bottom:"60px"}} onClick={()=>setOpen(true)}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        </Tooltip>

        < Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        >
            <Box width={500} height={400} p={10} bgcolor={"white"} margin="200px auto" >
                <Typography>arjun</Typography>

            </Box>


        </Modal>
       
        
        
        </>
    )
}