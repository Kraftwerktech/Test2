import{r as d,j as e,a as b}from"./index-CFOxCBHO.js";import{d as f}from"./index-Cq8k2bXf.js";import{e as C}from"./index-BzwUEEsh.js";import{f as N}from"./index-BP_wCk8t.js";import{h as S,E}from"./html2canvas.esm-7P9XAURI.js";import w from"./LayoutSyllabus-CkI1MWAf.js";import"./iconBase-Bq1UqAJY.js";import"./App-C2fCW3Hz.js";import"./index-5hjukpG2.js";import"./index-DUezGHto.js";const B=["Class IX","Class X","Class XI"],v=["Science","Mathematics","English"],I=[{lesson:"Lesson 1",resources:[{resource:"TB- Cambridge Checkpoint Science Coursebook 9",chapter:"Chapter 5: Science toolkit 2: Control and regulation",topics:["Forms of Energy and Their Interconversion","Defining the System and its Surroundings","The Law of Energy Conservation","Units of Energy"]},{resource:"TB- Oxford Science 9 Student Book",chapter:"Chapter 2: Energy",topics:["Units of Energy","State Functions and the Path Independence of the Energy Change"]}]},{lesson:"Lesson 2",resources:[{resource:"TB- Cambridge Checkpoint Science Coursebook 9",chapter:"Chapter 5: Science toolkit 2: Control and regulation",topics:["Forms of Energy and Their Interconversion","Energy Change: Energy Transfer to or from a System","Heat and Work: Two Forms of Energy Transfer","The Law of Energy Conservation"]},{resource:"TB- Oxford Science 9 Student Book",chapter:"Chapter 2: Energy",topics:["Units of Energy","State Functions and the Path Independence of the Energy Change"]}]},{lesson:"Lesson 3",resources:[{resource:"TB- Cambridge Checkpoint Science Coursebook 9",chapter:"Chapter 5: Science toolkit 2: Control and regulation",topics:["Forms of Energy and Their Interconversion","Defining the System and its Surroundings","The Law of Energy Conservation","Units of Energy"]}]}];function A(){const[p,m]=d.useState(B[0]),[h,u]=d.useState(v[0]),[x,g]=d.useState({}),j=t=>{g(s=>({...s,[t]:!s[t]}))},y=()=>{const t=document.getElementById("syllabusTable");S(t,{scale:2}).then(s=>{const r=s.toDataURL("image/png"),n=new E("p","mm","a4"),o=210,a=297,c=s.height*o/s.width;let l=c,i=0;for(n.addImage(r,"PNG",0,i,o,c),l-=a;l>=0;)i=l-c,n.addPage(),n.addImage(r,"PNG",0,i,o,c),l-=a;n.save("syllabus.pdf")})};return e.jsxs("div",{children:[e.jsx(w,{}),e.jsx("div",{className:"mb-8 mr-5",id:"syllabusTable",children:e.jsxs("div",{className:"max-w-full border-l-[1px] border-r-[1px]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex text-[20px] mt-8 ml-5 font-bold gap-2",children:[e.jsx("span",{children:p}),e.jsxs("span",{children:["| ",h]}),e.jsx("span",{children:"| 2024"})]}),e.jsxs("div",{className:"flex mt-10 items-center mr-5 gap-8",children:[e.jsxs("div",{className:"relative inline-block",children:[e.jsxs("select",{className:"border-[1px] w-[250px] rounded-[8px] px-6 py-3 outline-none border-[#B6B6B6] hover:border-[#BB5042] bg-white text-gray-700 cursor-pointer appearance-none",value:`${p} | ${h} | 2024`,onChange:t=>{const[s,r]=t.target.value.split(" | ");m(s),u(r)},children:[e.jsx("option",{children:"Class X | Biology | 2024"}),e.jsx("option",{children:"Class IX | Science | 2024"}),e.jsx("option",{children:"Class VIII | Chemistry | 2024"}),e.jsx("option",{children:"Class VII | Physics | 2024"}),e.jsx("option",{children:"Class VI | Math | 2024"}),e.jsx("option",{children:"Class X | CS | 2024"}),e.jsx("option",{children:"Class IX | English | 2024"}),e.jsx("option",{children:"Class XI | History | 2024"})]}),e.jsx(f,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042] pointer-events-none"})]}),e.jsx("button",{className:"border-[1px] rounded-[8px] w-[250px]      text-[#BB5042] border-[#BB5042] px-6 py-3",children:"Request for Change"})]})]}),e.jsxs("div",{className:"flex justify-between mr-5 items-center mt-5",children:[e.jsxs("div",{className:"flex ml-5 items-center border border-slate-300 rounded-md w-[350px] md:max-w-[400px]",children:[e.jsx(N,{className:"ml-3 w-5 h-5 text-[#BB5042]"}),e.jsx("input",{className:"flex-1 px-4 py-2 placeholder:text-[13px] outline-none bg-transparent text-gray-700",type:"text",name:"search",placeholder:"Search by Lesson or Chapter"})]}),e.jsx(C,{className:"w-5 h-5 text-[#BB5042] cursor-pointer",onClick:y})]}),e.jsx("div",{className:"w-full bg-white mt-6 p-5 rounded-[8px]",children:e.jsx("div",{className:"overflow-x-auto rounded-t-[8px]",children:e.jsxs("table",{className:"min-w-full table-auto",children:[e.jsx("thead",{className:"bg-[#E4EBE6] text-left h-[70px]",children:e.jsxs("tr",{className:"text-[#465049] text-[16px]",children:[e.jsx("th",{className:"py-4 px-8",children:"Lesson"}),e.jsx("th",{className:"px-4 py-3",children:"Resource"}),e.jsx("th",{className:"px-4 py-3",children:"Chapter"}),e.jsx("th",{className:"px-4 py-3",children:"Topic Title"})]})}),e.jsx("tbody",{className:"text-[#465049]",children:I.map((t,s)=>e.jsxs(b.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 font-bold pb-3 pt-3 w-[140px] px-8",children:t.lesson}),e.jsx("td",{className:"py-2 px-4 pb-3 pt-3 ",children:t.resources[0].resource}),e.jsx("td",{className:"py-2 pb-3 pt-3 px-4 ",children:t.resources[0].chapter}),e.jsx("td",{className:"py-2 pb-3 pt-3 px-4 ",children:e.jsx("ul",{className:"list-disc space-y-2 pl-4",children:t.resources[0].topics.slice(0,3).map((r,n)=>e.jsx("li",{children:r},n))})})]}),x[s]&&t.resources.slice(1).map((r,n)=>e.jsxs("tr",{className:"bg-gray-100 pb-3 pt-3",children:[e.jsx("td",{className:"py-4 px-8"}),e.jsx("td",{className:"py-2 px-4 ",children:r.resource}),e.jsx("td",{className:"py-2 px-4 ",children:r.chapter}),e.jsx("td",{className:"py-2 px-4",children:e.jsx("ul",{className:"list-disc space-y-2 pl-4",children:r.topics.map((o,a)=>e.jsx("li",{children:o},a))})})]},n)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"py-3 px-8 text-left border-b-[1px]",children:e.jsx("button",{className:"text-[#98AD9E] font-semibold",onClick:()=>j(s),children:x[s]?"Less...":"More..."})})})]},s))})]})})})]})})]})}export{A as default};