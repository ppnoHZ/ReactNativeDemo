/**
 * this.props.navgator 是通过 <HomeScreen navgator={navigator}/> 传进来的
 */

import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';


import NoteList from './NoteList';

import SimpleButton from './SimpleButton';
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log("notes.length ",this.props.notes.length);
    }
    
    render () {
        return (
            <View style={styles.container}>
            {this.props.notes.length > 0 ?
                <NoteList onSelectNote={this.props.onSelectNote} notes={this.props.notes} navigator={this.props.navigator}/>
                :
                (
                    <View style={styles.container}>
                      <Text style={styles.noNotesText}>你还没有创建过，请先创建</Text>
                        <SimpleButton
                            onPress={()=>this.props.navigator.push({
                                name:'createNote',
                                note: {
                                    id: new Date().getTime(),
                                    title: '',
                                    body: '',
                                    isSaved: false
                                }
                            })}
                            customText="创建"
                            style={styles.simpleButton}
                            textStyle={styles.simpleButtonText}
                        />
                      </View>
                )}

                
            
             </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    noNotesText:{
        color: '#48209A',
        marginBottom: 10
    },
    simpleButton:{
        backgroundColor:'#5B29C1' ,
        borderColor:'#48209A',
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:20,
        paddingVertical:15,
        shadowColor:'darkgrey',
        shadowOffset:{
            width:1,
            heigth:1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    simpleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});