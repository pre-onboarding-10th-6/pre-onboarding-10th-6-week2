import { Disease } from '../types/disease'

import { instance } from '.'
const proxy=window.location.hostname==='localhost'?'':'https://api.clinicaltrialskorea.com'
export const getDiseases = (name: string): Promise<Disease[]> =>
instance.get(`${proxy}/api/v1/search-conditions/`, { params: { name } })

