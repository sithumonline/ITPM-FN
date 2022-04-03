import { apiInstance } from "../apiInstance";

let basePath = localStorage.getItem("basePath");
let PATH = `/api/v1/${basePath}`;

export async function getNotes() {
  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function getNote() {
  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function create(requestData) {
  try {
    const res = await apiInstance.post(PATH, requestData);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function update(requestData) {
  try {
    const res = await apiInstance.put(`${PATH}/${requestData.id}`, requestData);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}

export async function remove(id) {
  try {
    const res = await apiInstance.delete(`${PATH}/${id}`);
    const apiRes = res.data;
    return apiRes;
  } catch (e) {
    console.error(e);
  }
}
