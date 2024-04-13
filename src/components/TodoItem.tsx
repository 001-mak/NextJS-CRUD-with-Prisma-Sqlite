type TodoItemProps = {
  id: number;
  title: string;
  complete?: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
  const itemid = id.toString();

  return (
    <>
      <li className="flex">
        <input type="checkbox" id={itemid} className="peer cursor-pointer gap-1" />
        <label htmlFor={itemid}>{title}</label>
      </li>
    </>
  );
}
