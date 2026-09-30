"use client";

import { useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { Section } from "../../components";
import { products } from "../../constant";
import type { ProductId } from "../../types";
import { chipToneAt, cn } from "../../utils";
import { ProductPanel } from "./ProductPanel";

const PANEL_ID = "product-panel";

const subscribeToHash = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};

const readHash = () => window.location.hash.slice(1);

const readServerHash = () => "";

const isProductId = (value: string): value is ProductId =>
  products.some((product) => product.id === value);

const keyToIndex = (key: string, index: number, lastIndex: number) => {
  switch (key) {
    case "ArrowRight":
    case "ArrowDown":
      return index === lastIndex ? 0 : index + 1;
    case "ArrowLeft":
    case "ArrowUp":
      return index === 0 ? lastIndex : index - 1;
    case "Home":
      return 0;
    case "End":
      return lastIndex;
    default:
      return null;
  }
};

export const ProductShowcase = () => {
  const hash = useSyncExternalStore(subscribeToHash, readHash, readServerHash);
  const [selectedId, setSelectedId] = useState<ProductId | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeId = selectedId ?? (isProductId(hash) ? hash : products[0].id);
  const activeIndex = products.findIndex((product) => product.id === activeId);
  const activeProduct = products[activeIndex];

  const selectTab = (index: number) => {
    const product = products[index];
    setSelectedId(product.id);
    window.history.replaceState(window.history.state, "", `#${product.id}`);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const nextIndex = keyToIndex(event.key, index, products.length - 1);
    if (nextIndex === null) return;
    event.preventDefault();
    selectTab(nextIndex);
  };

  return (
    <Section>
      <div
        role="tablist"
        aria-label="Digital Chautari products"
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center"
      >
        {products.map((product, index) => {
          const isActive = product.id === activeId;
          const Icon = product.icon;

          return (
            <button
              key={product.id}
              id={product.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={PANEL_ID}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectTab(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "inline-flex cursor-pointer items-center justify-center gap-2 rounded-pill border px-5 py-2.5 text-sm font-semibold transition-colors",
                isActive
                  ? "border-teal-dark bg-teal-dark text-white"
                  : "border-line bg-white text-muted hover:border-teal hover:text-teal-dark",
              )}
            >
              <Icon size={16} strokeWidth={2} aria-hidden="true" />
              {product.name}
            </button>
          );
        })}
      </div>

      <div id={PANEL_ID} role="tabpanel" aria-labelledby={activeId} tabIndex={0} className="mt-10">
        <ProductPanel key={activeId} product={activeProduct} tone={chipToneAt(activeIndex)} />
      </div>
    </Section>
  );
};
