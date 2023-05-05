import { Disease } from '../types/disease'

import { instance } from '.'
const proxy=window.location.hostname==='localhost'?'':'https://pre-onboarding-10th-6-week2.vercel.app'
export const getDiseases = (name: string): Promise<Disease[]> =>
instance.get(`${proxy}/api/v1/search-conditions/`, { params: { name } })

