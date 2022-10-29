import React, { useContext, useEffect, useRef, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { createContext } from "react";
import { AiFillHeart } from "react-icons/ai";
const Context = createContext();
const StateContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("all");
  const [selected, setSelected] = useState("Editorial");
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [change, setChange] = useState(false);
  const [hide, setHide] = useState(false);
  const [filterSelected, setFilterSelected] = useState("Photos");
  const [photoId, setPhotoId] = useState("");
  const [collectionId, setCollectionId] = useState("1006059");
  const [userId, setUserId] = useState("dell");
  const quickSearch = [
    {
      title: "Editorial",
      route: "/",
    },
    {
      title: "Anime",
      route: "/Anime",
    },
    {
      title: "Wallpapers",
      route: "/Wallpapers",
    },
    {
      title: "Texture",
      route: "/Texture",
    },
    {
      title: "Nature",
      route: "/Nature",
    },
    {
      title: "Fashion",
      route: "/Fashion",
    },
    {
      title: "Wildlife",
      route: "/Wildlife",
    },
    {
      title: "Marine",
      route: "/Marine",
    },
  ];
  const searchFilters = [
    {
      title: "Photos",
      icon: IoMdPhotos,
      route: `/search/photos/${searched}`,
    },
    {
      title: "Collections",
      icon: BsStack,
      route: `/search/collections/${searched}`,
    },
    {
      title: "Users",
      icon: HiUsers,
      route: `/search/users/${searched}`,
    },
  ];
  const userFilters = [
    {
      title: "Photos",
      icon: IoMdPhotos,
    },
    {
      title: "Likes",
      icon: AiFillHeart,
    },
    {
      title: "Collections",
      icon: BsStack,
    },
  ];
  return (
    <Context.Provider
      value={{
        selected,
        setSelected,
        search,
        setSearch,
        page,
        setPage,
        userId,
        setUserId,
        photoId,
        setPhotoId,
        collectionId,
        setCollectionId,
        quickSearch,
        searched,
        setSearched,
        searchPage,
        setSearchPage,
        change,
        setChange,
        searchFilters,
        filterSelected,
        setFilterSelected,
        hide,
        setHide,
        userFilters,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
