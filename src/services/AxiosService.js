import Axios from 'axios'
import { baseURL } from '../env'
export const apiSandbox = Axios.create({
  baseURL,
  timeout: 8000
})
