/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
    AsyncStorage    
} from 'react-native';
// 导入外部组件 注意：from的是 类名不是文件名，没有后缀。
import SimpleButton from './App/Component/SimpleButton';

import NoteScreen from './App/Component/NoteScreen';

import HomeScreen from './App/Component/HomeScreen';

var _= require('underscore');

/**
 * 导航映射的处理方法。(http://facebook.github.io/react-native/docs/navigator.html#navigation-bar)
 */
var NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {
        switch (route.name) {
            case "createNote":
                return (
                    <SimpleButton
                        onPress={() => {
                            navigator.pop()
                        } }
                        customText='返回'
                        style={styles.navBarLeftButton}
                        textStyle={styles.navBarButtonText}
                        />
                )
            default:
                return null;
        }
    },
    RightButton: function (route, navigator, index, navState) {
        switch (route.name) {
            case "home":
                return (
                    <SimpleButton
                        onPress={() => {
                            navigator.push({
                                name: 'createNote',
                                note:{
                                    id:new Date().getTime(),
                                    title:'',
                                    body:''
                                }
                            })
                        } }
                        customText='新建'
                        style={styles.navBarRightButton}
                        textStyle={styles.navBarButtonText}
                        />
                )
             case 'createNote':
                if(route.note.isSaved){
                    return (<SimpleButton onPress={()=>{
                                    navigator.props.onDeleteNote(route.note);
                                    navigator.pop();
                                }
                            }
                            customText="删除"
                            style={styles.navBarRightButton}
                            textStyle={styles.navBarButtonText}
                            
                             />)
                }else{
                    return null;
                }
             
            default:
                return null;
        }
    },
    Title: function (route, navigator, index, navState) {
        switch (route.name) {
            case "createNote":
                return (
                    <Text style={styles.navBarTitleText}>{route.note?route.note.title: 'Create Note'}</Text>
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
    constructor(props) {
        super(props);
        // StatusBarIOS.setStyle('light-content');//IOS 改变状态栏的颜色
        
        // this.state = {
        //         selectedNote: {title:"", body:""},
        //         notes: {
        //             1: {title: "Note 1", body: "body", id: 1},
        //             2: {title: "Note 2", body: "body", id: 2}
        //         }
        //     }
        
        this.state = {
                    notes: {
                        1: {title: "Note", body: "body", id: 1},
                        2: {title: "Note 2", body: "body", id: 2}
                    }
        };
        
        
        this.loadNotes();
        console.log('ReactNotes.state',this.state);
        
    }
    /**
     * 使用本地存储，存储列表
     */
    async saveNotes(notes){
        try {
            await AsyncStorage.setItem('@ReactNotes:notes',JSON.stringify(notes));
        } catch (error) {
            console.log('AsyncStorage error',error.message);
        }
    }
    /**
     * 使用本地存储，读取列表
     */
    async loadNotes(){
        try {
            var notes=await AsyncStorage.getItem("@ReactNotes:notes");
            if(notes!==null)
            {
                this.setState({notes:JSON.parse(notes)});
            }
        } catch (error) {
            console.log('AsyncStorage error',error.message);
        }
    }
    updateNote(note) {
        var newNotes = Object.assign({}, this.state.notes);
        note.isSaved=true;
        newNotes[note.id] = note;
        this.setState({notes:newNotes});
        
        this.saveNotes(newNotes);
        
    }
    /**
     * 删除note
     */
    deleteNote(note){
        var newNotes = Object.assign({}, this.state.notes);
        delete newNotes[note.id];
        this.setState({notes:newNotes});
        this.saveNotes(newNotes);        
    }
    
    tractLoction(){
        navigator.geolocation.getCurrentPosition(
                (initialPostion)=>this.setState({initialPostion}),
                (error)=>alert(error.message)
            );
        // this.watchID=navigator.getCurrentPosition.watch
    }
    renderScene(route, navigator) {
        /**
         * http://facebook.github.io/react-native/docs/navigator.html#renderscene
         * Required function which renders the scene for a given route. 
         * Will be invoked with the route and the navigator object.
         * 
         *  */
        console.log(route.name, navigator);
        
        console.log('state.notes',this);
        // *****　这里的this 需要 在 render 方法里bind一下。 renderScene.bind(this)
        switch (route.name) {
            case 'home':
                return (
                    <HomeScreen navigator={navigator}  
                                notes={_(this.state.notes).toArray()} 
                                onSelectNote={(note)=>navigator.push({name:'createNote',note:note})}
                    />
                    
                );
            case 'createNote':
                return (
                    // <NoteScreen {...route.note}/>
                    //传参数 
                    <NoteScreen onChangeNote={(note)=>{this.updateNote(note)}} testProps={{test:'test'}} note={route.note}/>
                    //传参数 取的时候使用this.props.note this.props.testProps
                    
                    
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
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={
                            NavigationBarRouteMapper
                        }
                        style={styles.navBar}
                        />
                }
                onDeleteNote={(note)=>{this.deleteNote(note)}}
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
