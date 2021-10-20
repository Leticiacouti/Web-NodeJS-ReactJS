import { Router, request, response, Request, Response} from 'express'

import { getRecords } from './controller/RecordsController'
import { saveRecord } from './controller/RecordsController'
import { updateRecord } from './controller/RecordsController'
import { getRecord } from './controller/RecordsController'
import { deleteRecord } from './controller/RecordsController'
import { updateStatus } from './controller/RecordsController'

const routes = Router()

routes.get('/Records', getRecords)
routes.post('/saveRecord', saveRecord)
routes.get('/Record/:id', getRecord)
routes.put('/Record/:id', updateRecord)
routes.delete('/Record/:id', deleteRecord)
routes.patch('/updateStatus/:id', updateStatus)

export default routes