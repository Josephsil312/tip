import { Text, TouchableOpacity, View } from 'react-native';
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
            <View style={{ backgroundColor: '#0a94a3', borderRadius: 10, marginTop: 20, padding: 10 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Tip Amount</Text>
                        <Text style={{ color: '#8cedf6', fontWeight: 'bold', fontSize: 15,marginBottom:15 }}>/ person</Text>
                    </View>
                    <Text style={{ color: '#8cedf6', fontWeight: 'bold', fontSize: 20 }}>${(totaltip / Number(numofpeep)).toFixed(2)}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Total</Text>
                        <Text style={{ color: '#8cedf6', fontWeight: 'bold', fontSize: 15 }}>/ person</Text>
                    </View>
                    <Text style={{ color: '#8cedf6', fontWeight: 'bold', fontSize: 20 }}>${(((Number(totaltip) + Number(bill)) / Number(numofpeep)).toFixed(2))}</Text>
                </View>
                <TouchableOpacity onPress={props.handleReset}>
                    <View>
                        <Text style={{alignSelf:'center', marginTop:25,borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#8cedf6', color: '#0a94a3', width: '100%', height: 50, textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Reset</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Right

