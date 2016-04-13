/*
     autoFocus={true} 设置输入框自动获取焦点
     placeholder="Untitled" 设置输入框在输入前的提示文字。
     ref='title'  给输入框命名，使其可以在js中访问到（refs）
     
     textAlignVertical="top" 设置文本的垂直对齐方式
*/


import React, {
    StyleSheet,
    Text,
    View,
    TextInput

} from 'react-native';

export default class NoteScreen extends React.Component {
    
    constructor(props) {
        super(props);
        console.log('notescreen',props);
    }
    
    
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus={true}
            autoCapitalize="sentences"
            placeholder="Untitled"
            style={[styles.textInput, styles.title]}
            onEndEditing={(text) => {this.refs.body.focus()}}
            underlineColorAndroid="transparent"
            value={this.props.title}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref="body"
            multiline={true}
            placeholder="Start typing"
            style={[styles.textInput, styles.body]}
            textAlignVertical="top"
            underlineColorAndroid="transparent"
            
            value={this.props.body}
            
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    padding: 20
  },
  title: {
    height: 40
  },
  body: {
    height: 250
  },
  inputContainer: {
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});