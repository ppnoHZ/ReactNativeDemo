/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
   Image,
   ListView,
  StyleSheet,
  Text,
  View,
} = React;

// var MOCKED_MOVIES_DATA = [
//   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// ];

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var AwesomeProject = React.createClass({
  getInitialState:function(){
    return {
      dataSource:new ListView.DataSource({
        rowHasChanger:(row1,row2)=>row1!==row2,
      }),
      loaded:false,
    };
  },
  componentDidMount: function() {
        this.fetchData();
    },
  fetchData: function() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded:true,
                });
            })
            .done();
    },
  render: function() {

      if(!this.state.movies)
      {
        return this.renderLoadingView();
      }
      return (

            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderMovie}
                      style{styles.listView}
            />

        );


  },
  renderLoadingView:function(){
    return (
      <View style={styles.container}>
        <Text>
            Loading Movies....
        </Text>
      </View>)
  },
  renderMovie:function  (movie) {
    return (
            <View style={styles.container}>
            <Image
                source={{uri: movie.posters.thumbnail}}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
            </View>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 thumbnail:{
  width:52,
  height:81
 },
    rightContainer: {
        flex: 1,
    },
     title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
    textAlign: 'center',
    },
    listView:{
      paddingTop:20,
      backgroundColor:'#F5FCFF'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);