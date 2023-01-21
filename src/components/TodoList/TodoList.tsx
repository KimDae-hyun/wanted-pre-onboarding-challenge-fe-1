import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useTodos } from '../../hooks/useTodos';
import { PageContainer, Title, VerticalLine } from '../../styles/styled';
import { addTodoList, getTodoList } from '../../utils/apis';
import { TitleForm, TodoContainer, TodosForm, AddButtons } from './styled';
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
    if (title.value) {
      addTodo.mutate({ title: title.value, content: contents.value });
      title.setValue('');
      contents.setValue('');
    } else alert('제목을 입력해주세요!');
  };

  return (
    <PageContainer>
      <Title>Todo List</Title>
      <TodoContainer>
        <TodosForm>
          {data?.map((el: todoType) => (
            <TodoItem {...el} />
          ))}
        </TodosForm>
        <VerticalLine />
        <form onSubmit={onSubmit}>
          <TitleForm>
            <input
              type='text'
              placeholder='제목을 적어주세요.'
              maxLength={42}
              value={title.value}
              onChange={title.onChange}
            />
            <textarea
              placeholder='추가할 내용을 적어주세요.'
              maxLength={420}
              value={contents.value}
              onChange={contents.onChange}
            />
          </TitleForm>
          <AddButtons>
            <input type='submit' value='추가' />
            <input
              type='button'
              value='취소'
              onClick={() => (title.setValue(''), contents.setValue(''))}
            />
          </AddButtons>
        </form>
      </TodoContainer>
    </PageContainer>
  );
}

export default TodoList;
