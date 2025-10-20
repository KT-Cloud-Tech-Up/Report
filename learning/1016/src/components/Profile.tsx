import profile from "../assets/profile.jpg";

interface ProfileProps {
  width: number;
  height: number;
}

function Profile({ width, height }: ProfileProps) {
  return (
    <div className="text-center border-2 border-black border-solid rounded-lg p-7">
      <div className="flex justify-center items-center mb-4">
        <img
          src={profile}
          width={width}
          height={height}
          className="rounded-lg"
        ></img>
      </div>
      <h3 className="text-xl font-bold">진세훈</h3>
      <h4 className="text-lg font-semibold text-gray-500 mb-2">
        Fullstack Developer
      </h4>
      <p className="text-sm">금일 학습 내용 복습 중입니다</p>
    </div>
  );
}

export default Profile;
