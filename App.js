import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Button from './components/Button'; 
import CompareCommits from './components/CompareCommits'
//import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button theme="primary" label="Choose a folder" iconName="folder-open" />
      </View>
      <View>
        <CompareCommits placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="small" label="" iconName="backward" />
        <Button theme="small" label="" iconName="forward" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
// <Button label="Use this photo" /> // has no theme

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    padding: 20,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  footerContainer: {
    flex: 1 / 3,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3
  },
});
