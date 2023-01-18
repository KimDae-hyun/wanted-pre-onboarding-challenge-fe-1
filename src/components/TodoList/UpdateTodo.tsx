import { MdOutlineCancel } from 'react-icons/md';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { useTodos } from '../../hooks/useTodos';
import instance from '../../utils/axios/axios';

interface propsType {
  id: string;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  getToDoList: () => void;
}

export function UpdateTodo({ id, setIsUpdate, getToDoList }: propsType) {
  const title = useTodos();
  const contents = useTodos();

  const updateTodoList = async () => {
    if (title.value) {
      try {
        const res = await instance.put(`/todos/${id}`, {
          title: title.value,
          content: contents.value,
        });
        getToDoList();
        setIsUpdate(false);
      } catch (e) {
        console.log('update', e);
      }
    } else alert('제목을 입력하세요!');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type='text'
        placeholder='제목을 적어주세요.'
        maxLength={42}
        value={title.value}
        onChange={title.onChange}
      />
      <input
        type='text'
        placeholder='변경할 내용을 적어주세요.'
        maxLength={420}
        value={contents.value}
        onChange={contents.onChange}
      />
      <HiOutlinePencilSquare onClick={updateTodoList} />
      <MdOutlineCancel onClick={() => setIsUpdate(false)} />
    </form>
  );
}
