import Form from "../Pages/Login"

function Circle() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full items-center justify-center lg:w-1/2">


      <Circle/>

      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center h-full bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-spin " />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default Circle;