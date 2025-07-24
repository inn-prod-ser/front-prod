"use client";
import Link from "next/link";

import { Icons, UI } from "../../ui";
import { useInputSearchLogic } from "../helpers";

export const InputSearch = () => {
  const {
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
  } = useInputSearchLogic();

  return (
    <div className="navbar-search">
      <UI.Input
        ref={inputRef}
        isClearable
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            "w-full",
            "h-6",
            "flex",
            "items-center",
            "text-center",
            "pl-2",
            "pr-2",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-white",
            "dark:group-data-[focus=true]:bg-white",
            "!cursor-text",
          ],
        }}
        placeholder="¿Qué te gustaría aprender?"
        radius="lg"
        startContent={<Icons.IoSearchOutline size={24} />}
        value={value}
        onChange={handleInputChange}
        onClear={handleClear}
        onFocus={() => {
          if (value) setShowDropdown(true);
        }}
        onKeyDown={handleKeyDown}
      />

      {showDropdown && value && (
        <div ref={dropdownRef} className="navbar-search__dropdown">
          {isLoading ? (
            <div className="navbar-search__searching">
              <UI.Spinner />
              Buscando...
            </div>
          ) : cursos && cursos.length > 0 ? (
            <ul className="navbar-search__results">
              {cursos.slice(0, 6).map((course) => (
                <li key={course.slug} className="navbar-search__result">
                  <Link
                    className="navbar-search__result-link"
                    href={`/curso/${course.slug}`}
                    onClick={() => setShowDropdown(false)}
                  >
                    <div className="navbar-search__result-title">
                      {course.title}
                    </div>
                    <div className="navbar-search__result-description">
                      {course.description}
                    </div>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="navbar-search__see-all"
                  onClick={() => {
                    setShowDropdown(false);
                    router.push(
                      `/cursos/buscar/${encodeURIComponent(value.trim())}`,
                    );
                  }}
                >
                  Ver todos los resultados
                </button>
              </li>
            </ul>
          ) : (
            <div className="navbar-search__no-results">
              No se encontraron resultados
            </div>
          )}
        </div>
      )}
    </div>
  );
};
