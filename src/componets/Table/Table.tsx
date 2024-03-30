import React from "react";

export default function Table({ rows, setRows }: any) {
  const [sortArray, setSortArray] = React.useState();
  const [typeSort, setSortType] = React.useState("up");

    const columnTable = React.useMemo(() => {
    return Object.keys(rows[0]);
  }, []);

  function sortData(item: any) {
    if (typeSort == "up") {
      const sortedArray = rows.sort((a: any, b: any) =>
        b[item] < a[item] ? 1 : -1
      );
      setRows(sortedArray);
      setSortType("down");
    } else if (typeSort == "down") {
      const sortedArray = rows.sort((a: any, b: any) =>
        b[item] < a[item] ? -1 : 1
      );
      setRows(sortedArray);
      setSortType("up");
    }
    setSortArray(item);
  }

  const InfoSort = () => {
    return (
      <div className="info__sort">
        Sort: {sortArray}
        {typeSort == "up" ? <div>&#8593;</div> : <div>&#8595;</div>}{" "}
      </div>
    );
  };

  return (
    <>
      <InfoSort />
      <div className="table">
        <div className="table__row-columnName">
          {columnTable &&
            columnTable.map((item, index) => {
              return (
                <div
                  key={index}
                  className="table__cell"
                  onClick={() => sortData(item)}
                >
                  {item}
                </div>
              );
            })}
        </div>

        {rows &&
          rows.map((item: any) => {
            return (
              <div key={item.id} className="table__rows">
                <div className="table__cell">{item.id}</div>
                <div className="table__cell">{item.name}</div>
                <div className="table__cell">{item.type}</div>
                <div className="table__cell">{item.dimension}</div>
                <div className="table__cell">{item.residents}</div>
                <div className="table__cell">{item.url}</div>
                <div className="table__cell">{item.created}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}
