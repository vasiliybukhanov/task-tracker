import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskDatePicker.css';

export const TaskDatePicker = () => {
  const dateFormat = 'dd MMM yyyy';
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <DatePicker
      dateFormat={dateFormat}
      placeholderText="Select date"
      selected={selectedDate}
      onChange={(date:Date | null) => setSelectedDate(date)}
    />
  );
};
