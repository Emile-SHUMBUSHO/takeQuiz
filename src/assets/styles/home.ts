import {TextStyle, ViewStyle, Dimensions} from 'react-native';

export const homeHeader: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  marginBottom: 10,
};

export const mainTheme: ViewStyle = {
  height: 'auto',
  backgroundColor: '#19459D',
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
  padding: 20,
};

export const activeBullet: ViewStyle = {
  height: 8,
  width: 8,
  borderRadius: 5,
  backgroundColor: '#5DB075',
};

export const quizeContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const quizeCard: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomColor: '#E8E8E8',
  borderBottomWidth: 1,
  height: 'auto',
  paddingVertical: 6,
};

export const quizeTitle: TextStyle = {
  color: '#000000',
  fontFamily: 'Poppins-Medium',
  fontSize: 18,
  lineHeight: 29.05,
  padding: 20,
};
