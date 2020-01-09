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
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePickerAPI extends React.Component {
  state = {
    avatarSource: {
      uri: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcADIALgAyACAAVAByAGEAbgBzAGYAZQByACAAdwBpAHQAaAAgAHMAUgBHAEIAIABHAGEAbQB1AHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvoAAAOPQAAAORWFlaIAAAAAAAAGKWAAC3hwAAGNtYWVogAAAAAAAAJKIAAA+FAAC21XBhcmEAAAAAAAQAAAACMzMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgBAwL/xABDEAABAwMBBAcEBwUGBwAAAAABAAIDBAURBgcSITETQVFhcZGhFCIygQgjQlKxwdEVM2KSohc0U3KywiQ1Q2OT4fD/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EADURAAICAQEEBwYFBQEAAAAAAAABAgMEEQUSITETMkFRcZGhQmGxweHwBiJSgdEUFUOSorL/2gAMAwEAAhEDEQA/AOqUREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEWJXXGkoW71ZVQwNxn6x4blat+p6eThbqSvrz1GCnIb/ADOwFFO6uD0k+Pr5EsKLLFrGPD08+Rv0Jwo0+4akqMey2amph96rqQT5MB/FfJ9DquoJ6S8UNKD1U9MXEfNyjeT+mDf7afHQlWLp15xX76/+dSU5C9yoc7Sl0m/vOqLg7PVG0MH4rHfoASfvb5dXnveFg77/AGavVfUkWPj+1d5Rf0JzkJlV9Js3iIyy8Vme1zQf0WFPs8ucWTRXok/x77PwJUUsrJj/AIf+kSxxMSX+fziyzd4L3KqCptutbMN6Oeslib1wzdKP5Tx9F+bftDvNI/cro4aoNOHB7OjePmP0UX93hB7t0HHxRP8A2WyyO9jzjNe5lwoozpzWdsvT2wtc6mq3coZftf5TyP4qTDitlVdC6O9W9Uaq6iyiW5YtGERFIRBERAEREAREQBEWBcbrS0DmsmkzM/4IWAukee5o4rGUlFayZlGMpvSK1Znk4X4klZG0uecBYET66rO9I0UcPMM4OlPieTfVZ0UTI24bnvJOSfmvFLe5CUd3g2YjqiqlyKWmwPvzu3B5DifRfF9sqKn++185b/h0/wBS3zGXeq2oACLx1qXWepkrHHqrT7++RrqOy2+kfvwUcLZM56Qt3n/zHJWxCIsowjFaRWhjKcpvWT1CLAqrxbqSXoquvpIJfuSTNafIlZkMrJo2yRPa9jhkOacg+BWRGpxb0TP2iLxzg0EkgAcST1IZHqLXQ3u2T1AgguNFJOTjo2TsLs+AOVsRyTmeyi48JLQFaPUWmbffYne1RBlRj3Z2DD2/qO4reIsLK4Wx3ZrVGdds6pKdb0aOer9aKmx3N9JVfE33mSN5Pb1OH/3NWjs31DLd7dLTVj9+qpcAvPN7DyJ7+GCsLa9SxvtNHV4HSxzdHn+FwPDzAWm2QMcb3WvGdxtPgnvLhj8CubohLDz+hg/yv4afI6nJsjn7M6exfmj8ddPUtpERdOckEREAREQBY1fXU1vpnVFbMyGFvNzzgf8As9y0mrNV0lgiLHfX1jhlkDTy73HqCjFhslfqupZdtSvcaPOYKYe6HDw6m+pVG7M0n0NK3p+i8WbCjB1r6e97sPV+5L5n11Dq+vnsNzudpiNJaqKB8r6yYe/Juj4Y2954ZPJRbY3tFj1HqU2un0+aeV0L56iukqzNId3HMlg5kjhkBbb6RtxZatmT6KDdj9tnipmtbwwwHfOPk0eaiP0UrWCdQXZw4/V0jD5vd/tW2xcGEcaWRd+afY+7wRrMnNlK5UUrdh2rv8X2/DuR0OeSpjaBtuZpTVVbZobIK72UNDpvaujy4tDiMbp5ZA5q5ZHBrC55AaBkk9QXEsG9rTaoze95tzuu8c/4Zkz/AKQrGBRC1ylYtUkVsu2UElDm2doWipkrbZR1U8PQSzQskfFvb24XNBLc8M4zhRrajrWPQmn2XN9IKySSdsDIOl6PJIJJzg8gOxTBoAHDkuc/pW3bfuFhtDHfu45KqQd7iGt9A7zUGJUrrlFrgS5FjrrclzJ9ojak7U2mb9eprR7DBawAB7T0nSuLc7ud0Y+z281C9T7UrteaRtLQRfs1ruEjopC6R/cHYGPlxWDaYzYtgNviI3Z71Vundw4lgOR6Mb5rc7DtOxXC5VF2rGB8dEQyFp4gynjn5D1PcsrowhZLdXBM57MyMm++GJVPTVcfj8CMP0HqY211xktc3RY33Bzh0hHWd3O9+az9lWqqmx3+mo5JXOttXIIpIictY53APHZxxntC6OLR6rlSoia/WUkNGPdNwLIgOzpcDCiUt7VMq5uCtmWV20Serf35nTOpL3Raes1TcrnL0VNAMu6y49TWjrJPABcw6o1fqXaNefYaGOo9me49DbqYnGB1vI+I9pPAKQ/SN1G+s1FDYopMUtAwSygHg6Vwzx8G4/mKszYlpKHT+kaesliH7SuLBNM8ji1h4sYO4Ag+JWvm3bPcXJH1zErq2VhrNsjvWT6qfZ7/AJ+SOdNS6Mv2lmQzXm2vpY5DhkrXNc3e543mk4KsXZztdutNDQWOuoXXWoknZBDUPqNx4a4gAO9072O3sVobbooHbMb0Zw07rWOYT1P6RuMKi9hVrFz2jUL3N3oqJj6p3iBhv9Th5KNwdVijB8zY15Ve1Nnzvy4L8mveuS1WnHXt05nV6ItVqO9U9jt0lVUkEgYjjHOR3UArk5xri5SeiRw9dcrJKEFq2QXa9cmF1FbmOy5pM8gHVww38ypBs1sr7VYumnbu1NWRI4Hm1uPdH5/NRrR1gqdRXV99vTcwOk6RjXDhK4csD7g9cK028lqcKl33SzJrTXq+HebnPvjj48cCt66dZ+/u+/ceoiLcGjCIiAE4UQ13qxljh9npC19xkbloPERD7x/ILeaku0Vls1RWy4O4MMb95x4AeaoKsqZ66slqKh5kqJnbznHrJ/Jafa2e8ePR19Z+iN5sbZqypO23qr1ZLtB6fk1DdJbjcy6Wljfl5ecmaTng9w6/kFcLWhrQAAAOoLW6btzLTZqSjY0AxsG+R1uPFx81s1awMVY1ST6z4vxKe0sx5Vza6q4Je76lE/StZIdP2GQA9E2reHeJj4fgVj/RYvVGLXdrNJKxlb7QKmONxwZGFoacduC3j4hWttI0nDrPSdXaZXiKV2JIJSM9HK34Se7mD3ErkS8aE1TZa91NVWS4dK12GyQQulY7va5oPBdNi9HkYzok9Gjnb9+q7pUtUdC7dtolHYbBVWS2VLJbzWMMThG4H2eM8HOdjk4jgBz45XPOzG601k19YrhWuDKWGpAkceTGkFu8fDOfkpns/wBit8vtZHUaghltNrBDn9JwnlHY1v2c/ePkV5tV2RXSw3aar05Qz1tklO+xsAMj6ftY4cyOx3HvVmj+nqTx1Li+bIbemsaua4I6av8AqO1WGzPudzrYYaNrd5r94HpOwMH2ieoBciXGe47VdphNPG5klfKI428xTwN6z4NyT3nvWHYNAas1BUR09HZq5rAcdJUsdFFGO8uxjwC6f2UbN6LQtue4vbVXeoaBPVYwAPuMHU31PM9QFdKrATalvTfL3E2tmW0mtIor7bQ+CjrrPYqIbtLbaNrWt7M8B88NHmpjsEqoH6ZrKZhHtEVUXvHXuuaMHw4FVXrerfe9cXKWEGR0tT0MQH2sEMaPRa0G62C4Oa01lvrGe6cb0bvDvC1rWq0Zy6z3TnTyd3WOrX7cl8DonaNqyn01Y5S2RpuM7Syni68nhvkdg5+iqTY5YZLtqhlfK0mlt/1rnH7Un2R49fyWDp3R2oNW1wnqG1EdO45krKvePD+HPFx9F0Dpux0dgtEVBb2FsTOLnH4nuPNzj2lYP8q0RtaIW7TyI5Fsd2uPJd/39Dkvai57tomozLkkVjwM9gxj0wuttNVlPW6fttTRuDqeWnY5hbyxujh8uSo/bzoKufd36jtNNJUQztAq44m7z43NGA/A5ggDOORHeqptl8vtJTOttsuNyiglODTU8jwHE8wGjj5LWqbpm9VzPr9uJDbOHS6ppOK4+S1+BbH0hdZU9UItNW2VsvRyCWscw5AcPhjz2jmfksz6Mlr3aa9XZ7eL3spYzjqb7zvUt8lR9zt9ZbKs01yp5KapDWvdHKMOAcMjI5jI48eK6O2TPqaHZ9baGx0vT1swdUTzy5bDC57s8T9pwG7wCwjauk35+Q2jjRw9mLHpeu81q/VvX9vkWBqK/UVkoumq3kvdwjibxfIewD81Fbbp6v1LcG3bUwMdOP3FDyw3+LsHqe5b+z6ahpqs19ymdcLm7nPKODO5jeTQpEBhZuiWQ1K/qrlH+e/w5eJyiyY40XHH4yfOXyj3ePPwPxGxsbWsY0NY0YAAwAOxftEV4oBERAFFNSXre1HatO0jsVFYTNUOB4xwNBJHi4jHhlSp3JUpT3EwfSDn9rdgSZpmZ5DMQ3R8z+Kt4lPSOT/Smylm39EoR/VJIkm2GdzaW2U7ciN73vI6iWgAfiVWcT+jlY/Gd1wdjwOVcW0uyy3WysmpWl9RSOLwwDi5pHvAd/I/JU0uE2xCUcpyfJ6aH0bYU4Tw1Bc1rr5/wdJUtRHU08U0Lt6ORge09oIyvqqj0FrRtrjbb7oXeyA/VTAZMeeoj7v4K16WoiqoGzU8rJYncWvY4EH5rpMPMhlQUovj2o5POwbMOxxkuHY+8+qIiuFIIiIBhavU1wFqsFxricGngfIPEDh64W0UA21VE7dHmkpYpZZKuZkZEbC47o948vAL1cWV8u3oaJzXNJlR7LLebnrq2teN5kTzUyE8fgGf9WF0xuB2C4AkcshU7sGs08NbdK+rp5IS1jYI+kYWk5O87GfBquQkNGSeHaVlY9WazYNDrxd5rjJt/I9QnCwv2nSl+5HKJXjm2IF5HllabXd0qLdoq918DHRyw0kjoySMh2MA8OzKh349h0FdMpzUNOLenmVztI2y/suvntml44Z54SWS1kvvMa4cwxo+LHaeHioHbrvtM1TNv2yW6OEv/VgibTx4/wA4AGPmmwfTtHf9ZSOuUbZ4KGDpxFIMte/eDW5HWBxOF0Hr+7x6f0ZdK7fEZip3MhGcZkcN1gHzIVaKlYt+T0R1d88fZlkcPHqU5vTVy48X9+45EZBV3e/x0s80lRW1NQ2B0j3mQucXbud48/0XbNBTRUVFBSwNDYYWCNg7ABgLlbYXZ3XTaHQyOaXQ0DXVUh7CBhv9RHkur28llix4ORD+Kb07YUL2Vr5/RHqIitHKhERAEREAKpTbhperjuUWprW15DWtFQY/ijc34ZOHVyBPVgK6145ocCHDIPAg9asYuRLGsVkeJVy8WOVU65cPf3Mr/ZxtCo9SU0VLcJGU14aMOY44bN/Ez8xz+SzNT6DorrI+poXijq3cXYGY3nvHUe8LG1Hss09d5XTwRyW6pccl9KQGk9u4eHlhfO26Z1hZQI7dqiCtp2/DFcKcuwOzeBJ9UzMTDzFwemvY9eHg0MHMzsGXFa6dq04+KZDLno2+W9xLqJ08Y+3TnfHlz9FraOvuVmmJppqmkf1t4tz4tPA+SuiiOpBgV8Vnd3wySt9C0rcCLposVUcTj1j4h6hc5bsCMJb1Vmj8/wCDqqfxJKyO7fUmvL04lS0O0m6wgCqjparHWQWO9OHotzBtQgIHtFslaf8AtzA/iApzJZrZJ8dvpHeMLf0XyGn7QD/yyj/8Lf0WcMTOhwV2viiOeZs6zi6NPBkUbtNtZGXUlYD2e4fzX6/tJt7ziKgrpHdjQ39VL2We2sxuW+kbjshb+iy44Y4hiONjB2NACsRpzPatX+v1K0r8H2aX/t9CHR6xr6kf8Fpq4y97zuDzwsmOu1XVH6u1UFE09dRUF5HyapXhAFLHHt9uxvw0XyIJZNS6lSXi2/np6Eejtl9nGa69tiB5so6drf6nZPosmLT9GCHVPT1jx9qqldJ/Sfd9FuEUqx4Lnx8Xr8SKWTY+T08El8D8RRMiYGRMaxg5NaMAfJa/UlqZe7DcLbIQ1lXA+He7N4YB81s0Uui00IozcZKS5o40oK6/bPdTzdFmjuUGYpGSM3myN8PtNPAghZd51FqnaNcaajl36yQH6qkpY91jT94j/c48F1dd7Daby1rbrbqWsDfh6eIPI8CeS+lstFvtURitlFTUkZ5tgjDM+OOaq/0z5b3A6l/iOl6WuldKlz++P3zIpsn0OzRlicyYskudUQ+pkbxAI5Mb3DJ8SSVOUwitRiorRHNX3zyLHbY9WwiIvSEIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z`
      // uri: 'file:///storage/emulated/0/Android/data/com.test/files/Pictures/image-c84d60b7-9c68-4a7b-9a87-afe2c193c3d9.jpg',
    },
  };

  onPressImg = () => {
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '相册',
      customButtons: [{ name: '唯一名称', title: '显示的自定义按钮内容' }],
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
        console.log('Response = ', response.data); // 选择或拍摄的照片数据对象
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  onPressVideo = () => {
    const options = {
      title: '选择视频',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '录制视频',
      chooseFromLibraryButtonTitle: '选择视频',
      mediaType: 'video',
      videoQuality: 'medium', // 视频质量 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('取消');
      } else if (response.error) {
        console.log('发生错误: ', response.error);
      } else if (response.customButton) {
        console.log('自定义按钮被点击，它的名称是：', response.customButton);
      } else {
        console.log('Response = ', response); // 选择或录取的视频数据对象
        this.setState({
          videoSource: response.uri,
        });
      }
    });
  };

  _renderImg = () => {
    const side = 200;
    if (this.state.avatarSource.uri) {
      return (
        <View>
          <Image
            // source={{uri: this.state.avatarSource.uri}}
            source={this.state.avatarSource}
            style={{ width: side, height: side }}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View>
        <Button title="照片" onPress={this.onPressImg} />

        <Button title="视频" onPress={this.onPressVideo} />

        {this._renderImg()}
      </View>
    );
  }
}

export default ImagePickerAPI;
