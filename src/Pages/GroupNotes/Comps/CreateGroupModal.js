import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import BootStrapRegisterInput from "../../../Components/Boostrapinput/BootstrapInput";
import useCreateGroup from "../../../Hooks/useCreateGroup";
import AddMemberButton from "./AddMemberButton";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 45 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CreateGroupModal() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [group_name, setGroupName] = useState("");
  const [membersSearcher, setMembersSearcher] = useState("");
  const [
    spinner,
    usersToShow,
    findMembers,
    membersToHad,
    addMemberToHadList,
    createNewGroup,
  ] = useCreateGroup();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    findMembers(membersSearcher, "");
  }, [membersSearcher]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <BootStrapRegisterInput
                type={"text"}
                placeholder={"Group name "}
                label={"Group name"}
                onChangeFunction={setGroupName}
              />
            </Grid>
            <Grid item>
              <BootStrapRegisterInput
                type={"text"}
                label={"Find members by name"}
                onChangeFunction={setMembersSearcher}
              />
            </Grid>
            <Grid item> {spinner ? <CircularProgress /> : null}</Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                {usersToShow.map((item) => {
                  return (
                    <Grid item>
                      <AddMemberButton
                        f_name={item.f_name}
                        l_name={item.l_name}
                        onClickHandler={() => addMemberToHadList(item)}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            {membersToHad.map((item) => {
              return (
                <Grid item>
                  {item.f_name} {item.l_name}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              createNewGroup(group_name, membersToHad);
              handleClose();
            }}
          >
            Create Group
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>Create Group</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
