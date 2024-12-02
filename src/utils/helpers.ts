import { lazy } from "react";

String.prototype.capitalize = function () {
  const firstLetter = this[0].toUpperCase();
  const rest = this.slice(1).toLowerCase();
  return firstLetter + rest;
};

// helper for lazy loading a component
export const lazyLoader = (path: string, namedExport?: string) => {
  return lazy(async () => {
    const promise = import(path);
    if (!namedExport) {
      // this is for default components
      return wait(2000).then(() => promise);
    } else {
      // this is for named exports components
      const module = await wait(2000).then(() => promise);
      return { default: module[namedExport] };
    }
  });
};

// creating a temporary delay function for my lazy loading components
export const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
