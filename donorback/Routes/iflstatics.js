import expresss from 'express'

import {
    iflstatics
} from "../controllers/DonorDetails";

const router = express.Router();

router.get("/data", iflstatics);

export default router;
