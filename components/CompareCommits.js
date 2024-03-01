import { StyleSheet, View} from "react-native";
import Button from './Button';
import ImageViewer from './ImageViewer';

const PlaceholderImage = require("../assets/images/background-image.png");

export default function CompareCommits() {
  return (
    <View style={styles.compareContainer}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} id={1} />
      </View>
      <View style={styles.buttonContainer}>
        <Button  theme="small" label="" iconName="arrow-right" />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} id={2}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   compareContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#25292e',
    alignItems: 'left',
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0, 
  }
});