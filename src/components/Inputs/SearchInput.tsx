"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

interface SearchInputProps {
  onSearch?: (query: string) => void;
  onLocationChange?: (location: string) => void;
  query: string;
  isIconSearch?: boolean;
  isIconLocation?: boolean;
  location?: string;
}

interface FormValues {
  query: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  onLocationChange,
  query,
  isIconSearch,
  isIconLocation,
  location,
}) => {
  const t = useTranslations("common.hero");
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (onSearch) {
      onSearch(data.query);
    }
    if (onLocationChange) {
      onLocationChange(location || "");
    }
  };

  return (
    <div className="SearchInput w-full">
      <form
        className="relative flex items-center bg-white rounded-full py-1 pe-1 ps-4 shadow-md w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("query")}
          defaultValue={query}
          placeholder={t("Find your Location")}
          className="w-full border-0 my-3 text-black ms-8 focus:outline-none font-monospace"
        />
        {isIconSearch ? (
          <Icon
            icon="icon-park-outline:search"
            className="text-gray-400 absolute ltr:left-4 rtl:right-4"
            width="28"
            height="28"
          />
        ) : (
          <Icon
            icon="proicons:location"
            className="text-gray-400 absolute ltr:left-4 rtl:right-4"
            width="28"
            height="28"
          />
        )}
        {isIconLocation && (
          <Icon
            icon="mage:location"
            className="text-black mr-3 cursor-pointer"
            width="38"
            height="38"
          />
        )}
        <button
          type="submit"
          className="btn bg-main hover:bg-primary transition-all duration-150 text-white rounded-full px-6 py-3 ml-auto flex items-center"
        >
          {t("Search")}
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
