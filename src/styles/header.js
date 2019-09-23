import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    topBar: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        backgroundColor: '#fff',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 15,
        paddingRight: 15
    },
    topBarLeft: {
        float: 'left'
    },
    topBarRight: {
        float: 'right'
    },
    topBarButton: {
        fontSize: 10,
        color: '#ccc',
        fontWeight: 'normal',
        "&:hover": {
            backgroundColor: "transparent",
            color: '#42b549'
        },
    },
    appBar: {
        backgroundColor: '#fff',
        color: '#333'
    },
    logoHeader: {
        width: 275,
    },
    logoHeaderResponsive: {
        height: 25
    },
    category: {
        marginLeft: 25,
        marginRight: 25,
        fontSize: 11,
        fontWeight: 'normal',
    },
    search: {
        border: `1px solid #ccc`,
        position: 'relative',
        borderRadius: 5,
        backgroundColor: "#fff",
        width: '100%',
    },
    searchIcon: {
        color: '#ccc',
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#ccc',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        width: '100%',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    cartDiv: {
        paddingLeft: 20,
        paddingRight: 20,
        borderRight: `1px solid #ccc`
    },
    cartIcon: {
        color: '#999'
    },
    signin: {
        fontSize: 11,
        fontWeight: 'normal',
        borderRadius: 5,
    },
    signup: {
        color: '#42b549',
        fontSize: 11,
        fontWeight: 'normal',
        borderRadius: 5,
        border: `1px solid #42b549`
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
    listDrawer: {
        width: 300
    }
}));
export default useStyles;