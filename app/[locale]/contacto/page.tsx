import { Button } from "@nextui-org/button";

import { metadataContacto } from "./meta";

export const metadata = metadataContacto;

export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Contacto</h1>
      <Button>Enviar</Button>
    </>
  );
}
