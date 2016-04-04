/**
 * 样式类型的定义：
 *  当样式是使用在View上的时候，PropTypes 就需要使用View.propTypes.style
 *  当样式是使用在Text上的时候，PropTypes 就需要使用Text.propTypes.style
 */


import React, {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

export default class SimpleButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress }>
                <View style={this.props.style}>
                    <Text style={this.props.textStyle}>{this.props.customText || 'Simple Button'}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
SimpleButton.PropTypes = {
    onPress: React.PropTypes.func.isRequired,
    customText: React.PropTypes.string,
    style: View.propTypes.style,
    textStyle: Text.propTypes.style
};