import {View, Text, StyleSheet} from 'react-native';
//TASK 1: 
export default function BookCard(props) {
    return (
        <View style={StyleSheet.card}>
            <Text style={StyleSheet.title}>Title</Text>
            <View style={styles.footer}>
                <Text style={StyleSheet.footer}>Author</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { 
        flex: 1,
        padding: 12, 
        marginVertical: 6,
        backgroundColor: '#1B2A4A',
        borderRadius: 8
    },
    title: {
        fontSize: 28, 
        fontWeight: 'bold',
        color: '#FFFFF'
    },
    footer: {
        paddingBottom: 40,
        alignItems: 'center'
    },
});