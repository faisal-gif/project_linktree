const BackgroundDecoration = () => {
  return (
    <>
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-10 right-20 w-20 h-20 border-2 border-white/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-white/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
    </>
  );
};

export default BackgroundDecoration;
