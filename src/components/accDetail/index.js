import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Radio, Checkbox, Switch } from "antd";
import {
  UnorderedListOutlined,
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Cards from "../cards";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const plainOptions = ["Double", "En-Suite", "Entire Place", "Flat"];

const items = [
  {
    key: "1",
    label: <p className="text-[#172A7D] font-bold">Accommodation Type</p>,
  },
  {
    key: "2",
    label: (
      <p>
        <Radio className="text-[#172A7D] font-bold">
          Student Accommodation
        </Radio>
        <p>
          Purpose built student rooms with onsite teams,
          <br /> facilities and community.
        </p>
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <p>
        <Radio className="text-[#172A7D] font-bold">Private Let</Radio>
        <p>Private or shared living in a house or apartment.</p>
      </p>
    ),
  },
];
const item1 = [
  {
    key: "1",
    label: (
      <Checkbox.Group
        options={plainOptions}
        defaultValue={["Double"]}
        onChange={onChange}
      />
    ),
  },
  {
    key: "2",
    label: (
      <Checkbox.Group
        options={plainOptions}
        defaultValue={["Double"]}
        onChange={onChange}
      />
    ),
  },
  {
    key: "3",
    label: (
      <Checkbox.Group
        options={plainOptions}
        defaultValue={["Double"]}
        onChange={onChange}
      />
    ),
  },
];
function AccDetail() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <h6>
          Home / Accommodation / United Kingdom / London Student Accommodation /
          Abbey College London
        </h6>
      </div>
      <div className="  bg-[#F8F9FA]">
        <hr />
        <div className="container mt-4 mb-4 flex items-center gap-1">
          <img
            src="https://assets.casita.com/_next/static/media/building-icon.be462dbd.svg"
            alt="abc"
          />
          <div className="text-[1.3rem]">
            <a style={{ color: "#495057" }}>Abbey College London</a>{" "}
            <a style={{ color: "#172A7E", fontWeight: "600" }}>Accommodation</a>{" "}
            <a style={{ color: "#761455" }}>(280) Options</a>
          </div>
        </div>
        <hr />
        <div className="container gap-2 mb-4 lg flex  justify-between items-center flexc">
            <div  className="flex gap-1 hi">
          <Dropdown
            menu={{
              items,
            }}
            autoFocus={false}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button className="text-[#172A7D] text-[.8rem]">
                Accommodation Type
                <DownOutlined />
              </Button>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items: item1,
            }}
            autoFocus={false}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button className="text-[#172A7D] text-[.8rem]">
                Room Type
                <DownOutlined />
              </Button>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items: item1,
            }}
            autoFocus={false}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button className="text-[#172A7D] text-[.8rem]">
                Facilities
                <DownOutlined />
              </Button>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items: item1,
            }}
            autoFocus={false}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button className="text-[#172A7D] text-[.8rem]">
                Availability
                <DownOutlined />
              </Button>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items: item1,
            }}
            autoFocus={false}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button className="text-[#172A7D] text-[.8rem]">
                Weekly Budget
                <DownOutlined />
              </Button>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items: item1,
            }}
            autoFocus={false}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button className="text-[#172A7D] text-[.8rem]">
                Cancellation Policy
                <DownOutlined />
              </Button>
            </a>
          </Dropdown>
          </div>
          <div className="flex gap-2 mt-1 md mt-0">
            <div className="bg-white text-center border-spacing-1 rounded-[.2rem] w-[2rem] p-1 bor">
              <UnorderedListOutlined />
            </div>
            <div className="bg-white text-center border-spacing-1 rounded-[.2rem] w-[2rem] p-1 bor">
              <AppstoreOutlined />
            </div>
            <div>
              <Dropdown
                menu={{
                  items,
                }}
                autoFocus={false}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{ color: "#172A7D", textDecoration: "none" }}
                >
                  <Button className="text-[#172A7D] text-[.8rem] flex items-center gap-1">
                    <img
                      src="https://assets.casita.com/_next/static/media/sort-icon.46910d46.svg"
                      alt="abc"
                    />{" "}
                    <div> Sort By</div>
                    <div>
                      {" "}
                      <DownOutlined />
                    </div>
                  </Button>
                </a>
              </Dropdown>
            </div>
            <div>
              <div className="flex items-center gap-1 bor w-[8rem] p-[.12rem]">
                <img
                  src="https://assets.casita.com/_next/static/media/map-icon.79c793f3.svg"
                  alt="abc"
                />
                <div className="text-[.7rem]">Map View</div>
                <div>
                  {" "}
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cards/>
      </div>
    </div>
  );
}

export default AccDetail;
