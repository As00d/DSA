import { useEffect, useState } from "react";
import ContentItem from "./ContentItem";

const Content = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(
      "https://help.goabstract.com/api/v2/help_center/en-us/categories.json?per_page=90"
    );
    const json = await res.json();
    setData(json.categories);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex m-48 flex-wrap ">
      {data?.map((item, index) => (
        <ContentItem item={item} key={index} />
      ))}
    </div>
  );
};
export default Content;
