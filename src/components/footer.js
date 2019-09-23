import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, Typography, Grid, CardActionArea, CardMedia, CardContent, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
// import useStyles from '../styles/slider'
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const FooterComponent = () => {
    const useStyles = makeStyles({
        card: {
          maxWidth: 500,
        },
        media: {
          height: 150,
        },
      });
    const classes = useStyles();
    return(
        <Container style={{marginTop: 30, marginBottom: 100}}>
            <Typography variant="h6">Kategori</Typography>
            <br/>
            <Table style={{width: '100%'}} border={1}>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">Fashion Wanita</TableCell>
                        <TableCell align="right">Fashion Pria</TableCell>
                        <TableCell align="right">Fashion Muslim</TableCell>
                        <TableCell align="right">Fashion Anak</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    )
}
export default FooterComponent;