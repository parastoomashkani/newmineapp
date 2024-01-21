'use client'
import React, { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Checkbox from './Checkbox';

import { RxHamburgerMenu } from "react-icons/rx";
interface Node {
    key: string;
    label: string;
    url: string;
    nodes?: Node[];
  } 

  

  
export default function Menu() {

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );



  return (
    <div className="absolute  right-0 ">
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize border rounded-b-lg"
        >
          <RxHamburgerMenu size={28} onClick={selectedValue} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
      
        className="mr-0 flex justify-end"
      >
        <DropdownItem key="text" className="bg-white mr-1 w-87">
        <div className="bg-white">
                  <Checkbox />
</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}



