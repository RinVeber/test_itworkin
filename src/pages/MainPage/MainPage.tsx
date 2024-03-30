import React from "react";
import "./MainPage.modules.css";
import { getData } from "../../utils/LoaderApi/getData";
import MainContent from "./MainContent/MainContet";
import Loader from "../../componets/Loader/Loader";

export default function MainPage() {
  const [data, setData] = React.useState<any>();
  const [isFetching, setFetching] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [rows, setRows] = React.useState<any>(0);
  const [searchValue, setSearchValue] = React.useState<string>("");

  const filtredArray = Array.from(rows).filter((item: any) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  // const filterArray = Object.fromEntries(
  //   Object.entries(rows).filter(([key, value]) =>
  //     [value]
  //       .toLocaleString()
  //       .toLocaleLowerCase()
  //       .includes(searchValue.toLowerCase())
  //   )
  // );

  React.useEffect(() => {
    getData(page)
      .then((res: any) => {
        setData(res.data);
        setRows(res.data.results.slice(0, 15));
      })
      .catch(() => {
        console.log("что-то пошло не так");
      })
      .finally(() => {
        setFetching(true);
      });
  }, []);

  function ChangePage(typePage: "next" | "last") {
    if (typePage == "next" ? page <= data.info.pages : page > 1) {
      setFetching(false);
      getData(typePage == "next" ? page + 1 : page - 1)
        .then((res: any) => {
          setData(res.data);
          setRows(res.data.results.slice(0, 15));
          setPage((prev) => (typePage == "next" ? prev + 1 : prev - 1));
        })
        .catch(() => {
          console.log("что-то пошло не так");
        })
        .finally(() => {
          setFetching(true);
        });
    }
  }

  return (
    <div>
      {isFetching == false && <Loader />}
      {isFetching == true && (
        <MainContent
          rows={filtredArray}
          setRows={setRows}
          page={page}
          info={data.info}
          changePage={ChangePage}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
    </div>
  );
}
