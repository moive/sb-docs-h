import{j as u}from"./jsx-runtime-u17CrQMm.js";const t=({label:s,size:n="normal",allCaps:c=!1,color:i,fontColor:d,bold:p=!1})=>u.jsx("span",{className:`label ${n} ${i} ${p?"bold":""}`,style:{color:d},children:c?s.toUpperCase():s});t.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display inside the label"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Size of the label",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"allCaps: If true, the label text will be displayed in uppercase",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"color: Color of the label text"},fontColor:{required:!1,tsType:{name:"string"},description:"fontColor: Custom font color for the label text"},bold:{required:!1,tsType:{name:"boolean"},description:"bold: If true, the label text will be displayed in bold",defaultValue:{value:"false",computed:!1}}}};const b={title:"UI/labels/MyLabel",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"Custom Color Label",fontColor:"#5517ac"}},o={args:{label:"Bold Label",bold:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Basic Label"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    allCaps: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bold Label",
    bold: true
  }
}`,...o.parameters?.docs?.source}}};const f=["Basic","AllCaps","Secondary","CustomColor","Bold"];export{a as AllCaps,e as Basic,o as Bold,l as CustomColor,r as Secondary,f as __namedExportsOrder,b as default};
