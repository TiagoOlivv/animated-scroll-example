import React, { useRef } from 'react';

import {
  Animated,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginTop: 14,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  input: {
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
  },
});

export default function App() {
  const animatedScrollRef = useRef<ScrollView>();
  const defaultPositionScrollAndroid = hp(8);

  function scrollAnimation(index: number) {
    const currentlyFocusedInputRef = TextInput.State.currentlyFocusedInput();

    currentlyFocusedInputRef?.measure((_x, y, _width, height) => {
      const gap =
        Platform.OS === 'ios'
          ? y - height
          : defaultPositionScrollAndroid * index;

      animatedScrollRef.current?.scrollTo({
        y: gap,
        animated: true,
      });
    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Animated.ScrollView
        ref={animatedScrollRef}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(0)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(1)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(2)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(3)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(4)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(5)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(6)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(7)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(8)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(9)}
        />
        <TextInput
          placeholder="Input example"
          style={styles.input}
          onFocus={() => scrollAnimation(10)}
        />
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
}
