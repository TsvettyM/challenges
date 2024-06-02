import Image from "next/image";

interface IProps {
  category: string;
  image: string;
  title: string;
  description: string;
  profileImage: string;
  firstName: string;
  lastName: string;
  time: number;
}

const BlogCard = ({
  category,
  image,
  title,
  description,
  profileImage,
  firstName,
  lastName,
  time,
}: IProps) => {
  return (
    <div className="blog__card flex flex-col justify-start items-start relative bg-white rounded-lg h-full shadow-xl">
      <div className="profile__image flex relative  w-[400px] h-[300px] ">
        <Image
          className="flex absolute pb-1 rounded-t-lg"
          src={image}
          alt=""
          fill
        />
      </div>

      <div className="flex flex-col p-6">
        <p className="category bg-[#F29731] text-white max-w-[100px] text-xs uppercase py-1 px-3 rounded-3xl mb-2">
          {category}
        </p>
        <h4 className="title text-xl text-black font-bold max-w-[300px]">
          {title}
        </h4>
        <p className="description py-3 text-black text-base max-w-[270px]">
          {description}
        </p>
        <div className="flex mt-5">
          <div className="flex w-14 h-14 relative">
            <Image
              className="relative rounded-full"
              src={profileImage}
              alt=""
              fill
            />
          </div>
          <div className="flex flex-col justify-center items-center ml-2">
            <p className="name font-bold">
              {firstName} {lastName}
            </p>
            <p className="time mr-auto text-[#B1AFAB]">{time} h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
