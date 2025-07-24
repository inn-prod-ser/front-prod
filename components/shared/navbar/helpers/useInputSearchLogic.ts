"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useGetSearchPublicCourses } from "@/hooks";

export const useInputSearchLogic = () => {
  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { cursos, isLoading } = useGetSearchPublicCourses(value);

  useEffect(() => {
    if (value.length > 0) setShowDropdown(true);
    else setShowDropdown(false);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      setShowDropdown(false);
      router.push(`/cursos/buscar/${encodeURIComponent(value.trim())}`);
    }
  };

  const handleClear = () => {
    setValue("");
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  return {
    value,
    showDropdown,
    inputRef,
    dropdownRef,
    cursos,
    isLoading,
    handleInputChange,
    handleKeyDown,
    handleClear,
    setShowDropdown,
    router,
  };
};
