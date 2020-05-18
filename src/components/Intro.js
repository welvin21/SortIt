import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    outline: 'none',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: `translate(-50%, -40%)`,
    width: 'min(400px, 90vw)',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5px',
    fontSize: '1%',
    maxHeight: '85vh',
    overflowY: 'scroll',
  },
  description: {
    margin: '1% 0',
  },
  buttonsBar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 5,
  },
  button: {
    fontSize: 'auto',
    margin: '1px 2px',
  },
}));

export const Intro = ({ isOpen, closeModal }) => {
  const classes = useStyles();
  const githubRepo = 'https://github.com/welvin21/SortIt';
  const description = `Sorting is one of the most common problems not only in computer science but also in our daily life.
                      The purpose of this project is to assist anyone who wants to gain thorough understanding of different sorting methods.
                      There are 10 different sorting algorithms for you to try by clicking the playground button below.
                      `;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      onClose={() => {}}
      disableScrollLock={true}
    >
      <div className={classes.paper}>
        <Typography
          className={classes.description}
          variant="body1"
          id="simple-modal-description"
        >
          {description}
        </Typography>
        <Container className={classes.buttonsBar}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => closeModal()}
          >
            Playground
          </Button>
          <Button
            fullWidth
            variant="contained"
            className={classes.button}
            onClick={() => window.open(githubRepo, '_blank', 'noopener')}
          >
            Contribute
          </Button>
        </Container>
      </div>
    </Modal>
  );
};
