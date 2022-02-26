import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    container : {
        display : 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    sidebar: {
        width: '30%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25,
        borderRight: '2px solid grey',
    },
    heading: {
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        marginBottom: 20,
    },
    description: {
        width: '100%',
        fontFamily: 'Montserrat',
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: 'justify',
    },
    coinData: {
        alignSelf: 'start',
        padding: 25,
        paddingTop: 10,
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'space-around',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            alignItems: 'start'
        },
    },
    chartContainer: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        padding: 40,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginTop: 0,
            padding: 20,
            paddingTop: 0,
        },
    },
    selectButton: {
        border: '1px solid gold',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Montserrat',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'gold',
            color: 'black'
        },
        width: '22%'
    }
}))