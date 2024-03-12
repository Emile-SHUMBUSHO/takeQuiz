import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {container, mainTheme, quizeTitle} from '../assets/styles';
import {useDispatch, useSelector} from 'react-redux';
import DatePickerModal from '../components/datePicker';
import EmptyContent from '../components/emptyContent';
import HomeHeader from '../components/homeHeader';
import QuizeCard from '../components/quizeCard';
import {RootState} from '../store/types';
import {apis} from '../store/apis';
import {UnknownAction} from '@reduxjs/toolkit';

const quizes = [
  {
    id: 1,
    title: 'Module one quiz',
    descrption: 'This quize will cover all contents of module one',
    point: '20%',
  },
  {
    id: 2,
    title: 'Module one quiz',
    descrption: 'This quize will cover all contents of module one',
    point: '20%',
  },
  {
    id: 3,
    title: 'Module one quiz',
    descrption: 'This quize will cover all contents of module one',
    point: '20%',
  },
  {
    id: 4,
    title: 'Module one quiz',
    descrption: 'This quize will cover all contents of module one',
    point: '20%',
  },
  {
    id: 5,
    title: 'Module one quiz',
    descrption: 'This quize will cover all contents of module one',
    point: '20%',
  },
];

const Home: React.FC<any> = ({navigation}) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState<Date | null | string>('');

  const dispatch = useDispatch();

  const {loading, message, statusCode, payload} = useSelector(
    (state: RootState) => state.quiz,
  );

  console.log(payload);

  useEffect(() => {
    dispatch(apis.quiz() as unknown as UnknownAction);
  }, [dispatch]);

  return (
    <View style={[container, {padding: 0}]}>
      <View style={mainTheme}>
        <HomeHeader
          onDrawer={() => navigation.openDrawer()}
          onNotification={() => navigation.navigate('Notification')}
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>

      <Text style={quizeTitle}>Quizes</Text>
      <FlatList
        style={{marginHorizontal: 20}}
        data={payload}
        onEndReachedThreshold={0.1}
        removeClippedSubviews={true}
        initialNumToRender={6}
        windowSize={3}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        renderItem={({item, index}) => (
          <QuizeCard
            title={item.title}
            onPress={() => navigation.navigate('Quiz')}
          />
        )}
        ListEmptyComponent={EmptyContent}
        showsVerticalScrollIndicator={false}
      />
      <DatePickerModal
        open={openDatePicker}
        setOpenDatePicker={setOpenDatePicker}
        setDate={setDate}
      />
    </View>
  );
};

export default Home;
