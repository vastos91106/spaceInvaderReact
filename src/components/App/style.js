import {StyleSheet} from "aphrodite";

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '100vh'
    },
    img:{
        position:'absolute',
        marginLeft: 'auto',
        top: 0,
        backgroundRepeat: 'no-repeat',
        objectFit: 'fill'
    }
})