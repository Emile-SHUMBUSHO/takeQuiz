import React from 'react';
import DatePicker from 'react-native-date-picker';

interface Props {
  open: boolean;
  setOpenDatePicker: React.Dispatch<React.SetStateAction<boolean>>
  setDate: React.Dispatch<React.SetStateAction<Date | null | string>>
}

const DatePickerModal: React.FC<Props> = ({open, setOpenDatePicker, setDate}) => {
  const handleDate = (selectedDate: Date | any | string) => {
    setDate(selectedDate);
  };
  return (
    <DatePicker
      modal
      theme="light"
      mode="date"
      open={open}
      date={new Date()}
      minuteInterval={10}
      onConfirm={dates => {
        setOpenDatePicker(false);
        handleDate(dates);
      }}
      onCancel={() => {
        setOpenDatePicker(false);
      }}
    />
  );
};

export default DatePickerModal;
