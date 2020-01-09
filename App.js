// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   ScrollView,
// //   View,
// //   Text,
// //   StatusBar,
// //   TouchableOpacity,
// //   Alert,
// //   Button,
// // } from 'react-native';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   PixelRatio,
//   TouchableOpacity,
//   Image,

// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import ImagePicker from 'react-native-image-picker';

// // const App: () => React$Node = () => {
// //   return (
// //     <>
// //       <StatusBar barStyle="dark-content" />
// //       <SafeAreaView>
// //         <ScrollView
// //           contentInsetAdjustmentBehavior="automatic"
// //           style={styles.scrollView}>
// //           <Header />
// //           {global.HermesInternal == null ? null : (
// //             <View style={styles.engine}>
// //               <Text style={styles.footer}>Engine: Hermes</Text>
// //             </View>
// //           )}
// //           <View style={styles.body}>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Step One</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Edit <Text style={styles.highlight}>App.js</Text> to change this
// //                 screen and then come back to see your edits.
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>See Your Changes</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <ReloadInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Debug</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <DebugInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Learn More</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Read the docs to discover what to do next:
// //               </Text>
// //             </View>
// //             <LearnMoreLinks />
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
// //     </>
// //   );
// // };

// // class App extends React.Component {
// //   constructor(props) {
// //     super(props)
// //   }

// //   handleClick = () => {
// //     const options = {
// //       title: 'Select Avatar',
// //       customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
// //       storageOptions: {
// //         skipBackup: true,
// //         path: 'images',
// //       },
// //     };

// //     ImagePicker.launchImageLibrary(options, response => {
// //       console.log('Response = ', response);

// //       if (response.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (response.error) {
// //         console.log('ImagePicker Error: ', response.error);
// //       } else if (response.customButton) {
// //         console.log('User tapped custom button: ', response.customButton);
// //       } else {
// //         const source = { uri: response.uri };

// //         // You can also display the image using data:
// //         // const source = { uri: 'data:image/jpeg;base64,' + response.data };

// //         this.setState({
// //           avatarSource: source,
// //         });
// //       }
// //     });
// //   };

// //   render() {
// //     return (
// //       <View style={{ flex: 1 }}>
// //         <TouchableOpacity
// //           style={{ height: '50%', width: '50%' }}
// //           onPress={this.handleClick}>
// //           <Text style={{ textAlign: 'center' }}>12345</Text>
// //         </TouchableOpacity>
// //         <View>
// //           <Button title="123" onPress={this.handleClick} />
// //         </View>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   scrollView: {
// //     backgroundColor: Colors.lighter,
// //   },
// //   engine: {
// //     position: 'absolute',
// //     right: 0,
// //   },
// //   body: {
// //     backgroundColor: Colors.white,
// //   },
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //     color: Colors.black,
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //     color: Colors.dark,
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// //   footer: {
// //     color: Colors.dark,
// //     fontSize: 12,
// //     fontWeight: '600',
// //     padding: 4,
// //     paddingRight: 12,
// //     textAlign: 'right',
// //   },
// // });

// // export default App;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   state = {
//     avatarSource: null,
//     videoSource: null,
//   };

//   //选择图片
//   selectPhotoTapped() {
//     const options = {
//       title: '选择图片',
//       cancelButtonTitle: '取消',
//       takePhotoButtonTitle: '拍照',
//       chooseFromLibraryButtonTitle: '选择照片',
//       customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//       cameraType: 'back',
//       mediaType: 'photo',
//       videoQuality: 'high',
//       durationLimit: 10,
//       maxWidth: 300,
//       maxHeight: 300,
//       quality: 0.8,
//       angle: 0,
//       allowsEditing: false,
//       noData: false,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };

//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };

//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({
//           avatarSource: source,
//         });
//       }
//     });
//   }

//   //选择视频
//   selectVideoTapped() {
//     const options = {
//       title: '选择视频',
//       cancelButtonTitle: '取消',
//       takePhotoButtonTitle: '录制视频',
//       chooseFromLibraryButtonTitle: '选择视频',
//       mediaType: 'video',
//       videoQuality: 'medium',
//     };

//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled video picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         this.setState({
//           videoSource: response.uri,
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
//           <View
//             style={[styles.avatar, styles.avatarContainer, { marginBottom: 30 }]}>
//             {this.state.avatarSource === null ? (
//               <Text>选择照片</Text>
//             ) : (
//                 <Image style={styles.avatar} source={this.state.avatarSource} />
//               )}
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
//           <View style={[styles.avatar, styles.avatarContainer]}>
//             <Text>选择视频</Text>
//           </View>
//         </TouchableOpacity>

//         {this.state.videoSource && (
//           <Text style={{ margin: 8, textAlign: 'center' }}>
//             {this.state.videoSource}
//           </Text>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   avatarContainer: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatar: {
//     borderRadius: 50,
//     width: 100,
//     height: 100,
//   },
// });

import React from 'react';
import {View, Button, Image,SafeAreaView} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePickerAPI extends React.Component {
  state = {
    avatarSource: {
      uri: 'file:///storage/emulated/0/Android/data/com.test/files/Pictures/image-c84d60b7-9c68-4a7b-9a87-afe2c193c3d9.jpg',
    },
  };

  onPressImg = () => {
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '相册',
      customButtons: [{name: '唯一名称', title: '显示的自定义按钮内容'}],
      cameraType: 'back', // 类型 'front' or 'back' ,前置还是后置摄像头
      mediaType: 'photo', // 图片或视频 'photo', 'video', or 'mixed' on iOS, 'photo' or 'video' on Android
      videoQuality: 'high', // 视频质量 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
      durationLimit: 10, // 最大录制时间
      maxWidth: 300, // 返回的图片数据的最大宽 photos only 只有图片有这个属性
      maxHeight: 300, // 返回的图片数据的最大高 photos only
      quality: 0.8, // 图片质量 0 to 1 photos only
      angle: 90,
      allowsEditing: false, // 是否可以编辑
      noData: false, // 如果为true，则禁用data生成的base64 字段（极大地提高大图片的性能）
      storageOptions: {
        skipBackup: true, // 如果true，该照片将不会备份到iCloud
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('取消');
      } else if (response.error) {
        console.log('发生错误: ', response.error);
      } else if (response.customButton) {
        console.log('自定义按钮被点击，它的名称是：', response.customButton);
      } else {
        // console.log('Response = ', response); // 选择或拍摄的照片数据对象
        // let source = {uri: response.uri};

        
        // You can also display the image using data:
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  _renderImg = () => {
    const side = 200;
    if (this.state.avatarSource) {
      return (
        <View>
          <Image
            //localpath
            // source={{uri: this.state.avatarSource.uri}}

            //base64
            source={this.state.avatarSource}

            // source = {{uri: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==`}}
            
            style={{width: side, height: side}}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Button title="照片" onPress={this.onPressImg} />

        {this._renderImg()}
      </SafeAreaView>
    );
  }
}

export default ImagePickerAPI;
