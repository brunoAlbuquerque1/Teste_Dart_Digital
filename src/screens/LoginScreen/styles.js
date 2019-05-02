import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        height: '100%',
        flex: 1,
    },
    containerHeader:{
        flex: 1,
    },
    containerLogo:{
        backgroundColor:'#fff',
        marginTop:80,
        height:110,
        marginRight:40,
        borderBottomRightRadius:90,
        borderTopRightRadius:40
    },
    logo:{
        flex:1
    },
    logo_icon:{
        marginTop:15,
        height: 90,
        width: '85%',
    },
    containerBody:{
        alignItems:'center',
        flex: 1,
        marginTop: 40,
        marginBottom: 26,
        marginLeft:50,
        marginRight:50


    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        
    },
    mainButton: {
        borderRadius: 80,
        backgroundColor: '#f48124'
    },
    containerFooter:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'

    },
    innerContent: {
        width: '100%',
        paddingRight: 25,
        paddingLeft: 25,
    },
    imageLogo: {
        height: '100%',
        width: '100%',
    },
    fundo:{
        height: '100%',
        backgroundColor:'rgba(0, 0, 0, 0.2)'
    },
    formContainer: {
   
        width: '100%'
    },
    mainButtonFacebook:{
        marginTop: 5,
        borderRadius: 6,
        backgroundColor:'#3b5997'
    },
    passwordButton: {
        borderRadius: 2,
        marginTop: 10,
    },
    mainButtonText:{
        fontWeight:'bold',
    },

    passwordButtonText: {
        color: '#fff',
        fontWeight:'bold',


    },
    bottomActions: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 25,
        marginBottom: 40
    },
    newAccountButton: {
        marginTop: 10,

        borderRadius: 2,
    },
    newAccountButtonText: {
        color: '#707070',
        paddingRight: 0,
        paddingLeft: 0,


    },
    imageContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        flexDirection:'row',
        justifyContent: 'space-between',

        
        
    },
    inputsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      marginBottom: 40
    },
});