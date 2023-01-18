import { useEffect, useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { PageContainer, Title } from '../../styles/styled';
import instance from '../../utils/axios/axios';
import { TodoItem } from './TodoItem';

interface todoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

function TodoList() {
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const title = useTodos();
  const contents = useTodos();

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    try {
      const res = await instance.get('/todos');
      setTodoList(res?.data.data);
      console.log('get', res.data.data);
    } catch (e) {
      console.log('get', e);
    }
  };

  const addTodoList = async () => {
    try {
      const res = await instance.post('/todos', {
        title: title.value,
        content: contents.value,
      });
      setTodoList(res?.data);
      title.setValue('');
      contents.setValue('');
      getTodoList();
    } catch (e) {
      console.log('add', e);
    }
  };

  return (
    <PageContainer>
      <Title>Todo List</Title>
      {todoList.length > 0 &&
        todoList?.map((el: todoType) => (
          <TodoItem {...el} getTodoList={getTodoList} />
        ))}
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
          placeholder='추가할 내용을 적어주세요.'
          maxLength={420}
          value={contents.value}
          onChange={contents.onChange}
        />
        <input
          type='button'
          value='추가'
          className='button'
          onClick={addTodoList}
        />
      </form>
    </PageContainer>
  );
}

export default TodoList;
