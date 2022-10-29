import { useEditorialImagesQuery } from "../app/services";
import { useStateContext } from "../context/StateContext";
import Results from "../components/Results";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
const Home = () => {
  const { page } = useStateContext();
  const editorialImages = useEditorialImagesQuery(page);
  // console.log(editorialImages);

  // console.log(Router.asPath);
  return (
    <div className="">
      <div className="gridLayout">
        {!editorialImages?.isLoading ? (
          editorialImages?.data?.map((data, id) => (
            <div className="" key={id}>
              <Results data={data} id={id} />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
