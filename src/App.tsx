import Table from "antd/es/table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeafletMap from "./components/LeafletMap/LeafletMap";
import { columns, data } from "./constants/app";
import { sagaActions } from "./redux/sagas/sagaActions/sagaActions";
import styles from "./styles/App.module.scss";

function App() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeRow !== null) {
      const row = data[activeRow];

      dispatch({
        type: sagaActions.FETCH_POLYLINE_SAGA,
        payload: [
          `${row.from_lat},${row.from_lng}`,
          `${row.to_lat},${row.to_lng}`,
        ],
      });
    }
  }, [activeRow]);

  return (
    <section className={styles.wrapper}>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(_, rowIndex) => {
          return {
            onClick: (e) => {
              if (typeof rowIndex !== "undefined") {
                setActiveRow(rowIndex);
              }
            },
          };
        }}
      />

      <LeafletMap />
    </section>
  );
}

export default App;
