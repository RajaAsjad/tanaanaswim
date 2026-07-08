"use client";

import { useState } from "react";
import { Product, TorsoType } from "@/types";

interface ProductFiltersProps {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
  category: string;
}

export default function ProductFilters({
  products,
  onFilter,
  category,
}: ProductFiltersProps) {
  const [torsoFilter, setTorsoFilter] = useState<TorsoType | "all">("all");
  const [sortBy, setSortBy] = useState("featured");

  const applyFilters = (torso: TorsoType | "all", sort: string) => {
    let filtered = [...products];

    if (torso !== "all" && category === "womens") {
      filtered = filtered.filter(
        (p) => p.torsoOptions.includes(torso) || p.torsoOptions.includes("n/a")
      );
      if (torso !== "n/a") {
        filtered = filtered.filter(
          (p) =>
            p.torsoOptions.includes(torso) &&
            p.torsoOptions.some((t) => t === torso)
        );
      }
    }

    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          return 0;
        });
    }

    onFilter(filtered);
  };

  const handleTorsoChange = (value: TorsoType | "all") => {
    setTorsoFilter(value);
    applyFilters(value, sortBy);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    applyFilters(torsoFilter, value);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-sand-dark">
      <div className="flex flex-wrap items-center gap-3">
        {category === "womens" && (
          <>
            <span className="text-xs tracking-widest uppercase text-charcoal-light">
              Torso:
            </span>
            {(
              [
                { value: "all", label: "All" },
                { value: "long-torso", label: "Long Torso" },
                { value: "regular-torso", label: "Regular Torso" },
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                onClick={() => handleTorsoChange(option.value)}
                className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                  torsoFilter === option.value
                    ? "bg-ocean text-white border-ocean"
                    : "bg-white text-charcoal border-sand-dark hover:border-ocean"
                }`}
              >
                {option.label}
              </button>
            ))}
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-xs tracking-widest uppercase text-charcoal-light">
          Sort:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="px-4 py-2 text-sm border border-sand-dark bg-white focus:outline-none focus:border-ocean"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>
  );
}
