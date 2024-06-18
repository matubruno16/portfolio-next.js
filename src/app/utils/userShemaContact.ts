import { z } from "zod";

export const userShemaContact = z.object({
  name: z
    .string()
    .min(3, {
      message: "Introduzca al menos 3 caracteres.",
    })
    .max(200, {
      message: "No introduzca más de 200 caracteres.",
    }),
  subject: z
    .string()
    .min(3, {
      message: "Introduzca al menos 3 caracteres.",
    })
    .max(200, {
      message: "No introduzca más de 200 caracteres.",
    }),

  email: z.string().email({
    message: "El correo electrónico debe ser válido",
  }),

  message: z
    .string()
    .min(3, {
      message: "Introduzca al menos 3 caracteres.",
    })
    .max(500, {
      message: "No introduzca más de 500 caracteres.",
    }),
});
