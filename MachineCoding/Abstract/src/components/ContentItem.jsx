const ContentItem = ({ item }) => {
  const { name, description } = item;
  return (
    <div className="w-6/12 p-3 my-8 flex">
      <div className="w-1/4">
        <img
          src="https://help.goabstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD"
          alt=""
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-xl font-bold p-2">{name}</h1>
        <p className="text-2xl p-3">{description}</p>
        <a href="" className="p-3 text-[#4C5FD5] text-lg">
          Learn More →
        </a>
      </div>
    </div>
  );
};
export default ContentItem;
