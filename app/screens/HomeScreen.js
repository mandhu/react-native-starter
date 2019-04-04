import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Container from "../components/Container";
import {connect} from 'react-redux';
import { changeTheme } from '../store/actions/ThemeAction';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { changeTheme, theme } = this.props;
        return (
            <Container style={styles.container}>
                <Button title="Light" onPress={() => changeTheme('light')} />
                <Button title="Dark" onPress={() => changeTheme('dark')} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default connect(null, {changeTheme})(HomeScreen);