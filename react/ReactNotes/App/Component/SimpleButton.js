import React, {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

export default class SimpleButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress }>
                <View>
                    <Text>{this.props.customText || 'Simple Button'}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
SimpleButton.PropTypes = {
    onPress: React.PropTypes.func.isRequired,
    customText: React.PropTypes.string,
    style:PropTypes.string,
};