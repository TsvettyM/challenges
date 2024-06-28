import BlogCard from "@/features/common/components/BlogCard";

const HomepageBlogCard = () => {
  return (
    <div className="homepage__blog--card w-full bg-[#f2d9bd] flex flex-col justify-center items-center h-full py-20">
      <div className="container flex justify-center items-center h-full">
        <BlogCard
          category="technology"
          image="/images/laptop-img.jpg"
          title="How I Built Web Development Challenges Websites"
          description="If you're looking for inspiration to build your own side project..."
          profileImage="/images/profile-img.jpg"
          firstName="Corey"
          lastName="Lubin"
          time={4}
        />
      </div>
    </div>
  );
};

export default HomepageBlogCard;
