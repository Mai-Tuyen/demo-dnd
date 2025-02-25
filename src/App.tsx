import { DndContext, DragEndEvent } from "@dnd-kit/core";
import "./App.css";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import RowTable from "./RowTable";
import { useState } from "react";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

type RowType = {
  id: number;
  company: string;
  contact: string;
  country: string;
};
function App() {
  const [listData, setListData] = useState<RowType[]>([
    {
      id: 1,
      company: "Alfreds Futterkiste",
      contact: "Maria Anders",
      country: "Germany",
    },
    {
      id: 2,
      company: "Centro comercial Moctezuma",
      contact: "Francisco Chang",
      country: "Mexico",
    },
    {
      id: 3,
      company: "Ernst Handel",
      contact: "Roland Mendel",
      country: "Austria",
    },
    {
      id: 4,
      company: "IIG",
      contact: "1243535",
      country: "VN",
    },
    {
      id: 5,
      company: "Havinash",
      contact: "yyyyy",
      country: "Austria",
    },
    {
      id: 6,
      company: "FPT",
      contact: "876984",
      country: "USA",
    },
  ]);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && active.id !== over.id) {
      setListData((items) => {
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <table>
        <tr>
          <th></th>
          <th>Id</th>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={listData}>
            {listData.map((item) => (
              <RowTable
                key={item.id}
                idRow={item.id}
                company={item.company}
                contact={item.contact}
                country={item.country}
              />
            ))}
          </SortableContext>
        </DndContext>
      </table>
    </>
  );
}

export default App;
