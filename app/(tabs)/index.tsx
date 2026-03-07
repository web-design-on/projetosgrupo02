
import ThemedButton from '@/components/themed-button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Hello, World!</ThemedText>

      <View style={styles.buttonContainer}>
        <ThemedButton title="Hello, Button!" onPress={() => alert('Hello, Dev!')} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});