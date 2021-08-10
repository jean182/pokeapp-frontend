import { PageTypes } from "@hooks/use-pagination";
import { usePagination } from "@hooks";
import { IPagination } from "./pagination.interfaces";

function arrow(type: PageTypes) {
  return  type === "next" ? (
    <span aria-hidden="true">&raquo;</span>
  ) : (
    <span aria-hidden="true">&laquo;</span>
  );
}

export default function Pagination({
  current,
  onChange,
  page,
  total,
}: IPagination) {
  const { items } = usePagination({
    count: Math.ceil(total / current),
    onChange,
    page
  });

  return (
    <nav aria-label="Pokedex">
      <ul className="pagination justify-content-center">
      {items.map(({ page, type, selected, disabled, ...item }, index) => {
          let children;
          const active = selected ? " active" : ""
          const disabledClassName = disabled ? " disabled" : ""

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                className="page-link"
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                className="page-link"
                type="button"
                {...item}
              >
                {arrow(type)}
              </button>
            );
          }

          return (
            <li key={index} className={`page-item${active.concat(disabledClassName)}`}>
              {children}
            </li>
          );
        })}
      </ul>
    </nav>
  )
}