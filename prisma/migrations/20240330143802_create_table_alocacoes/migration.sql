-- CreateTable
CREATE TABLE "Alocacao" (
    "id" UUID NOT NULL,
    "horario_id" UUID NOT NULL,
    "local_id" UUID NOT NULL,

    CONSTRAINT "pk_alocacoes" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alocacao" ADD CONSTRAINT "Alocacao_horario_id_fkey" FOREIGN KEY ("horario_id") REFERENCES "horarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alocacao" ADD CONSTRAINT "Alocacao_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
