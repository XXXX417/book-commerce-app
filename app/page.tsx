import Image from "next/image";
import { client, getAllBooks } from "./lib/client";

export default async function Home() {
  const { contents } = await getAllBooks();

  return (
    <main className="">
      {contents.map((book) => {
        console.log(book);
        return (
          <div className="" key={book.id}>
            <p>{book.title}</p>
            <Image src={book.thumbnail.url} alt="" width={500} height={300} />
          </div>
        );
      })}
    </main>
  );
}
