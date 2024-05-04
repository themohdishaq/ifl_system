import expresss from 'express'

import {
    payementgateway
} from "../controllers/payementgateway";

const router = express.Router();

router.get(`/student-id${id}`, payementgateway);

export default router;
