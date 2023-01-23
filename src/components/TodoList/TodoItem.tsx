import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2';
import { useMutation, useQueryClient } from 'react-query';
import { useCheck } from '../../hooks/useCheck';
import { deleteTodoList } from '../../utils/apis';
import { ListForm, TodoTitle, UpdateForm } from './styled';
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
        <UpdateForm>
          <UpdateTodo id={id} setIsUpdate={update.setIsChecked} />
        </UpdateForm>
      ) : (
        <>
          <ListForm>
            <div>
              <TodoTitle onClick={() => detail.setIsChecked(!detail.isChecked)}>
                {title}{' '}
                <div>
                  <HiOutlinePencilSquare
                    onClick={(e) => (
                      update.setIsChecked(true), e.stopPropagation()
                    )}
                    color='#5acf28'
                  />
                  <HiOutlineTrash
                    onClick={(e) => (
                      deleteTodoMutation.mutate(id), e.stopPropagation()
                    )}
                    color='#5acf28'
                  />
                </div>
              </TodoTitle>
            </div>
            {detail.isChecked && (
              <>
                <div>{content}</div>
                <div>ID : {id}</div>
                <div>생성일 : {createdAt}</div>
                <div>수정일 : {updatedAt}</div>
              </>
            )}
          </ListForm>
        </>
      )}
    </>
  );
}
