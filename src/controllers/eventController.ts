import { Request, Response } from "express";
import prisma from "../../prisma/client";

export async function getEvents(_req: Request, res: Response) {
  try {
    const data = await prisma.event.findMany({
      include: {
        category: true,
        pembicara: true
      },
      orderBy: { id: "asc" }
    });
    res.json(data);
  } catch {
    res.status(500).json({ message: "Gagal mengambil data event" });
  }
}

export async function createEvent(req: Request, res: Response) {
  try {
    const { judul, deskripsi, tanggal, lokasi, categoryId, pembicaraId } = req.body;

    const data = await prisma.event.create({
      data: {
        judul,
        deskripsi,
        tanggal: new Date(tanggal),
        lokasi,
        categoryId: Number(categoryId),
        pembicaraId: Number(pembicaraId)
      }
    });

    res.status(201).json(data);
  } catch {
    res.status(500).json({ message: "Gagal menambahkan event" });
  }
}

export async function updateEvent(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { judul, deskripsi, tanggal, lokasi, categoryId, pembicaraId } = req.body;

    const data = await prisma.event.update({
      where: { id },
      data: {
        judul,
        deskripsi,
        tanggal: new Date(tanggal),
        lokasi,
        categoryId: Number(categoryId),
        pembicaraId: Number(pembicaraId)
      }
    });

    res.json(data);
  } catch {
    res.status(500).json({ message: "Gagal mengubah event" });
  }
}

export async function deleteEvent(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await prisma.event.delete({ where: { id } });
    res.json({ message: "Event berhasil dihapus" });
  } catch {
    res.status(500).json({ message: "Gagal menghapus event" });
  }
}
