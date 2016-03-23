import React, {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

export default class SimpleButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => console.log('Pressed!') }>
                <View>
                    <Text>Simple Button</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
SimpleButton.prototype = {
    onPress: React.PropTypes.func.isRequired,
    customText: React.PropTypes.string
}