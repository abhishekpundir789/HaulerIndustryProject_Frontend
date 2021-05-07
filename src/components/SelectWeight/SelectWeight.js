import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function SelectWeight({ selectedweight, setSelectedWeight }) {

    return (
        <View style={styles.search}>
            <RNPickerSelect
                value={selectedweight}
                useNativeAndroidPickerStyle={false}
                style={{
                    inputAndroid: {
                        fontSize: 14,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        color: 'black'
                    },
                }}
                onValueChange={(value) => setSelectedWeight(value)}
                placeholder={{ label: "Search by location", value: null }}
                items={[
                    { label: 'Light 0-20Kgs', value: 'Light 0-20Kgs' },
                    { label: 'Medium 20-50Kgs', value: 'Medium 20-50Kgs' },
                    { label: 'Heavy 50Kgs & above', value: 'Heavy 50Kgs & above' },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginVertical: 5,
        borderColor: '#BFBFBF',
        marginLeft: 20
    }
})

