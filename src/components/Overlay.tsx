import { useProgress } from "@react-three/drei";

export const Overlay = () => {
  const { progress } = useProgress();
  return (
    <div
      className={
        "absolute top-0 left-0 w-full h-screen flex bg-zinc-900 flex-col justify-center items-center text-zinc-100 text-xl"
      }
    >
      <h1 className=" text-2xl">loading... {progress.toFixed()} % </h1>
    
      <div className="border-t-4 border-sky-900 pt-2">
        <p>
          GitHub: xWxfFle <br />
          Telegram: @xWxfFle
        </p>
      </div>
    </div>
  );
};
