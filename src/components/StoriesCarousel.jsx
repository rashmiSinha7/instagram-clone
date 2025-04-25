import { useEffect, useState } from "react";
import "./homepage.css";

const StoriesCarousel = ({ data }) => {
  const [showData, setShowData] = useState(data);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    const showDataType = data?.filter((item, index) => {
      return index >= current && index <= current + 7;
    });
    setShowData(showDataType);
  }, [current, data]);

  return (
    <>
      <div className="absolute top-6 left-[250px] flex flex-row">
        {current > 0 && (
          <div className="nav-button left" onClick={prevSlide}>
            ❮
          </div>
        )}
        {showData?.map((story) => {
          return (
            <div>
              <div
                key={story.id}
                className="rounded-4xl h-16 w-16 border-2 border-pink-600 flex justify-center items-center mr-2 ml-2 cursor-pointer"
              >
                <img
                  src={story?.user?.profile_picture}
                  className="rounded-4xl h-14 w-14"
                />
              </div>
              <div className="text-xs text-center mt-1 font-medium">
                {story?.user?.username}
              </div>
            </div>
          );
        })}
        {current < data?.length - 8 && (
          <div className="nav-button right" onClick={nextSlide}>
            ❯
          </div>
        )}
      </div>
    </>
  );
};

export default StoriesCarousel;
