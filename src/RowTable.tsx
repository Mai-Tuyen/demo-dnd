import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
type RowType = {
  idRow: number;
  company: string;
  contact: string;
  country: string;
};
export default function RowTable({
  idRow,
  company,
  contact,
  country,
}: RowType) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: idRow });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <tr ref={setNodeRef} style={style}>
      <td>
        <img
          width={20}
          height={20}
          {...attributes}
          {...listeners}
          src="/drag-handle.svg"
          style={{ cursor: "move" }}
        />
      </td>
      <td>{idRow}</td>
      <td>{company}</td>
      <td>{contact}</td>
      <td>{country}</td>
    </tr>
  );
}
