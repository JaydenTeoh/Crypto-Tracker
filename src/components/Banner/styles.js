import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    banner: {
        backgroundImage: 'url(./banner2.jpg)',
    },
    bannerContent: {
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around'
    },
    tagline: {
        display: 'flex',
        flexDirection: 'column',
        height: '40%',
        justifyContent: 'center',
        textAlign: 'center'
    },
    carousel: {
        height: '50%',
        display: 'flex',
        alignItems: 'center'
    },
    carouselItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        textTransform: 'uppercase',
        color: 'white'
    }
}))