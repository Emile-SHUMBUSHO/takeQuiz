import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {
  bouncyCheckboxTextStyle,
  container,
  flexcontainer,
  mainBorder,
  mainTheme,
  quizeTitle,
  regularText,
} from '../assets/styles';
import {useDispatch, useSelector} from 'react-redux';
import {CreateQuestionData, RootState} from '../store/types';
import {apis} from '../store/apis';
import {UnknownAction} from '@reduxjs/toolkit';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import {Input} from '../components/input';
import {Button} from '../components/button';
import {Option} from '../store/helper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DatePickerModal from '../components/datePicker';
import EmptyContent from '../components/emptyContent';
import HomeHeader from '../components/homeHeader';
import ManageQuizCard from '../components/manageQuizCard';
import Modal from '../components/modal';
import Toast from 'react-native-toast-message';

const ManageQuiz: React.FC<any> = ({navigation}) => {
  const dispatch = useDispatch();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState<Date | null | string>('');
  const [quizTitle, setQuizTitle] = useState<string>('');
  const [quizInstructions, setQuizInstructions] = useState<string>('');
  const [quizId, setQuizId] = useState<string | number>('');

  const [data, setData] = useState<CreateQuestionData>({
    questionText: '',
    quiz: '',
    options: [{...new Option('', false)}],
  });

  const handleCreateQuestion = (id: string | number) => {
    setData(prevData => {
      return {
        ...prevData,
        quiz: id,
      };
    });
    openAddQuizQuestionModal();
  };

  // Function to add more options to the question
  const addOption = () => {
    setData(prevData => ({
      ...prevData,
      options: [...prevData.options, {...new Option('', false)}],
    }));
  };

  // Function to handle text change for an option
  const handleOptionChange = (text: string, index: number) => {
    setData(prevData => {
      const updatedOptions = [...prevData.options];
      updatedOptions[index].optionText = text;
      return {
        ...prevData,
        options: updatedOptions,
      };
    });
  };

  // Function to handle checkbox change for an option
  const handleOptionCheckboxChange = (isChecked: boolean, index: number) => {
    setData(prevData => {
      const updatedOptions = [...prevData.options];
      updatedOptions[index].isCorrect = isChecked;
      return {
        ...prevData,
        options: updatedOptions,
      };
    });
  };

  const {loading, message, statusCode, payload} = useSelector(
    (state: RootState) => state.quiz,
  );

  const {createQuizLoading, createQuizMessage, createQuizStatusCode} =
    useSelector((state: RootState) => state.createQuiz);

  const {deleteQuizLoading, deleteQuizMessage, deleteQuizStatusCode} =
    useSelector((state: RootState) => state.deleteQuiz);

  const {updateQuizStatusCode, updateQuizLoading, updateQuizMessage} =
    useSelector((state: RootState) => state.updateQuiz);

  const {
    createQuestionLoading,
    createQuestionMessage,
    createQuestionStatusCode,
  } = useSelector((state: RootState) => state.createquestion);

  useEffect(() => {
    dispatch(apis.quiz() as unknown as UnknownAction);
  }, [
    dispatch,
    createQuizStatusCode,
    deleteQuizStatusCode,
    updateQuizStatusCode,
    createQuestionMessage,
    createQuestionStatusCode,
    updateQuizStatusCode,
    updateQuizMessage,
    deleteQuizMessage,
    createQuizMessage,
    statusCode,
  ]);

  const createQuizModalizeRef = React.useRef<Modalize>(null);
  const opencreateQuizModal = () => {
    createQuizModalizeRef.current?.open();
  };
  const closecreateQuizModal = () => {
    createQuizModalizeRef.current?.close();
  };

  const addQuizQuestionModalizeRef = React.useRef<Modalize>(null);
  const openAddQuizQuestionModal = () => {
    addQuizQuestionModalizeRef.current?.open();
  };
  const closeAddQuizQuestionModal = () => {
    addQuizQuestionModalizeRef.current?.close();
  };

  const editQuizModalizeRef = React.useRef<Modalize>(null);
  const openEditQuizModal = () => {
    editQuizModalizeRef.current?.open();
  };
  const closeEditQuizModal = () => {
    editQuizModalizeRef.current?.close();
  };

  const handleDeleteQuiz = (id: number | string) => {
    dispatch(apis.deleteQuiz({id}) as unknown as UnknownAction);
  };

  const handleUpdateQuiz = (id: string | number) => {
    setQuizId(id);
    openEditQuizModal();
  };

  React.useEffect(() => {
    if (createQuizStatusCode !== 201 && createQuizStatusCode !== 0) {
      Toast.show({
        type: 'error',
        text1: createQuizMessage,
      });

      setTimeout(() => {
        dispatch(apis.resetAll());
        Toast.hide();
      }, 3000);
    }

    if (createQuizStatusCode === 201) {
      Toast.show({
        type: 'success',
        text1: createQuizMessage,
      });
      setTimeout(() => {
        dispatch(apis.resetAll());
        closecreateQuizModal();
        Toast.hide();
      }, 3000);
    }
  }, [createQuizStatusCode, createQuizMessage]);

  React.useEffect(() => {
    if (createQuestionStatusCode !== 201 && createQuestionStatusCode !== 0) {
      Toast.show({
        type: 'error',
        text1: createQuestionMessage,
      });
      
      setTimeout(() => {
        dispatch(apis.resetAll());
        Toast.hide();
      }, 3000);
    }

    if (createQuestionStatusCode === 201) {
      Toast.show({
        type: 'success',
        text1: createQuestionMessage,
      });
      setTimeout(() => {
        dispatch(apis.resetAll());
        closeAddQuizQuestionModal();
        Toast.hide();
      }, 3000);
    }
  }, [createQuestionStatusCode, createQuestionMessage]);

  React.useEffect(() => {
    if (updateQuizStatusCode !== 200 && updateQuizStatusCode !== 0) {
      Toast.show({
        type: 'error',
        text1: updateQuizMessage,
      });
      
      setTimeout(() => {
        dispatch(apis.resetAll());
        Toast.hide();
      }, 3000);
    }

    if (updateQuizStatusCode === 200) {
      Toast.show({
        type: 'success',
        text1: updateQuizMessage,
      });
      setTimeout(() => {
        dispatch(apis.resetAll());
        closeEditQuizModal();
        Toast.hide();
      }, 3000);
    }
  }, [updateQuizStatusCode, updateQuizMessage]);


  React.useEffect(() => {
    if (deleteQuizStatusCode !== 200 && deleteQuizStatusCode !== 0) {
      Toast.show({
        type: 'error',
        text1: deleteQuizMessage,
      });
      
      setTimeout(() => {
        dispatch(apis.resetAll());
        Toast.hide();
      }, 3000);
    }

    if (deleteQuizStatusCode === 200) {
      Toast.show({
        type: 'success',
        text1: deleteQuizMessage,
      });
      setTimeout(() => {
        dispatch(apis.resetAll());
        closeAddQuizQuestionModal();
        Toast.hide();
      }, 3000);
    }
  }, [deleteQuizStatusCode, deleteQuizMessage]);


  return (
    <View style={[container, {padding: 0}]}>
      <View style={mainTheme}>
        <HomeHeader
          onDrawer={() => navigation.openDrawer()}
          onNotification={() => navigation.navigate('Notification')}
        />
      </View>
      <View style={flexcontainer}>
        <Text style={quizeTitle}>Quizzes</Text>
        <TouchableOpacity onPress={() => opencreateQuizModal()}>
          <Text style={quizeTitle}>Create quiz</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={[
          mainBorder,
          {
            marginHorizontal: 10,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          },
        ]}
        data={payload}
        onEndReachedThreshold={0.1}
        removeClippedSubviews={true}
        initialNumToRender={6}
        windowSize={3}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        renderItem={({item, index}) => (
          <ManageQuizCard
            key={index}
            title={item.title}
            onAddQuestion={() => handleCreateQuestion(item._id)}
            onDeleteQiuz={() => handleDeleteQuiz(item._id)}
            onEditQuiz={() => handleUpdateQuiz(item._id)}
            id={item._id}
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
      {/* CREATE QUIZ MODAL */}
      <Modal
        modalizeRef={createQuizModalizeRef}
        closeModal={closecreateQuizModal}
        title="Create quiz">
        <View>
          <Input
            marginVertical={2}
            placeholder="Quiz title"
            onChangeText={text => setQuizTitle(text)}
          />
          <Input
            marginVertical={2}
            placeholder="Quiz instructions"
            onChangeText={text => setQuizInstructions(text)}
          />
          <Button
            radius={10}
            title="Create"
            loading={createQuizLoading}
            onPress={() =>
              dispatch(
                apis.createQuiz({
                  title: quizTitle,
                  instructions: quizInstructions,
                }) as unknown as UnknownAction,
              )
            }
          />
        </View>
      </Modal>
      {/* ADD QUESTION TO QUIZ */}
      <Modal
        size={0.6}
        modalizeRef={addQuizQuestionModalizeRef}
        closeModal={closeAddQuizQuestionModal}
        title="Add question to quiz">
        <View>
          <Input
            marginVertical={2}
            placeholder="Question"
            onChangeText={text => setData({...data, questionText: text})}
          />
          <View style={[mainBorder, {marginVertical: 10}]}>
            <TouchableOpacity onPress={addOption}>
              <Text style={[regularText, {textAlign: 'right'}]}>Add</Text>
            </TouchableOpacity>
            {data.options.map((option, index) => (
              <View key={index}>
                <Text style={regularText}>Option / {index}</Text>
                <Input
                  marginVertical={2}
                  placeholder="Answer"
                  onChangeText={text => handleOptionChange(text, index)}
                />
                <View style={[flexcontainer, {marginVertical: 10}]}>
                  <BouncyCheckbox
                    size={20}
                    fillColor="#19459D"
                    unfillColor="#FFFFFF"
                    text={'True'}
                    iconStyle={{borderColor: '#19459D'}}
                    innerIconStyle={{borderWidth: 2}}
                    textStyle={bouncyCheckboxTextStyle}
                    onPress={(isChecked: boolean) =>
                      handleOptionCheckboxChange(isChecked, index)
                    }
                  />
                  <BouncyCheckbox
                    size={20}
                    fillColor="#19459D"
                    unfillColor="#FFFFFF"
                    text={'False'}
                    iconStyle={{borderColor: '#19459D'}}
                    innerIconStyle={{borderWidth: 2}}
                    textStyle={bouncyCheckboxTextStyle}
                    onPress={(isChecked: boolean) =>
                      handleOptionCheckboxChange(!isChecked, index)
                    }
                  />
                </View>
              </View>
            ))}
          </View>
          <Button
            loading={createQuestionLoading}
            radius={10}
            title="Add"
            onPress={() =>
              dispatch(apis.createQuestion(data) as unknown as UnknownAction)
            }
          />
        </View>
      </Modal>
      {/* EDIT QUIZ MODAL */}
      <Modal
        modalizeRef={editQuizModalizeRef}
        closeModal={closeEditQuizModal}
        title="Edit quiz">
        <View>
          <Input
            marginVertical={2}
            placeholder="Quiz title"
            onChangeText={text => setQuizTitle(text)}
          />
          <Input
            marginVertical={2}
            placeholder="Quiz instructions"
            onChangeText={text => setQuizInstructions(text)}
          />
          <Button
            radius={10}
            title="Update"
            loading={updateQuizLoading}
            onPress={() =>
              dispatch(
                apis.updateQuiz({
                  id: quizId,
                  title: quizTitle,
                  instructions: quizInstructions,
                }) as unknown as UnknownAction,
              )
            }
          />
        </View>
      </Modal>
    </View>
  );
};

export default ManageQuiz;
