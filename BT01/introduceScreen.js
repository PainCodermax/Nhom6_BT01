import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Sau 10 giây, chuyển đến màn hình Home
      navigation.replace('Home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>
        Nhóm 6:
        Nguyễn Tuấn Trung - 20161388
        Nguyễn Cao Hồng Vinh - 20151592
        Huỳnh Trung Nhân - 201110532
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen;
