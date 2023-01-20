import { MdOutlineCancel } from 'react-icons/md';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { useMutation, useQueryClient } from 'react-query';
import { useTodos } from '../../hooks/useTodos';
import { updateTodoList } from '../../utils/apis';

interface propsType {
  id: string;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
interface updateProps {
  id: string;
  title: string;
  content: string;
}

export function UpdateTodo({ id, setIsUpdate }: propsType) {
  const title = useTodos();
  const contents = useTodos();
  const queryClient = useQueryClient();

  const updateTodoMutation = useMutation(
    ({ id, title, content }: updateProps) => updateTodoList(id, title, content),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
        queryClient.invalidateQueries(['todos', id]);
      },
    }
  );

  const updateTodo = () => {
    updateTodoMutation.mutate({
      id,
      title: title.value,
      content: contents.value,
    });
    setIsUpdate(false);
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
      <HiOutlinePencilSquare onClick={() => updateTodo()} />
      <MdOutlineCancel onClick={() => setIsUpdate(false)} />
    </form>
  );
}
