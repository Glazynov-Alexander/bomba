import Axios from 'axios'

let axios = Axios.create({
    baseURL: "http://localhost:8080"
})




export let updateBodyAPI = (id, text) => {
  return axios.put(`/task/text`, {id, text})
}

export let updateTitleAPI = (id, title) => {
  return axios.put(`/task/title`, {id, title})
}

export let getTasksAPI = () => {
    return axios.get(`/task/get/tasks`)
}
export let createTaskAPI = (title) => {
    return axios.post(`/task/create`, {title})
}
export let deleteTaskAPI = (id) => {
    return axios.delete(`/task/delete/?id=${id}`)
}