import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  number: string;
  from_lat: number;
  from_lng: number;
  to_lat: number;
  to_lng: number;
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Номер заявки",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Координаты ОТ lat",
    dataIndex: "from_lat",
    key: "from_lat",
  },
  {
    title: "Координаты ОТ lng",
    dataIndex: "from_lng",
    key: "from_lng",
  },
  {
    title: "Координаты ДО lat",
    key: "to_lat",
    dataIndex: "to_lat",
  },
  {
    title: "Координаты ДО  lng",
    key: "to_lng",
    dataIndex: "to_lng",
  },
];

export const data: DataType[] = [
  {
    key: "1",
    number: "№1",
    from_lat: 59.84660399,
    from_lng: 30.29496392,
    to_lat: 59.82934196,
    to_lng: 59.82934196,
  },
  {
    key: "2",
    number: "№2",
    from_lat: 59.82934196,
    from_lng: 30.42423701,
    to_lat: 59.82761295,
    to_lng: 30.41705607,
  },
  {
    key: "3",
    number: "№3",
    from_lat: 59.83567701,
    from_lng: 30.38064206,
    to_lat: 59.84660399,
    to_lng: 30.29496392,
  },
  {
    key: "4",
    number: "№4",
    from_lat: 59.84660399,
    from_lng: 30.29496392,
    to_lat: 59.82761295,
    to_lng: 30.41705607,
  },
];
