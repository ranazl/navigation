import React, { Component } from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';

export default class newPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyClass</Text>
                <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

// export default newPage;
