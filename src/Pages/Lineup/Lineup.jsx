import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Lineup = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const artists = [
    {
      name: "Ariana Grande",
      genre: "Pop",
      image:
        "https://i.pinimg.com/736x/84/8f/f9/848ff9ff46d4473ea2c4567ac9dd6492.jpg",
    },
    {
      name: "Beyoncé",
      genre: "Pop",
      image:
        "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2022/06/Screen-Shot-2022-06-11-at-11.43.20-AM-1024x687.png",
    },
    {
      name: "Billie Eilish",
      genre: "Pop",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Mole Eilish",
      genre: "Pop",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MYt4ALvYAvbqHbKQ7Nzqd3fPKzvnflsmew&usqp=CAU",
    },
    {
      name: "Megan Thee Stallion",
      genre: "Hip Hop",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAeXAeVk12fIS0nt02VL3qHYiW7IvjHJWZQ&usqp=CAU",
    },
    {
      name: "Megan Mola",
      genre: "Hip Hop",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DMlUVpIagTfbYgBgIxJS08Uyl65oGp1_D1P_82WaFMTLg6oK3hNYXDL6CAY__QI0UJQ&usqp=CAU",
    },
    {
      name: "Katy Perry",
      genre: "Pop",
      image:
        "https://pbs.twimg.com/profile_images/1392465354622791687/w_KwtKcE_400x400.jpg",
    },
    {
      name: "Justin Bieber",
      genre: "Hip Hop",
      image:
        "https://i.pinimg.com/1200x/25/94/4f/25944fbf7db03ebf79cd5fb7b5d464aa.jpg",
    },
    {
      name: "Lady Gaga",
      genre: "Pop",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg/220px-Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg",
    },
    {
      name: "Bruno Mars",
      genre: "Hip Hop",
      image:
        "https://image.tmdb.org/t/p/original/h2ZqEqnD6Ve9psbB4YQoybEcWGh.jpg",
    },
    {
      name: "Ed Sheeran",
      genre: "Pop",
      image:
        "https://image.tmdb.org/t/p/original/uecUgTQAJnoQVxzjUNACaal3AJD.jpg",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Music Festival | Lineup</title>
      </Helmet>
      <div className="bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-center bg-cover bg-no-repeat pt-40 -mt-24 pb-10">
        <h2
          data-aos="zoom-in"
          className="text-4xl font-bold text-center text-white"
        >
          Linup
        </h2>
        <p data-aos="zoom-in" className="text-gray-200 text-center">
          Check out the incredible artists performing at our festival.
        </p>
      </div>
      <div className="bg-[#0F2441]">
        <div className="container mx-4 w-fit md:mx-auto  py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div
              data-aos="fade-up"
              key={artist.name}
              className="text-center bg-[#0B1D35] space-y-3 py-10 rounded-full"
            >
              <div className="flex justify-center">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                <p className="text-gray-300">{artist.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lineup;
