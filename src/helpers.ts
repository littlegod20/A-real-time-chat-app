import { lazy } from "react";

String.prototype.capitalizer = function () {
  const firstLetter = this[0].toUpperCase();
  const rest = this.slice(1).toLowerCase();
  return firstLetter + rest;
};

// helper for lazy loading a component
export const lazyLoader = (path: string, namedExport?: string) => {
  return lazy(async () => {
    
    const promise = import(/* @vite-ignore */ path);
    if (!namedExport) {
      // this is for default components
      return promise;
    } else {
      // this is for named exports components
      const module = await promise;
      return { default: module[namedExport] };
    }
  });
};

// creating a 
