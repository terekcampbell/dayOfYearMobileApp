import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';


export default function WeekOfYear() {

    const weekOfYear = moment().week();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#76C4AE',
            }}>
            <Text
                style={{
                    fontSize: 20,
                }}>
                Week Number Of Year:
            </Text>

            <Text
                style={{
                    fontSize: 80,
                }}>
                {weekOfYear}
            </Text>
        </View>
    );
}
