import { Router } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from "../src/controllers/categoryController";
import {
  getPembicara,
  createPembicara,
  updatePembicara,
  deletePembicara
} from "../src/controllers/pembicaraController";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from "../src/controllers/eventController";

const router = Router();

router.get("/categories", getCategories);
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

router.get("/pembicara", getPembicara);
router.post("/pembicara", createPembicara);
router.put("/pembicara/:id", updatePembicara);
router.delete("/pembicara/:id", deletePembicara);

router.get("/events", getEvents);
router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

export default router;
