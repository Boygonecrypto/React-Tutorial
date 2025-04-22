import React from "react";
import { ClipLoader } from "react-spinners";
import { useFetch } from "../Hooks/useFetch";
//have a loading state
//display the list of authors (image, name, proffession, add a link to visit their wikipedia profile)

const url = "https://example-data.draftbit.com/authors?_limit=10";
const Getauthors = () => {
  const { isLoading, data: authors } = useFetch(url);
  //   const [authors, setAuthors] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const getAuthors = async () => {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       console.log(data);

  //       setIsLoading(false);
  //       setAuthors(data);
  //     };
  //     getAuthors();
  //   }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-80">
        <ClipLoader color="#1098ad" />;
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <section className="flex flex-wrap gap-4 items-center justify-center">
        {authors.map((author) => {
          const { id, imgUrl, person, articleUrl, professions, description } =
            author;
          return (
            <div
              key={id}
              className="max-w-[350px] w-full h-[500px] rounded-2xl shadow-lg"
            >
              <img
                src={imgUrl}
                alt={person}
                className="object-cover h-[75%] rounded-t-2xl w-full"
              />
              <div className="pl-1.5">
                <p>{person}</p>
                <p>{professions}</p>
                <p>{description}</p>
                <a href={{ articleUrl }}>Read More</a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Getauthors;
