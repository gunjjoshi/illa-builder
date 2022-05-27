import { PanelConfig } from "@/page/Editor/components/InspectPanel/interface"
import { HorizontalStart, HorizontalEnd } from "@/wrappedComponents/svg"
import { colorSchemeOptions } from "@/wrappedComponents/colorSchemeOptions"

const OptionsStyle = {
  width: "77px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const RADIO_GROUP_PANEL_CONFIG: PanelConfig[] = [
  {
    id: "radioGroup-options",
    groupName: "OPTIONS",
    children: [
      {
        id: "radioGroup-basic-defaultValue",
        labelName: "Default Value",
        attrName: "value",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "radioGroup-label",
    groupName: "LABEL",
    children: [
      {
        id: "radioGroup-label-label",
        labelName: "Label",
        attrName: "label",
        setterType: "INPUT_SETTER",
      },
      {
        id: "radioGroup-label-caption",
        labelName: "Caption",
        attrName: "labelCaption",
        setterType: "INPUT_SETTER",
      },
      {
        id: "radioGroup-label-position",
        labelName: "Position",
        attrName: "labelPosition",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          { label: <div style={OptionsStyle}>Left</div>, value: "left" },
          { label: <div style={OptionsStyle}>Top</div>, value: "top" },
        ],
      },
      {
        id: "radioGroup-label-alignment",
        labelName: "Alignment",
        attrName: "labelAlign",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          {
            label: (
              <div style={OptionsStyle}>
                <HorizontalStart />
              </div>
            ),
            value: "left",
          },
          {
            label: (
              <div style={OptionsStyle}>
                <HorizontalEnd />
              </div>
            ),
            value: "right",
          },
        ],
      },
      {
        id: "radioGroup-label-labelWidth",
        labelName: "Width(%)",
        attrName: "labelWidth",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "radioGroup-validation",
    groupName: "VALIDATION",
    children: [
      {
        id: "radioGroup-validation-required",
        labelName: "Required field",
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLabel: true,
        attrName: "required",
      },
      {
        id: "radioGroup-validation-hide-message",
        labelName: "Hide validation message",
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLabel: true,
        attrName: "hideValidationMessage",
      },
    ],
  },
  {
    id: "radioGroup-interaction",
    groupName: "INTERACTION",
    children: [
      {
        id: "radioGroup-interaction-disabled",
        labelName: "Disabled",
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        placeholder: "false",
        defaultValue: false,
      },
    ],
  },
  {
    id: "radioGroup-Adornments",
    groupName: "ADORNMENTS",
    children: [
      {
        id: "radioGroup-adornments-tooltip",
        labelName: "Tooltip",
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
      },
      {
        id: "radioGroup-style-direction",
        labelName: "Alignment",
        setterType: "RADIO_GROUP_SETTER",
        attrName: "direction",
        options: ["vertical", "horizontal"],
      },
    ],
  },
  {
    id: "radioGroup-layout",
    groupName: "LAYOUT",
    children: [
      {
        id: "radioGroup-layout-hidden",
        labelName: "Hidden",
        setterType: "INPUT_SETTER",
        attrName: "hidden",
        placeholder: "false",
      },
    ],
  },
  {
    id: "radioGroup-style",
    groupName: "STYLE",
    children: [
      {
        id: "radioGroup-style-color",
        labelName: "Color",
        setterType: "COLOR_SELECT_SETTER",
        attrName: "checkedBackgroundColor",
        defaultValue: "blue",
        options: colorSchemeOptions,
      },
    ],
  },
]