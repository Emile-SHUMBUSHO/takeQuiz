import {TextStyle, ViewStyle} from 'react-native';
import config from './config';

const {colors} = config;

export const container: ViewStyle = {
  padding: 20,
  backgroundColor: colors.background,
  flex: 1,
};

export const dateText: TextStyle = {
  left: 15,
  color: '#646464',
  fontFamily: 'Inter-Regular',
  fontSize: 12,
  lineHeight: 19.36,
  marginBottom: 10,
};

export const loaderContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const userProfileContainer: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 10,
};

export const mainText: TextStyle = {
  color: '#19459D',
  fontSize: 16,
  lineHeight: 19.36,
  fontFamily: 'Inter-Bold',
};

export const headerTitle: TextStyle = {
  color: '#000000',
  fontFamily: 'Poppins-Bold',
  fontSize: 20,
  lineHeight: 29.05,
};

export const header: ViewStyle = {
  width: '100%',
  marginVertical: 10,
  flexDirection: 'row',
  alignItems: 'center',
};

export const headerTitleContainer: ViewStyle = {
  width: '80%',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mainCard: ViewStyle = {
  width: '100%',
  height: 'auto',
  flexDirection: 'row',
  alignItems: 'baseline',
  gap: 10,
  padding: 10,
  borderWidth: 1,
  borderColor: '#C0C0C0',
  borderRadius: 10,
  marginVertical: 10,
};

export const mainTitle: TextStyle = {
  color: '#000000',
  fontSize: 30,
  lineHeight: 36.31,
  fontFamily: 'Inter-Bold',
  marginVertical: 50,
};

export const regularText: TextStyle = {
  color: '#000000',
  fontSize: 16,
  lineHeight: 19.31,
  fontFamily: 'Inter-Regular',
};
