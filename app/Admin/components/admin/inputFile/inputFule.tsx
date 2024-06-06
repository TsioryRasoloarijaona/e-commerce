/*
how to use this component 
import the component first and put it where ever you want
import the useImageStore 
initialisation : 
    const { urls } = useImageStore();
    you can now get the urls array 
*/

"use client";
import React, { useState } from "react";
import { storage } from "@/app/storage/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { GoUpload } from "react-icons/go";
import { RiImageAddLine } from "react-icons/ri";
import { create } from "zustand";

interface imagesState {
  urls: string[];
  updateUrls: (urls: string[]) => void;
}

export const useImageStore = create<imagesState>((set) => ({
  urls: [],
  updateUrls: (urls: string[]) => set(() => ({ urls: urls })),
}));

export default function InputFile() {
  const { updateUrls } = useImageStore((state) => ({
    updateUrls: state.updateUrls,
  }));
  const [files, setFile] = useState<FileList | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [count, setCount] = useState<number | undefined>(0);

  const downloadUrl = (refName: string) => {
    getDownloadURL(ref(storage, `images/${refName}`))
      .then((url) => {
        urls.push(url);
        alert(url);
      })
      .catch((error) => {
        console.log("url error : " + error);
      });
  };

  const upload = () => {
    if (files == null) return;
    Array.from(files).forEach((element) => {
      const imageName = v4();
      const imageRef = ref(storage, `images/${imageName}`);
      uploadBytes(imageRef, element).then((res) => {
        downloadUrl(imageName);
        updateUrls(urls);
      });
    });
  };
  return (
    <div>
      <label
        htmlFor=""
        className="flex items-center border rounded-full w-fit gap-5"
      >
        <input
          className="text-black absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          type="file"
          onChange={(event) => {
            setFile(event.target.files);
            setCount(event.target.files?.length);
          }}
          multiple
        />
        <span className=" text-black px-3 py-3 text-xl ">
          <RiImageAddLine />
        </span>
        <span className=" text-black   rounded-full  ">
          {count} selected files
        </span>
        <button
          className="px-3 py-2 text-white bg-gray-800 flex items-center gap-3 rounded-full"
          onClick={upload}
        >
          upload <GoUpload />
        </button>
      </label>
    </div>
  );
}
