import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, id }) {
  return (
    <Image id={id} source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    borderRadius: 0,
  },
});