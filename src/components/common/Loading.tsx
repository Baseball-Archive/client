import Icon from '/images/icon.png';

const Loading = () => {
  return (
    <div className="flex min-h-[50vh] flex-row items-center justify-center text-2xl font-bold">
      <img
        className="w-[50px] md:block xl:hidden"
        src={Icon}
        alt="야구볼램 아이콘"
      />
      로딩 중 ...
    </div>
  );
};

export default Loading;
