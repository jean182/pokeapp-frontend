import React from "react";

export interface IPagination {
   current: number
   total: number
   onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
   page: number
}