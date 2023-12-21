'use client'
import React, { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
import "react-simple-tree-menu/dist/main.css";
import { RxHamburgerMenu } from "react-icons/rx";
interface Node {
    key: string;
    label: string;
    url: string;
    nodes?: Node[];
  } 

  
const dataInArray: Node[] = [
    {
      key: "mammal",
      label: "Mammal",
      url: "https://www.google.com/search?q=mammal",
      nodes: [
        {
          key: "canidae",
          label: "Canidae",
          url: "https://www.google.com/search?q=canidae",
          nodes: [
            {
              key: "dog",
              label: "Dog",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "fox",
              label: "Fox",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "wolf",
              label: "Wolf",
              url: "https://www.google.com/search?q=wolf",
              nodes: []
            }
          ]
        }
      ]
    },
    {
      key: "reptile",
      label: "Reptile",
      url: "https://www.google.com/search?q=reptile",
      nodes: [
        {
          key: "squamata",
          label: "Squamata",
          url: "https://www.google.com/search?q=squamata",
          nodes: [
            {
              key: "lizard",
              label: "Lizard",
              url: "https://www.google.com/search?q=lizard"
            },
            {
              key: "snake",
              label: "Snake",
              url: "https://www.google.com/search?q=snake"
            },
            {
              key: "gekko",
              label: "Gekko",
              url: "https://www.google.com/search?q=gekko"
            }
          ]
        }
      ]
    }
  ];
  
export default function Menu() {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const [data, setData] = useState<Node[]>(dataInArray);
  const [openNodes, setOpenNodes] = useState<string[]>(["mammal"]);

  const update = () => {
    setData((data) => [
      ...data,
      {
        key: "foo",
        label: "Foo",
        url: "https://www.google.com/search?q=foo",
        nodes: [
          {
            key: "bar",
            label: "Bar",
            url: "https://www.google.com/search?q=bar"
          }
        ]
      }
    ]);
    setOpenNodes(["mammal"]);
  };
  return (
    <div className="absolute  right-0 ">
    <Dropdown  >
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize bg-yellow-50  border border-slate-100	  rounded-b-lg  "
          
        >
          <RxHamburgerMenu size={28}  onClick={selectedValue} />
          
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className=" mr-2 flex justify-end  "
      >
        <DropdownItem key="text" className=" bg-yellow-50 mr-1  w-48 ">  
          <TreeMenu
          data={data}
          resetOpenNodesOnDataUpdate
          initialOpenNodes={openNodes}
        >
          {({ items }) => (
            <ul className="tree-item-group	">
              {items.map(({ key, onClickItem, ...props }) => (
                <ItemComponent key={key} {...props} />
              ))}
            </ul>
          )}
        </TreeMenu>
         </DropdownItem>
    
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}


