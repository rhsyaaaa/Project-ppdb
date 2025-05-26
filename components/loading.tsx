const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-64 w-64 border-t-4 border-b-5 border-green-500"></div>
    </div>
  );
};

export default Loading;

