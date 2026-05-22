import { Request, Response } from "express";
import prisma from "../../prisma/client";

export async function getCategories(_req: Request, res: Response) {
  try {
    const data = await prisma.categoryEvent.findMany({ orderBy: { id: "asc" } });
    res.json(data);
  } catch {
    res.status(500).json({ message: "Gagal mengambil data kategori" });
  }
}

export async function createCategory(req: Request, res: Response) {
  try {
    const { nama, deskripsi } = req.body;
    const data = await prisma.categoryEvent.create({ data: { nama, deskripsi } });
    res.status(201).json(data);
  } catch {
    res.status(500).json({ message: "Gagal menambahkan kategori" });
  }
}

export async function updateCategory(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { nama, deskripsi } = req.body;
    const data = await prisma.categoryEvent.update({
      where: { id },
      data: { nama, deskripsi }
    });
    res.json(data);
  } catch {
    res.status(500).json({ message: "Gagal mengubah kategori" });
  }
}

export async function deleteCategory(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await prisma.categoryEvent.delete({ where: { id } });
    res.json({ message: "Kategori berhasil dihapus" });
  } catch {
    res.status(500).json({ message: "Gagal menghapus kategori" });
  }
}
