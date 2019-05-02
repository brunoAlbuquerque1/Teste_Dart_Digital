import axios from 'axios'

export const getAllRepository = () => {
    return axios.get(`https://api.github.com/repositories`, {
      
    })
};