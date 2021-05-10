import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

const clientRoutes = [
  "/",
  "/home",
  "/about-us",
  "/what-is-tihai",
  "/meshuggah-calculator",
]
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
