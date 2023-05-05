import { Disease } from '../types/disease'

import { instance } from '.'
const isLocal = window.location.hostname === 'localhost'
const proxy = isLocal ? '' : 'https://pre-onboarding-10th-6-week2.vercel.app'

export const getDiseases = (name: string): Promise<Disease[]> =>
  instance.get(`${proxy}/api/v1/search-conditions/`, {
    params: { name },
    withCredentials: true, // CORS 오류 방지
  })