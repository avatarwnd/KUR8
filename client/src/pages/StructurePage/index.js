import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PodList from '../../components/PodList'

const useStyles = makeStyles(theme => ({
  sampleStyle: {
    color: '#000',
  },
}));

export default function StructurePage() {
  const classes = useStyles();

  return (
    <Typography variant="h3" className={classes.sampleStyle}>
      {PodList}
    </Typography>
  );
}
