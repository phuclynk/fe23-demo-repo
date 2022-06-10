import { useEffect } from "react";
import useFetchData from "./useFetchData";

export const Home = () => {
    const [data, dataLength, handleUpdateData] = useFetchData('https://jsonplaceholder.typicode.com/todos');

    useEffect(() => {
        handleUpdateData(data?.length ?? 0);
    }, [data])

    return (
        <div className="home">
            <div>Data lenght: {dataLength}</div>
        {data &&
            data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
            })}
        </div>
    );
};