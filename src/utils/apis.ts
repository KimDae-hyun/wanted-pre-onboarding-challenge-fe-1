import instance from './axios';

export const getTodoList = async () => {
  try {
    const res = await instance.get('/todos');
    return res.data.data;
  } catch (e) {
    console.log('get', e);
  }
};

export const addTodoList = async (title: string, content: string) => {
  try {
    const res = await instance.post('/todos', {
      title: title,
      content: content,
    });
    return res.data.data;
  } catch (e) {
    console.log('add', e);
  }
};

export const updateTodoList = async (
  id: string,
  title: string,
  content: string
) => {
  if (title) {
    try {
      return await instance.put(`/todos/${id}`, {
        title: title,
        content: content,
      });
    } catch (e) {
      console.log('update', e);
    }
  } else alert('제목을 입력하세요!');
};

export const deleteTodoList = async (id: string) => {
  try {
    return await instance.delete(`/todos/${id}`);
  } catch (e) {
    console.log('delete', e);
  }
};
