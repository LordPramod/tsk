import type { ComponentType } from "react";
import type { ProductId } from "../../../types";
import { ContentStudioPreview } from "./ContentStudioPreview";
import { EcoCreativePreview } from "./EcoCreativePreview";
import { PhysioPreview } from "./PhysioPreview";

export const productPreviews: Record<ProductId, ComponentType> = {
  "eco-creative": EcoCreativePreview,
  "one-content-studio": ContentStudioPreview,
  "physio-at-home": PhysioPreview,
};
