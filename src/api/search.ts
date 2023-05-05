import { Disease } from '../types/disease'

import { instance } from '.'
const isLocal = window.location.hostname === 'localhost'
const proxy = isLocal ? '' : 'https://api.clinicaltrialskorea.com'

export const getDiseases = (name: string): Promise<Disease[]> =>
  instance.get(`${proxy}/api/v1/search-conditions/`, {
    params: { name },
    withCredentials: true, // CORS 오류 방지
  })