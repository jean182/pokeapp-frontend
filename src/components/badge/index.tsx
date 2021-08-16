import { PokemonTypes, TYPES_ARR } from "@utils/constants";
import React from "react";

export default function Badge({ name }: { name: PokemonTypes }) {
  const currentType = React.useMemo(() => {
    return TYPES_ARR.find(
      ({ name: itemName }) => itemName === name
    ) ?? TYPES_ARR[TYPES_ARR.length - 1]
  }, [name])

  return (
    <span className="badge rounded-pill d-flex align-items-center" style={{
      height: '35px',
      background: `var(--${name})`,
    }}>
      <img
        src={currentType.src}
        className="img-fluid mh-100 me-1"
        alt={name}
      />
      <strong>{currentType.initials}</strong>
    </span>
  )
}