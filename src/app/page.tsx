import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

function getTodos(){
  return prisma.todo.findMany();
}
export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <div className="m-5 p-5">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl">Todos</h1>
          <Link className="text-xl" href="/addNew">
            Add New
          </Link>
        </header>

        <div className="list">
          <ul>
            {todos.map((item, key) => {
              return <TodoItem key={item.id} id={item.id} title={item.title} complete={item.complete ?? false} createdAt={item.createdAt} updatedAt={item.updatedAt}/>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
