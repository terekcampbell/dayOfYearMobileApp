import React, {useState} from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker'


export default function PickADay() {

    const [date, setDate] = useState(new Date());

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ACA0E9',
            }}>
            <Text
                style={{
                    fontSize: 20,
                }}>
                Pick A Day
            </Text>

            <DatePicker
                date={date}
                onDateChange={setDate}
            />

            <Text
                style={{
                    fontSize: 80,
                }}>
                {moment(date).dayOfYear()}
            </Text>
        </View>
    );
}
