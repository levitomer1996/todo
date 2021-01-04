import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MenuItem from "@material-ui/core/MenuItem";
import useCreateGroup from "../../../Hooks/useCreateGroup";
import BootStrapRegisterInput from "../../../Components/Boostrapinput/BootstrapInput";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import useSendRequest from "../../../Hooks/useSendRequest";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddParticipantModal({ handleCloseMenu, currentGroup }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [membersSearcher, setMembersSearcher] = useState("");
  const [isGroupAdmin, setIsGroupAdmin] = useState(false);
  const [
    spinner,
    usersToShow,
    findMembers,
    membersToHad,
    addMemberToHadList,
    createNewGroup,
  ] = useCreateGroup();
  const [sendRequesToUser, SendRequestSpinner] = useSendRequest();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    findMembers(membersSearcher, "");
  }, [membersSearcher]);

  useEffect(() => {
    console.log(currentGroup);
  }, [currentGroup]);

  function isAdminResolver(u, g) {
    if (u._id === g.admin) {
      setIsGroupAdmin(true);
    } else {
      setIsGroupAdmin(false);
    }
  }

  return (
    <div>
      <MenuItem
        onClick={() => {
          handleOpen();
          handleCloseMenu();
        }}
      >
        Add Participant
      </MenuItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {isGroupAdmin ? (
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item>
                      <BootStrapRegisterInput
                        type="text"
                        onChangeFunction={setMembersSearcher}
                      />
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        {usersToShow.map((item) => {
                          return (
                            <Grid item>
                              {" "}
                              <Button
                                variant="contained"
                                color="primary"
                                style={{
                                  backgroundColor: "#673ab7b3",
                                  color: "black",
                                }}
                                onClick={() => addMemberToHadList(item)}
                              >
                                {item.f_name} {item.l_name}
                              </Button>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    {membersToHad.map((item) => {
                      console.log(item);
                      return (
                        <Grid item>
                          {item.f_name} {item.l_name}
                        </Grid>
                      );
                    })}
                    {SendRequestSpinner ? (
                      <Grid item>
                        <CircularProgress />
                      </Grid>
                    ) : null}
                    {membersToHad.length > 0 ? (
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ backgroundColor: "#2196F3" }}
                          onClick={() =>
                            sendRequesToUser(membersToHad, currentGroup._id)
                          }
                        >
                          Send request
                        </Button>
                      </Grid>
                    ) : null}
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              "Tomer"
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
