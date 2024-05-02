import {
    Grid, FormControlLabel, FormGroup,
    Checkbox, Fab, Modal, Typography, Box, TextField
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";


function ToDoTask(props) {
    const [isClicked, setIsClicked] = useState(false)
    const [isDisplayed, setIsDisplayed] = useState(false)

    const handleItemClick = () => {
        setIsClicked(!isClicked)
    }

    const handleDisplayDeleteButton = () => {
        setIsDisplayed(! isDisplayed)
    }

    const handleDelteButton = () => {
        props.onDelete()
    }

    return (
        <Grid className="toDoBox" container onMouseLeave={handleDisplayDeleteButton} onMouseEnter={handleDisplayDeleteButton} >
            <Grid item align='left' xs={10}>
                <FormControlLabel style={isClicked?{textDecoration:"line-through"}:null} onMouseUp={handleItemClick} align="left" className="toDoItem" control={<Checkbox />} label={props.task} />
            </Grid>
            <Grid item align="center" xs={2} style={{ marginTop: "8px" }}>
                <DeleteOutline onClick={handleDelteButton} id="deleteBtn" className={isDisplayed ? "d-block" : "d-none"} style={{ color: "red", cursor: "pointer" }}></DeleteOutline>
            </Grid>
        </Grid>
    );
}

export default ToDoTask;