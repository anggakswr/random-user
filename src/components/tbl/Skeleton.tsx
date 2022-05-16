const Skeleton = () => {
  return (
    <>
      <div
        data-testid="loading"
        className="grid grid-cols-5 gap-x-4 border-b-2 border-gray-300"
      >
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
      </div>

      <div
        data-testid="loading"
        className="grid grid-cols-5 gap-x-4 border-b-2 border-gray-300"
      >
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
      </div>

      <div
        data-testid="loading"
        className="grid grid-cols-5 gap-x-4 border-b-2 border-gray-300"
      >
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
        <span className="m-4 p-4 bg-gray-300 animate-pulse" />
      </div>
    </>
  );
};

export default Skeleton;
