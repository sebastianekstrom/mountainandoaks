export const getRecipeMethodType = (method: any) => {
  if (method[0]?.label && method[0]?.steps) {
    return "multi-step";
  }

  return "single-step";
};
