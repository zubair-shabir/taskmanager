import { API_URL } from "./utils";

export const createTask = async (taskObj) => {
  const url = `${API_URL}/tasks`;
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(taskObj),
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const GetAllTasks = async () => {
  const url = `${API_URL}/tasks`;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const DeleteTaksById = async (id) => {
  const url = `${API_URL}/tasks/${id}`;
  const options = {
    method: "Delete",
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const UpdateTaskById = async (id, reqBody) => {
  const url = `${API_URL}/tasks/${id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
