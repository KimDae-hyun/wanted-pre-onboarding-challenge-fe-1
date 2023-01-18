import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2';
import { useCheck } from '../../hooks/useCheck';
import instance from '../../utils/axios/axios';
import { Title } from './styled';
import { UpdateTodo } from './UpdateTodo';

interface propsType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  getTodoList: () => void;
}

export function TodoItem({
  title,
  content,
  id,
  createdAt,
  updatedAt,
  getTodoList,
}: propsType) {
  const update = useCheck();
  const detail = useCheck();

  const deleteTodoList = async (id: string) => {
    try {
      await instance.delete(`/todos/${id}`);
      getTodoList();
    } catch (e) {
      console.log('del', e);
    }
  };

  return (
    <>
      {update.isChecked ? (
        <>
          <UpdateTodo
            id={id}
            setIsUpdate={update.setIsChecked}
            getToDoList={getTodoList}
          />
        </>
      ) : (
        <>
          <Title onClick={() => detail.setIsChecked(!detail.isChecked)}>
            {title}
            <HiOutlinePencilSquare onClick={() => update.setIsChecked(true)} />
            <HiOutlineTrash onClick={() => deleteTodoList(id)} />
          </Title>
          <div>
            {detail.isChecked && (
              <>
                <div>내용 : {content}</div>
                <div>ID : {id}</div>
                <div>생성일 : {createdAt}</div>
                <div>수정일 : {updatedAt}</div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
