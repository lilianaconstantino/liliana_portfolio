export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[90%] xl:max-w-[1223px] mx-auto px-6">
      {children}
    </div>
  );
}