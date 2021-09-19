const PageWrapper = ({children}) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 mt-8">
      <div className="w-full md:max-w-2xl">
        {children}
      </div>
    </div>
  );
}
 
export default PageWrapper;