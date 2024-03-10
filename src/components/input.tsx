/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import config from '../assets/styles/config';
import {labelStyle} from '../assets/styles';

type Props = {
  value?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  pin?: string;
  error?: string;
  marginVertical?: number;
};

export const Input: React.FC<Props> = ({
  value,
  placeholderTextColor,
  secureTextEntry,
  placeholder,
  onChangeText,
  keyboardType,
  label,
  error,
  marginVertical,
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(
    secureTextEntry || false,
  );
  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };
  return (
    <View>
      <Text style={[labelStyle, {color: error ? '#F56767' : '#BDBDBD'}]}>
        {error ? error : label}
      </Text>
      <View
        style={{
          borderWidth: 2,
          width: '100%',
          height: 50,
          padding: 10,
          borderColor: '#E8E8E8',
          borderRadius: config.borderRadius.md,
          backgroundColor: '#F6F6F6',
          marginVertical: marginVertical ? marginVertical : 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            color: '#000',
            fontSize: 16,
            fontFamily: 'Inter-Regular',
            flex: 1,
            height: 50,
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isSecureTextEntry}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          defaultValue=""
        />
        {secureTextEntry !== undefined && (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <Text
              style={{
                color: '#19459D',
                fontSize: 16,
                lineHeight: 19.36,
                fontFamily: 'Inter-Medium',
              }}>
              {isSecureTextEntry ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
