import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [data, setData] = useState();
    const [dataLength, setDataLength] = useState(0)

    const handleUpdateData = setData;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // dấu chấm hỏi '?' giúp chúng ta trả về giá trị null nếu giá trị data.length không tồn tại
            // setDataLength(data?.length ?? 0)
            setData(data)
        });
    }, [url])

    return [data, dataLength, handleUpdateData]
}

export default useFetchData;