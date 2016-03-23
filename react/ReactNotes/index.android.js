/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';
// 导入外部组件 注意：from的是 类名不是文件名，没有后缀。
import SimpleButton from './App/Component/SimpleButton'
class ReactNotes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SimpleButton  customText="testButton" onPress={() => console.log('Pressed!') }/>
            </View>
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
