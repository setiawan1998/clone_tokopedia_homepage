import { fade, makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 90,
        marginBottom: 20
    },
    carousel: {
        alignItems: 'center',
        width: '100%'
    },
    contentSlider: {
        backgroundColor: '#fff',
        height: 200,
        paddingLeft: 10,
        paddingRight: 10,
        [theme.breakpoints.down('xs')]: {
            height: 100
        },
    },
    imageSlider: {
        height: "100%",
        borderRadius: 10,
    },

    carouselCategory: {
        paddingRight: 50
    },
    contentSliderCategory: {
        pointer: 'cursor',
        padding: 10,
        maxWidth: 100,
        borderRadius: 10,
        border: '1px solid #ccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    contentSliderCategoryImage: {
        maxWidth: '100%'
    },

    carouselCategoryBottom: {
        width: '100%',
    },
    contentSliderCategoryBottom: {
        width: 'auto',
    },
    GridCategoryBottom: {
        cursor: 'pointer',
        width: '95%',
        borderRadius: 50,
        border: '1px solid #ccc',
        maxHeight:40
    },
    contentSliderCategoryImageBottom: {
        maxWidth: 38
    },
}))

export default useStyles;