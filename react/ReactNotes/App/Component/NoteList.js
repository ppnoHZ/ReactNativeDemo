import React, {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', props)
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
    }

    render() {
        return (
            <ListView
                dataSource={
                    this.ds.cloneWithRows([
                        { title: 'note 1', body: 'body 1', id: 1 },
                        { title: 'note 2', body: 'body 2', id: 2 }
                    ])
                }
                renderRow={(rowData) => {
                    return (
                        <TouchableOpacity  onPress={() => this._onPress(rowData) }>
                            <View style={styles.rowStyle}>
                                <Text style={{color: 'red'}}>
                                    {rowData.title}
                                </Text>
                           </View>
                        </TouchableOpacity >
                    )
                } }
                >

            </ListView>
        );
    }
    _onPress(rowData) {
        console.log('点击事件', rowData);
        this.props.navigator.push(
            {
                name: 'createNote',
                note: {
                    id: rowData.id,
                    title: rowData.title,
                    body: rowData.body
                }
            }
        )
    }
}
var styles = StyleSheet.create({

    rowStyle: {
        paddingVertical: 20,
        paddingLeft: 16,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1
    }
});
export default NoteList;