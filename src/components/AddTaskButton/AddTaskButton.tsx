import addIcon from '../../assets/images/add.png';
import './AddTaskButton.css';

export const AddTaskButton = () => {
  const onClick = () => {
    console.log('click!');
  };

  return (
    <button className="add-task-button"
      onClick={onClick}>
      <img src={addIcon}
        alt="add task"
        className="add-task-button__icon"/>
    </button>
  );
};
