const Shimmer = () => {
  return Array(15)
    .fill(0)
    .map((n, i) => {
      return (
        <div key={i} className="p-5 m-5 border border-black">
          <div className="w-64 h-64 bg-gray-200"></div>
        </div>
      );
    });
};

export default Shimmer;
