"use client";

import { Minus, Pencil, Plus } from "lucide-react";
import { useState } from "react";

const ArrayItemsInput = ({
  setItems,
  items = [],
  itemTitle,
}: {
  setItems: (items: string[]) => void;
  items: string[];
  itemTitle: string;
  // setItems: any;
  // items: string[];
  // itemTitle: string;
}) => {
  const [item, setItem] = useState("");
  const [showTagForm, setShowTagForm] = useState(false);

  function addItem() {
    if (!item) return;
    setItems([...items, item]);
    setItem("");
  }

  function removeItem(index: any) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  return (
    <div className="sm:col-span-2 col-span-full">
      {showTagForm ? (
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Pencil className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              id="voice-search"
              className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-gray-600 focus:border-gray-800 block w-full ps-10 p-2.5"
              placeholder={`Create ${itemTitle}`}
            />
          </div>
          <button
            onClick={addItem}
            type="button"
            className="shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-[#1b6a88] focus:ring-[#1b6a88] focus:ring-4 focus:outline-none"
          >
            <Plus className="w-4 h-4 me-2" />
            Add
          </button>
          <button
            type="button"
            onClick={() => setShowTagForm(false)}
            className="ml-3 shrink-0 w-10 h-10 bg-red-500 text-white font-bold rounded-lg flex items-center justify-center"
          >
            <Minus className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowTagForm(true)}
          type="button"
          className="flex items-center space-x-2 text-slate-800 py-2 px-4"
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}
      <div className="flex flex-wrap gap-4 mt-4">
        {Array.isArray(items) &&
          items.map((item: any, i: any) => {
            return (
              <div key={i} className="relative mb-6 mt-2">
                <button
                  type="button"
                  onClick={() => removeItem(i)}
                  className="absolute -top-3.5 -right-1 bg-slate-100 text-slate-900 rounded-full"
                >
                  <Minus className="w-5 h-5 text-red-600" />
                  {/* <XCircle className="w-5 h-5" /> */}
                </button>

                <div className="bg-slate-200 flex space-x-2 items-center dark:bg-slate-200 dark:text-slate-800 px-4 py-2 rounded-lg cursor-pointer">
                  {item}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ArrayItemsInput;
