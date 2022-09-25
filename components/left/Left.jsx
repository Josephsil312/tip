
// 1. import `NativeBaseProvider` component

import { useState } from "react"

import { View, Text, Pressable, StyleSheet, TextInput, Alert,Button } from 'react-native'
import Right from "../Right/Right"
const Left = () => {

  const [bill, setBill] = useState('')

  const [btntip, setBtntip] = useState(0)
  const [count, setCount] = useState(1)
  const [tipPercent, setTipPercent] = useState(0)

  const onChangeHandle = (newText) => {
    setBill(newText)
  }

  const handleChange = (newTextt) => {
    setTipPercent((newTextt / 100) * bill)
  }

  const handleTip = (tip) => {
    setBtntip(bill * tip)
    setTipPercent('')
  }

  const handleReset = () => {
    setBtntip(0)
    setBill(0)
    setCount(1)
    setTipPercent('')
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count <= 1) {
      Alert.alert(
        'Alert! ',
        'Oops, split number should be greater than 1'
      )
    } else {
      setCount(prevCount => prevCount - 1)
    }
  }

  return (
    <>

      <View style={styles.container}>

        <View style={styles.maincontent}>
          <Text style={styles.bill}>Tip Calculator</Text>
          <TextInput keyboardType='numeric' maxLength={6} placeholder="Enter your bill" style={styles.billentry} value={bill} onChangeText={newText => onChangeHandle(newText)} />
          <Text style={styles.percenttip}>
            Select tip %
          </Text>
          <View style={styles.boxes1}>
            <Button style={styles.bt1}  onPress={() => handleTip(0.05)} title = '5%' />
            <Pressable style={styles.bt2} android_ripple={{ color: '#6ee7b7' }} onPress={() => handleTip(0.10)} ><Text style={styles.btntext}>10%</Text></Pressable>
            <Pressable style={styles.bt5} android_ripple={{ color: '#6ee7b7' }} onPress={() => handleTip(0.15)} ><Text style={styles.btntext}>15%</Text></Pressable>
            <TextInput keyboardType='numeric' maxLength={2} placeholder="Custom" style={styles.billentrypercent} value={tipPercent} onChangeText={newTextt => handleChange(newTextt)} />
          </View>

          <Text style={styles.split}>Split/person</Text>
          <View style={styles.boxes2}>
            <Pressable onPress={handleIncrement} android_ripple={{ color: '#6ee7b7' }} style={styles.count_pos}><Text style={styles.plus}>+</Text></Pressable>
            <View><Text style={styles.counter}>{count}</Text></View>
            <Pressable onPress={handleDecrement} android_ripple={{ color: '#6ee7b7' }} style={styles.count_neg} ><Text style={styles.minus}>-</Text></Pressable>
          </View>
        </View>
        {
          <Right btntip={btntip} handleReset={handleReset} numOfPeople={count} bill={bill} tipPercent={tipPercent} />
        }

      </View>
    </>
  )
}

export default Left

const styles = StyleSheet.create({
  container: {
    marginVertical: '20%',
    padding: 10,
   
    flex:1,
    borderRadius: 40,
    backgroundColor:'cyan',
    alignContent:'center',
    alignSelf:'center'
},
  
  boxes2: {
    position: 'relative',
    alignContent: 'center',
    elevation: 20,
  },
  plus: {
    color: 'white',
    height: 30,
    width: 25,

    fontSize: 23,
    position: 'relative',
    left:35,
 
    

  },
  minus: {
    color: 'white',
    fontSize: 33,
    width: 27,
    position: 'relative',
    height: 30,
    width: 30,
    left: 35,
    top:-10
  },
  split: {
    position: 'relative',
    top: -278,
    left: 0,
    fontSize: 20,
    color: '#065f46',
    fontWeight: 'bold',
    marginTop: 70
  },
  counter: {
    position: 'relative',
    left: 143,
    top: -305,
    color: '#065f46',
    fontSize: 20,

  },

  count_pos: {
    width: 130,
    height: 50,
    backgroundColor: '#059669',
    borderRadius: 20,
    position: 'relative',
    top: -265,
    left: 0,
    elevation: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  count_neg: {
    width: 130,
    height: 50,
    backgroundColor: '#059669',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
    position: 'relative',
    top: -343,
    elevation: 20,
    left: 165
  },
  btntext1: {
    paddingHorizontal: 19,
    paddingVertical: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15
  },
  btntext: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bill: {
    position: 'relative',
    top: -8,
    fontSize: 30,
    color: '#065f46',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    outline: 'None'
  },
  billentry: {
    width: 300,
    height: '8%',
    color: '#065f46',
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: 'rgb(187, 200, 209)',
    padding: 5,
    outline: 'none',


  },
  billentrypercent: {
    width: '47%',
    height: '13%',
    color: '#065f46',
    borderRadius: 20,
    fontSize: 20,
    backgroundColor: 'rgb(187, 200, 209)',
    padding: 10,
    outline: 'none',
    position: 'relative',
    left: '53%',
    top: '-15%',
    paddingLeft: 60
  },
  percenttip: {
    position: 'relative',
    left: 0,
    top: 20,
    fontSize: 20,
    color: '#065f46',
    fontWeight: 'bold'
  },

  bt1: {
    width: '10%',
    elevation: 20,
    height: '14%',
    backgroundColor: '#059669',
    fontWeight: 'bold',
    borderRadius: 20,
    color: 'white',
    position: 'relative',
    left: 0,
    top: '8%',
  },
  bt2: {
    width: '47%',
    height: '14%',
    backgroundColor: '#059669',
    borderRadius: 20,
    color: 'white',
    position: 'relative',
    top: '-6%',
    left: '53%',
    outline: 'none',
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 20,
  },

  bt5: {
    width: '47%',
    height: '13%',
    backgroundColor: '#059669',
    borderRadius: 20,
    color: 'white',
    position: 'relative',
    left: 0,
    top: '-2%',
    outline: 'none',
    paddingHorizontal: 5,
    paddingVertical: 5
  },



  people: {
    width: 245,
    height: 40,
    borderRadius: 10,
    padding: 5,
    position: 'relative',
    bottom: -90,
    left: 5,
  },

});


