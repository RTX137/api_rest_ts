import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
import multerMiddleware from "../middleware/file";
import { getFile } from "../controllers/upload";
/**
 * esta ruta solo pueden acceder solo las personas que tengan un jwt valido
 */
const router = Router()

router.get("/", checkJwt,multerMiddleware.single("myfile"), getFile)

export { router}