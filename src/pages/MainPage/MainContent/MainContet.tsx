import React from "react";
import Table from "../../../componets/Table/Table";
import SearchInput from "../../../componets/SearchInput/SearchInput";
import Pagination from "../../../componets/Pagination/Pagination";

interface IMainContentProps {
  rows: any;
  setRows: React.Dispatch<any>;
  page: number;
  info: any;
  changePage: (typePage: "next" | "last") => void;
  searchValue: string;
  setSearchValue: React.Dispatch<string>;
}

export default function MainContent({
  rows,
  setRows,
  page,
  info,
  changePage,
  searchValue,
  setSearchValue,
}: IMainContentProps) {
  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <Table rows={rows} setRows={setRows} />
      <Pagination
        page={page}
        info={info}
        changePage={changePage}
      />
    </>
  );
}
