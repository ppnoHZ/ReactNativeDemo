/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
// 导入外部组件 注意：from的是 类名不是文件名，没有后缀。
import SimpleButton from './App/Component/SimpleButton';

import NoteScreen from './App/Component/NoteScreen';

import HomeScreen from './App/Component/HomeScreen';

var NavigationBarRouteMapper = {
    LeftButton: function(route, navigator, index, navState) {
        switch (route.name) {
            case "createNote":
                return (
                    <SimpleButton
                        onPress={() => {
                            navigator.pop()
                        } }
                        customText='Back'
                        />
                )
            default:
                return null;
        }
    },
    RightButton: function(route, navigator, index, navState) {
        switch (route.name) {
            case "home":
                return (
                    <SimpleButton
                        onPress={() => {
                            navigator.push({
                                name: 'createNote'
                            })
                        } }
                        customText='Create Note'
                        />
                )
            default:
                return null;
        }
    },
    Title: function(route, navigator, index, navState) {
        switch (route.name) {
            case "createNote":
                return (
                    <Text>Create Note</Text>
                )
                case "home":
                return (
                    <Text>React Notes</Text>
                )
            default:
                return null;
        }
    },
}
class ReactNotes extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'home':
                return (
                    // <View style={styles.container}>
                    //     <SimpleButton
                    //         customText="Create Note"
                    //         onPress={() => {
                    //             navigator.push({
                    //                 name: 'createNote'
                    //             })
                    //         } }/>
                    // </View>
                    <HomeScreen/>
                );
            case 'createNote':
                return (
                    <NoteScreen/>
                )

        }
    }
    render() {
        return (
            // <View style={styles.container}>
            //     <SimpleButton  customText="testButton" onPress={() => console.log('Pressed!') }/>
            // </View>
            <Navigator
                initialRoute={{ name: 'home' }}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={
                            NavigationBarRouteMapper
                        }
                        />
                }

                >
            </Navigator>
        );
    }
}


// SimpleButton.defaultProps = { customText='text' };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
