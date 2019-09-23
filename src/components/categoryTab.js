import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
      backgroundColor: '#fff',
      color: '#ccc',
  },
  tab: {
  },
  textField: {
      marginRight: 5,
      width: 150,
      height: 40,
      fontSize: 10
  },
  button: {
      backgroundColor: '#FF5722',
      color: '#fff',
      margin: 7,
      height: 40,
      width: 75,
      fontSize: 10
  }
}));

const CategoryTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="simple tabs example" 
            className={classes.tabs}
            TabIndicatorProps={{style: {background:'#42b549', color: '#42b549'}}}
        >
          <Tab  label="Pulsa" {...a11yProps(0)} />
          <Tab label="Paket Data" {...a11yProps(1)} />
          <Tab label="Listrik PLN" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className={classes.tab}>
        <TextField
            className={classes.textField}
            label="Nomor Telepon"
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="1"
        />
        <TextField
            className={classes.textField}
            label="Nominal"
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="1"
        />
        <Button className={classes.button}>Beli</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
            className={classes.textField}
            label="Nomor Telepon"
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="1"
        />
        <TextField
            className={classes.textField}
            label="Nominal"
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="1"
        />
        <Button className={classes.button}>Beli</Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
            className={classes.textField}
            label="Jenis Produk"
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="1"
        />
        <TextField
            className={classes.textField}
            label="Nomor Meter"
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="1"
        />
        <TextField
            className={classes.textField}
            label="Nominal"
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="1"
        />
        <Button className={classes.button}>Beli</Button>
      </TabPanel>
    </div>
  );
}
export default CategoryTab;