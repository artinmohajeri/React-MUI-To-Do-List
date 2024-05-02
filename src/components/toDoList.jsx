import {
    Grid, FormGroup, Fab, Modal, Box, TextField
} from "@mui/material";
import { useState } from "react";
import ToDoTask from "./toDoTask";

function ToDoList() {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState([])
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inputValue, setInputValue] = useState("")

    const handleChangeTextField = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddButton = () => {
        if (inputValue && inputValue.trim()) {
            setTasks([...tasks, inputValue.trim()])
            setInputValue("")
            handleClose()
        }
    }

    const handleDelteButton = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));  // remove that index
    }

    return (
        <>
            <Grid container spacing={2} className="d-flex justify-content-center align-items-center mt-3">
                <Grid align="center" item md={6} xs={10} style={{
                    background: "white", padding: 0,
                    boxShadow: "0px 0px 6px 1px #00000045",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    paddingBottom: "15px",
                    borderRadius: "4px"
                }}>

                    <FormGroup>
                        {tasks.map((task, index) => {
                            return <ToDoTask key={index} task={task} onDelete={() => handleDelteButton(index)} />
                        })}
                    </FormGroup>

                    <Fab onClick={handleOpen} className="d-flex align_items-center justify-content-center" variant="extended" style={{ transform: "translateY(38px)", background: "#a67ce3", color: "white", width: "120px" }}>
                        Add a Task
                    </Fab>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id="modalBox" sx={{
                    position: 'absolute',
                    borderRadius: "4px",
                    top: '50%',
                    left: '50%', transform: 'translate(-50%, -50%)',
                    width: "50%", bgcolor: 'background.paper',
                    boxShadow: 24, p: 4
                }}>

                    <TextField value={inputValue} onChange={handleChangeTextField} id="standard-basic" label="Write Your Task:" variant="standard" style={{ width: "80%" }} />

                    <Fab id="addTask" onClick={handleAddButton} className="d-flex align_items-center justify-content-center mt-3" variant="extended" style={{ background: "#a67ce3", color: "white", width: "120px", fontSize: "14px" }}>
                        Add Task
                    </Fab>
                </Box>
            </Modal >
        </>
    );
}

export default ToDoList;

