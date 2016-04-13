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


/**
 * 导航映射的处理方法。
 */
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
                        style={styles.navBarLeftButton}
                        textStyle={styles.navBarButtonText}
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
                        style={styles.navBarRightButton}
                        textStyle={styles.navBarButtonText}
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
                    <Text style={styles.navBarTitleText}>Create Note</Text>
                )
            case "home":
                return (
                    <Text style={styles.navBarTitleText}>React Notes</Text>
                )
            default:
                return null;
        }
    },
}
class ReactNotes extends Component {
    constructor(props){
        super(props);
        // StatusBarIOS.setStyle('light-content');//IOS 改变状态栏的颜色
    }
    renderScene(route, navigator) {
        console.log(route.name,navigator);
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
                    <HomeScreen navigator={navigator}/>
                );
            case 'createNote':
                return (
                    <NoteScreen {...route.note}/>
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
                        style={styles.navBar}
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
    navBar: {
        backgroundColor: '#5B29C1',
        borderBottomColor: '#48209A',
        borderBottomWidth: 1
    },
    navBarTitleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 9 // iOS
        // marginVertical: 16 // Android
    },
    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    navBarButtonText: {
        color: '#EEE',
        fontSize: 16,
        marginVertical: 10 // iOS
        // marginVertical: 16 // Android
    }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
