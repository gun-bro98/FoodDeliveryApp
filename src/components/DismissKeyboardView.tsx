import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
// children이 있으면 화살표 함수 방식으로 쓰자.
const DismissKeyboardView: React.FC<{style?: StyleProp<ViewStyle>}> = ({
  children,
  ...props
}) => (
  // accessible={false}는 장애인이 TouchableWithoutFeedback을 버튼으로 인식하기 때문에 버튼이 아니라고 알려주는 것
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
