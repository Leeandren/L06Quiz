import React, {useState} from 'react';
import {View, Text, Image, Button, Alert, ScrollView,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/Ionicons';

const CarQuestion = ({questionText, imageUri, selectedValue, onValueChange, opt1, opt2, opt3}) => {
    return (
        <View>
            <Text>{questionText}</Text>
            <Image
                source={{uri: imageUri}}
                style={{width: '100%', height: 300}}
            />
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
            >
                <Picker.Item label="-- Select an option --" value=""/>
                <Picker.Item label={opt1} value={opt1}/>
                <Picker.Item label={opt2} value={opt2}/>
                <Picker.Item label={opt3} value={opt3}/>
            </Picker>
        </View>
    );
};

const MyApp = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    return (
        <ScrollView contentContainerStyle={{padding: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom:20}}>
                <Ionicons name="car-sport" size={24} color="black" style={{marginRight: 10}} />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Car Quiz App</Text>
                <Ionicons name="car-sport" size={24} color="black" style={{marginLeft: 10}} />
            </View>

            {/* Question 1 */}
            <CarQuestion
                questionText="1. What car model is this?"
                imageUri="https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                selectedValue={ans1}
                onValueChange={(value) => setAns1(value)}
                opt1="Tesla Model 3"
                opt2="Toyota Camry"
                opt3="Honda Civic"
            />

            {/* Question 2 */}
            <CarQuestion
                questionText="2. What car model is this?"
                imageUri="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                selectedValue={ans2}
                onValueChange={(value) => setAns2(value)}
                opt1="Audi R8"
                opt2="BMW M5"
                opt3="Mercedes AMG GT"
            />

            {/* Question 3 */}
            <CarQuestion
                questionText="3. What car model is this?"
                imageUri="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                selectedValue={ans3}
                onValueChange={(value) => setAns3(value)}
                opt1="Porsche 911"
                opt2="Ferrari F8"
                opt3="Lamborghini Huracan"
            />

            <Button
                title="SUBMIT ANSWERS"
                onPress={() => {
                    let score = 0;

                    if (ans1 === 'Tesla Model 3') {
                        score++;
                    }
                    if (ans2 === 'BMW M5') {
                        score++;
                    }
                    if (ans3 === 'Porsche 911') {
                        score++;
                    }

                    let message = "     You have " + score + " correct answers!\n";
                    if (score === 3) {
                        message += "                    Well done!";
                    } else {
                        message += "     You can do better next time.";
                    }

                    Alert.alert(message);
                }}
            />
        </ScrollView>
    );
};

export default MyApp;