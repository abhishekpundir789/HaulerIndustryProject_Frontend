import React, {useContext} from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../../context/ContextProvider';
import { postItem } from '../../../network';

export default function ErrandSummary({ navigation, route }) {

    const{ image, selectedweight, selectedquantity, postHeading, description, contactPerson, phoneNumber, specialInstructions, zipCode, province, city, streetAddress, sliderValue, dropOffCity, dropOffContactPerson, dropOffPhoneNumber, dropOffProvince, dropOffSpecialInstructions, dropOffStreetAddress, dropOffZipCode} = route.params;

    const service = "Errands"

    const { currentUser } = useContext(Context)

    return (
        <ScrollView>
        <View style={styles.container}>
          <Text> Errand Summary </Text>
          <Text style={styles.inputLine1} >Post Heading: {postHeading}</Text>
          <Text style={styles.inputLine1} >Post Description: {description}</Text>
          <Text style={styles.inputLine1} >Item Weigth: {selectedweight}</Text>
          <Text style={styles.inputLine1} >Number of Items: {selectedquantity}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} >Pick Up Details: </Text>
          <Text style={styles.inputLine1} >Contact Person: {contactPerson}</Text>
          <Text style={styles.inputLine1} >Phone Number: {phoneNumber}</Text>
          <Text style={styles.inputLine2} >Street Address: {streetAddress}</Text>
          <Text style={styles.inputLine1} >City: {city}</Text>
          <Text style={styles.inputLine1} >Province: {province}</Text>
          <Text style={styles.inputLine1} >Zip Code: {zipCode}</Text>
          <Text style={styles.inputLine2} >Special Instructions: {specialInstructions}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} > Drop Off Details: </Text>
          <Text style={styles.inputLine1} >Contact Person: {dropOffContactPerson}</Text>
          <Text style={styles.inputLine1} >Phone Number: {dropOffPhoneNumber}</Text>
          <Text style={styles.inputLine2} >Street Address: {dropOffStreetAddress}</Text>
          <Text style={styles.inputLine1} >City: {dropOffCity}</Text>
          <Text style={styles.inputLine1} >Province: {dropOffProvince}</Text>
          <Text style={styles.inputLine1} >Zip Code: {dropOffZipCode}</Text>
          <Text style={styles.inputLine2} >Special Instructions: {dropOffSpecialInstructions}</Text>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: image}}/>
          </View>
          <Text style={styles.inputLine1}>Quoted Price: {sliderValue}</Text>
          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ErrandPost1')}><Text style={styles.btnText}> Edit </Text></TouchableOpacity>
          </View> 

          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.btnText} onPress={async () => { await postItem(
                currentUser.uid,
                image,
                service,
                postHeading,
                description,
                selectedweight,
                selectedquantity,
                contactPerson,
                phoneNumber,
                streetAddress,
                city,
                province,
                zipCode,
                specialInstructions,
                sliderValue,
                dropOffContactPerson,
                dropOffPhoneNumber,
                dropOffStreetAddress,
                dropOffCity,
                dropOffProvince,
                dropOffZipCode,
                dropOffSpecialInstructions);navigation.navigate('Confirmation')}}> Post the Job </Text></TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputLine1: {
        height: 40,
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    inputLine2: {
        height: 150,
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    imageContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 80,
        height: 80,
        margin: 5,
        resizeMode: 'contain', 
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    button: {
        backgroundColor: '#0177FC',
        borderRadius: 10,
        display: 'flex',
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
})