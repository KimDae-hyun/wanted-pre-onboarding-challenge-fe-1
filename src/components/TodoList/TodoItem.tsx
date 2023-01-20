import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2';
import { useMutation, useQueryClient } from 'react-query';
import { useCheck } from '../../hooks/useCheck';
import { deleteTodoList } from '../../utils/apis';
import { Title } from './styled';
import { UpdateTodo } from './UpdateTodo';

interface propsType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export function TodoItem({
  title,
  content,
  id,
  createdAt,
  updatedAt,
}: propsType) {
  const update = useCheck();
  const detail = useCheck();
  const queryClient = useQueryClient();
  const deleteTodoMutation = useMutation((id: string) => deleteTodoList(id), {
    onSuccess: () => {
      queryClient.removeQueries(['todos', id]);
      queryClient.invalidateQueries('todos');
    },
  });

  return (
    <>
      {update.isChecked ? (
        <>
          <UpdateTodo id={id} setIsUpdate={update.setIsChecked} />
        </>
      ) : (
        <>
          <Title>
            <span onClick={() => detail.setIsChecked(!detail.isChecked)}>
              {title}
            </span>
            <HiOutlinePencilSquare onClick={() => update.setIsChecked(true)} />
            <HiOutlineTrash onClick={() => deleteTodoMutation.mutate(id)} />
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
