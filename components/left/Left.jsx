
// 1. import `NativeBaseProvider` component

import { useState } from "react"

import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
      <View style={{flex: 1,justifyContent: 'flex-start',padding: 30,marginTop: 20}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#0a94a3', alignSelf: 'center' }}>Tip Calculator</Text>
        <TextInput keyboardType='numeric' maxLength={12} placeholder="Enter your bill" style={{ width: 300, height: 62, color: '#0a94a3', borderRadius: 10, padding: 5, margin: 20, backgroundColor: 'rgb(187, 200, 209)', fontSize: 22, alignSelf: 'center' }} value={bill} onChangeText={newText => onChangeHandle(newText)} />
        <Text style={{ alignSelf: 'flex-start', fontSize: 20, color: '#0a94a3', fontWeight: 'bold' }}>Select tip %</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
          <TouchableOpacity onPress={() => handleTip(0.05)}>
            <Text style={{ paddingVertical: 12, paddingHorizontal: 10, backgroundColor: '#0a94a3', color: 'white', width: 130, height: 50, textAlign: 'center', borderRadius: 10, fontSize: 18, fontWeight: 'bold' }} >5%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTip(0.10)}>
            <Text style={{ paddingVertical: 12, paddingHorizontal: 10, backgroundColor: '#0a94a3', color: 'white', width: 130, height: 50, textAlign: 'center', borderRadius: 10, fontSize: 18, fontWeight: 'bold' }} >10%</Text></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => handleTip(0.15)}>
            <View>
              <Text style={{ borderRadius: 10, paddingVertical: 12, paddingHorizontal: 10, backgroundColor: '#0a94a3', color: 'white', width: 130, height: 50, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>15%</Text></View>
          </TouchableOpacity>
          <TextInput keyboardType='numeric' maxLength={2} placeholder="Custom" style={{ width: 130, height: 50, color: '#0a94a3', borderRadius: 10, backgroundColor: 'rgb(187, 200, 209)', fontSize: 20, padding: 5 }} value={tipPercent} onChangeText={newTextt => handleChange(newTextt)} />
        </View>
        <Text style={{ alignSelf: 'flex-start', fontSize: 20, color: '#0a94a3', fontWeight: 'bold', marginVertical: 15 }}>Split/person</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={handleIncrement}>
            <Text style={{ paddingVertical: 12, paddingHorizontal: 10, backgroundColor: '#0a94a3', color: 'white', width: 110, height: 50, textAlign: 'center', borderRadius: 10, fontSize: 20, fontWeight: 'bold' }} >+</Text>
          </TouchableOpacity>
          <Text style={{ color: '#0a94a3', fontSize: 22, justifyContent: 'center', alignSelf: 'center' }}>{count}</Text>
          <TouchableOpacity onPress={handleDecrement}>
            <View><Text style={{ borderRadius: 10, paddingVertical: 12, paddingHorizontal: 10, backgroundColor: '#0a94a3', color: 'white', width: 110, height: 50, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}  >-</Text></View>
          </TouchableOpacity>
        </View>
        {
          <Right btntip={btntip} handleReset={handleReset} numOfPeople={count} bill={bill} tipPercent={tipPercent} />
        }
      </View>
    </>
  )
}

export default Left

