import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Camera from 'react-native-camera';
import SimpleButton from './SimpleButton';

export default class CameraScreen extends React.Component {
    _takePicture(){
         this.refs.cam.capture((err, data) => {
        if (err) return;
        this.props.navigator.pop();
        this.props.onPicture(data);
    });
    }
    
    render() {
        return (
            <Camera
                captureTarget={Camera.constants.captureTarget.disk}
                ref="cam"
                style={styles.container}
            >
                <View style={styles.cameraButtonContainer}>
                        <SimpleButton 
                            onPress={this._takePicture.bind(this)}
                            customText="Capture"
                            style={styles.cameraButtonText}/>
                    </View>
           </Camera>
        );
    }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  },
  cameraButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
  },
  cameraButton: {
    backgroundColor: '#5B29C1',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  cameraButtonText: {
    color: 'white',
    textAlign: 'center'
  }
});
