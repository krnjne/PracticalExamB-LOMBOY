import {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function AddBookScreen({navigation, books, setBooks}) {
    //Task 3: build form (title + author textinputs)

    return (
        <View style={StyleSheet.container}>
            {/* your form goes here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});