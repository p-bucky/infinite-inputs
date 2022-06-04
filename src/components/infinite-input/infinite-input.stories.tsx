import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InfiniteInput } from "./infinite-input";
import { IField } from "../Infinite-field";

export default {
  title: "ReactComponentLibrary/InfinteInput",
  component: InfiniteInput,
} as ComponentMeta<typeof InfiniteInput>;

const Template: ComponentStory<typeof InfiniteInput> = (args) => (
  <InfiniteInput {...args}>
    <IField name={"firstName"} type={"text"} />
    <IField name={"secondName"} type={"text"} />
    <IField name={"address"} type={"text"} />

  </InfiniteInput>
);

export const TemplateArgs = Template.bind({});
TemplateArgs.args = {
  fieldsValue: [
    { firstName: "Alex", secondName: "Khan", address: "Mandir Marg" },
    { address: "NY-45", secondName: "Sharma", firstName: "Mohit" },
    { firstName: "Nitya", secondName: "Kumar", address: "Haryana" },
  ],
  onChange: (data: any) => {
    console.log(data);
  },
};
