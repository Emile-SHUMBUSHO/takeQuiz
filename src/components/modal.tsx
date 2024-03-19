import React, { Children } from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {SvgXml} from 'react-native-svg';
import {close} from '../assets/svg/close';
import { flexcontainer, regularText } from '../assets/styles';

interface Props {
  modalizeRef: any;
  closeModal: ()=> void;
  title:string;
  children?:React.ReactNode;
  size?: number;
}

const Modal: React.FC<Props> = ({modalizeRef, closeModal, title, children, size=0.4}) => {
  return (
    <View>
      <Portal>
        <Modalize
          ref={modalizeRef}
          modalStyle={{padding: 20, paddingTop: 30, flex: 1}}
          scrollViewProps={{showsVerticalScrollIndicator: false}}
          handlePosition="inside"
          handleStyle={{backgroundColor: '#A7C0F1'}}
          HeaderComponent={
            <View style={flexcontainer}>
              <Text style={regularText}>{title}</Text>
              <SvgXml
                xml={close}
                onPress={() => {
                  closeModal();
                }}
              />
            </View>
          }
          modalHeight={Dimensions.get('window').height * size}
          children={children}
        />
      </Portal>
    </View>
  );
};

export default Modal;
