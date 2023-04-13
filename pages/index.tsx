import { Key } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

type TodosType = {
  id: number;
  title: string;
};

export default function Home({ todos }: { todos: TodosType[] }) {

  return (
    <main className="p-12">
      {todos?.length === 0 ? (
          <div>...Loading</div>
        ) : (
          todos?.map((todo: { id: Key; title: string }) => (
            <div
              key={todo.id}
              className="p-3 rounded border mb-2 cursor-pointer hover:bg-[#e5e5e5]"
            >
              <p>
                {todo.id}: {todo.title}
              </p>
            </div>
          ))
        )}
    </main>
  );
}
