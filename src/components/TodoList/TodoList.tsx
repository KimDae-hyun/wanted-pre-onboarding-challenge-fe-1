import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useTodos } from '../../hooks/useTodos';
import { PageContainer, Title } from '../../styles/styled';
import { addTodoList, getTodoList } from '../../utils/apis';
import { TodoItem } from './TodoItem';

interface todoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
interface simpleTodoType {
  title: string;
  content: string;
}

function TodoList() {
  const title = useTodos();
  const contents = useTodos();
  const { data } = useQuery<todoType[]>('todos', getTodoList);
  const queryClient = useQueryClient();
  const addTodo = useMutation(
    ({ title, content }: simpleTodoType) => addTodoList(title, content),
    {
      onSuccess: () => queryClient.invalidateQueries('todos'),
    }
  );
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo.mutate({ title: title.value, content: contents.value });
    title.setValue('');
    contents.setValue('');
  };

  return (
    <PageContainer>
      <Title>Todo List</Title>
      <form onSubmit={onSubmit}>
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
        <input type='submit' value='추가' className='button' />
      </form>
      {data?.map((el: todoType) => (
        <TodoItem {...el} />
      ))}
    </PageContainer>
  );
}

export default TodoList;
