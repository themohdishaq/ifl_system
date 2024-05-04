import expresss from 'express'

import {
    setting
} from "../controllers/setting";

const router = express.Router();

router.get(`${username}/setting-profile/`, setting);

export default router;
