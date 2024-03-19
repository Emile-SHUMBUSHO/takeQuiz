import React, {memo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {quizeCard, quizeTitle, regularText} from '../assets/styles';

interface Props {
  onAddQuestion: () => void;
  onEditQuiz: () => void;
  onDeleteQiuz: () => void;
  title: string;
  id: number | string;
}

const ManageQuizCard: React.FC<Props> = ({
  onAddQuestion,
  onDeleteQiuz,
  title,
  onEditQuiz,
  id
}) => {
  return (
    <View>
      <View style={quizeCard}>
        <Text style={[quizeTitle, {padding: 0}]}>{title}</Text>
        <TouchableOpacity>
          <Text style={regularText} onPress={onEditQuiz}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteQiuz}>
          <Text style={regularText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onAddQuestion}>
          <Text style={regularText}>Add question</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(
  ManageQuizCard,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
);
