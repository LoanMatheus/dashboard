'use client'; //Componentes de erro devem ser tratados pelo client-side

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    //Loga o erro em algum report
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}