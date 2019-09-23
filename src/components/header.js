import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, InputBase, SwipeableDrawer, List, ListItem, Divider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CartIcon from '@material-ui/icons/ShoppingCart'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from '../styles/header'
import logo from '../images/logo.png'
const HeaderComponent = () => {
  const [drawerLeft, setDrawerLeft] = useState(false);
  const classes = useStyles();
  const toggleDrawer = (side, open) => event => {
    setDrawerLeft(open);
  }
  const sideLeft = side => (
    <div
      className={classes.drawer}
      role="presentation"
    >
      <List component="nav" className={classes.listDrawer}>
        <ListItem>
          <IconButton 
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
            >
              <CloseIcon/>
          </IconButton>
          <img src={logo} className={classes.logoHeaderResponsive}/>
        </ListItem>
        <ListItem>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Cari produk atau toko"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          Tentang Tokopedia
        </ListItem>
        <ListItem button>
          Mitra Tokopedia
        </ListItem>
        <ListItem button>
          Mulai Berjualan
        </ListItem>
        <ListItem button>
          Promo
        </ListItem>
        <ListItem button>
          Pusat Bantuan
        </ListItem>
        <ListItem>
          <Button className={classes.signin}>
            Masuk
          </Button>
          <Button className={classes.signup}>
            Daftar
          </Button>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className="App">
      <div className={classes.topBar}>
        <div className={classes.topBarLeft}>
          <Button className={classes.topBarButton}>Download Tokopedia App</Button>
        </div>
        <div className={classes.topBarRight}>
          <Button className={classes.topBarButton}>Tentang Tokopedia</Button>
          <Button className={classes.topBarButton}>Mitra Tokopedia</Button>
          <Button className={classes.topBarButton}>Mulai Berjualan</Button>
          <Button className={classes.topBarButton}>Promo</Button>
          <Button className={classes.topBarButton}>Pusat Bantuan</Button>
        </div>
      </div>
      <AppBar position="fixed" className={classes.appBar}>
        <div className={classes.sectionMobile}>
          <Toolbar>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} className={classes.logoHeaderResponsive}/>
          </Toolbar>
        </div>
        <SwipeableDrawer
          open={drawerLeft}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {sideLeft('left')}
        </SwipeableDrawer>
        <Toolbar className={classes.sectionDesktop}>
            <img src={logo} className={classes.logoHeader}/>
            <Button className={classes.category}>
              Kategori
            </Button>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Cari produk atau toko"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.cartDiv}>
              <Button aria-label="show 4 new mails">
                <CartIcon className={classes.cartIcon}/>
              </Button>
            </div>
            <Button className={classes.signin}>
              Masuk
            </Button>
            <Button className={classes.signup}>
              Daftar
            </Button>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComponent;
