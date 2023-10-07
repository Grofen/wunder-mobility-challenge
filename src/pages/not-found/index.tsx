const NotFound = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
