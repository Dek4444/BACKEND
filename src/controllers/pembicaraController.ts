import { Request, Response } from "express";
import prisma from "../../prisma/client";

export async function getPembicara(_req: Request, res: Response) {
  try {
    const data = await prisma.pembicara.findMany({ orderBy: { id: "asc" } });
    res.json(data);
  } catch {
    res.status(500).json({ message: "Gagal mengambil data pembicara" });
  }
}

export async function createPembicara(req: Request, res: Response) {
  try {
    const { nama, keahlian, email } = req.body;
    const data = await prisma.pembicara.create({ data: { nama, keahlian, email } });
    res.status(201).json(data);
  } catch {
    res.status(500).json({ message: "Gagal menambahkan pembicara" });
  }
}

export async function updatePembicara(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { nama, keahlian, email } = req.body;
    const data = await prisma.pembicara.update({
      where: { id },
      data: { nama, keahlian, email }
    });
    res.json(data);
  } catch {
    res.status(500).json({ message: "Gagal mengubah pembicara" });
  }
}

export async function deletePembicara(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await prisma.pembicara.delete({ where: { id } });
    res.json({ message: "Pembicara berhasil dihapus" });
  } catch {
    res.status(500).json({ message: "Gagal menghapus pembicara" });
  }
}
