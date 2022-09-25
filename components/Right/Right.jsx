
import { Pressable, StyleSheet, Text, View, Share, Button } from 'react-native';
const Right = (props) => {

    let btntipp = props.btntip;
    let numofpeep = props.numOfPeople;
    let totaltip
    let tipPercent = props.tipPercent
    let bill = props.bill
    if (tipPercent) {
        totaltip = tipPercent
    } else {
        totaltip = btntipp.toFixed(2)
    }


    return (
        <>
            <View style={styles.maincontent}>
                <View style={styles.tip}>
                    <Text style={styles.tipamt}>Tip Amount</Text>
                    <Text style={styles.tipamt1}>/ person</Text>
                    <Text style={styles.billl1}>${(totaltip / Number(numofpeep)).toFixed(2)}</Text>
                </View>
                <Text style={styles.totall}>Total</Text>
                <Text style={styles.totall1}>/ person</Text>
                <View><Text style={styles.final}>${(((Number(totaltip) + Number(bill)) / Number(numofpeep)).toFixed(2))}</Text></View>
                <Pressable style={styles.reset} android_ripple={{ color: '#065f46' }} onPress={props.handleReset}><Text style={styles.reset_text}>Reset</Text></Pressable>
            </View>

        </>
    )
}

export default Right

const styles = StyleSheet.create({
    maincontent: {
        shadowColor: '#52006A',
        elevation: 20,
        width: '93%',
        height: 195,
        position: 'absolute',
        top:'65%',
        backgroundColor: '#059669',
        borderRadius: 30,
        marginTop: 28,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    totall1: {
        position: 'relative',
        fontSize: 15,
        color: '#006400',
        top: 3,
        left: 10
    },

    tipamt1: {
        position: 'relative',
        fontSize: 15,
        color: '#006400',
        top: 11,
        left: 10
    },
    reset_text: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'bold',
        textAlign: 'center',
        paddingVertical: 10
    },
    reset: {
        width: '95%',
        height: 50,
        position: 'absolute',
        backgroundColor: '#064e3b',
        fontWeight: 'bold',
        borderRadius: 20,
        color: 'white',
        position: 'absolute',
        left: 17,
        top: 134,
    },
    tipamt: {
        position: 'relative',
        top: 8,
        left: 10,
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },

    final: {
        fontSize: 22,
        position: 'relative',
        color: '#065f46',
        fontWeight: 'bold',
        left: 158,
        top: -28,
        height: 500,
        width: 300,
        right: 1
    },
    billl1: {
        fontSize: 22,
        position: 'relative',
        color: '#065f46',
        left: 160,
        top: -20,
        fontWeight: 'bold'
    },
    totall: {
        fontSize: 17,
        position: 'relative',
        color: 'white',
        left: 10,
        top: 2,
        fontWeight: 'bold'
    },
})