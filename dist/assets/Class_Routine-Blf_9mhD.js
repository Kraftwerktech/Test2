import{r as d,j as s}from"./index-CFOxCBHO.js";import{L as h}from"./App-C2fCW3Hz.js";import{I as x}from"./index-DUezGHto.js";import"./iconBase-Bq1UqAJY.js";const c=[{id:1,date:"2024-08-12",day:"sat",schedule:[{subject:"Bangla",className:"VI-A"},{subject:"English",className:"VII-C"},{subject:"Math",className:"V-B"},{subject:"Physics",className:"XI-A"},{subject:"Chemistry",className:"XII-C"},{subject:"Biology",className:"IX-A"}]},{id:2,date:"2024-08-13",day:"sun",schedule:[{subject:"Bangla",className:"VI-A"},{subject:"n/a",className:""},{subject:"Math",className:"V-B"},{subject:"Physics",className:"XI-A"},{subject:"Chemistry",className:"XII-C"},{subject:"Biology",className:"IX-A"}]},{id:3,date:"2024-08-14",day:"Mon",schedule:[{subject:"Bangla",className:"VI-A"},{subject:"English",className:"VII-C"},{subject:"Math",className:"V-B"},{subject:"Physics",className:"XI-A"},{subject:"Chemistry",className:"XII-C"},{subject:"Biology",className:"IX-A"}]},{id:4,date:"2024-08-15",day:"Thu",schedule:[{subject:"Bangla",className:"VI-A"},{subject:"English",className:"VII-C"},{subject:"Math",className:"V-B"},{subject:"Physics",className:"XI-A"},{subject:"Chemistry",className:"XII-C"},{subject:"Biology",className:"IX-A"}]},{id:5,date:"2024-08-16",day:"Wed",schedule:[{subject:"Bangla",className:"VI-A"},{subject:"English",className:"VII-C"},{subject:"Math",className:"V-B"},{subject:"Physics",className:"XI-A"},{subject:"Chemistry",className:"XII-C"},{subject:"Biology",className:"IX-A"}]},{id:6,date:"2024-08-17",day:"The",schedule:[{subject:"Bangla",className:"VI-A"},{subject:"English",className:"VII-C"},{subject:"Math",className:"V-B"},{subject:"Physics",className:"XI-A"},{subject:"Chemistry",className:"XII-C"},{subject:"Biology",className:"IX-A"}]},{id:7,date:"2024-08-18",day:"Fri ",schedule:[{subject:"Bangla",className:"VI-A"},{subject:"English",className:"VII-C"},{subject:"Math",className:"V-B"},{subject:"Physics",className:"XI-A"},{subject:"Chemistry",className:"XII-C"},{subject:"Biology",className:"IX-A"}]}],u=()=>{const[t,i]=d.useState(c[0].date),r=e=>{i(e)};return s.jsxs("div",{children:[s.jsx("h3",{className:"text-[31px] font-bold text-gray-900 mb-8",children:"My Routine"}),s.jsx("div",{className:"w-full",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"min-w-full table-auto",children:[s.jsx("thead",{className:"bg-transparent",children:s.jsxs("tr",{className:"text-center pl-10 text-sm text-gray-700",children:[s.jsx("th",{className:"px-4 py-2",children:s.jsx("div",{className:"flex pl-11 justify-center",children:s.jsx(h,{to:"/teacher/dashboard/routineCalender",children:s.jsx(x,{className:"w-[70px] h-[70px] text-[#BB5042]"})})})}),["1st","2nd","3rd","4th","5th","6th"].map((e,a)=>s.jsxs("th",{className:"px-4 py-2",children:[s.jsx("span",{className:"text-[25px]",children:e}),s.jsxs("p",{className:"text-gray-600 text-[16px] mt-[10px] mb-[5px]",children:[a+10,":00 am",s.jsx("br",{}),a+10,":45 am"]})]},a))]})}),s.jsxs("tbody",{children:[c.map(e=>s.jsxs("tr",{className:`text-center ${t===e.date?"bg-transparent text-black":"bg-transparent text-gray-500"}`,onClick:()=>r(e.date),children:[s.jsx("td",{className:"px-2 w-[175px] py-2",children:s.jsxs("div",{className:"flex items-center justify-center gap-6 cursor-pointer",children:[s.jsx("p",{children:e.day}),s.jsx("p",{className:`w-16 h-16 rounded-full border text-xl font-bold flex items-center justify-center ${t===e.date?"bg-[#465049] text-white":"bg-white text-black"}`,children:e.date.split("-")[2]})]})}),e.schedule.map((a,l)=>s.jsxs("td",{className:"px-4 border-b py-2",children:[s.jsx("div",{className:`font-bold text-[18px] ${t===e.date?"text-[#BB5042]":"text-[#BB5042] opacity-50"}`,children:a.subject}),s.jsx("p",{className:`text-[16px] font-semibold mt-[7px] ${t===e.date?"text-gray-500":"text-gray-400 opacity-70"}`,children:a.className})]},l))]},e.id)),[...Array(7-c.length)].map((e,a)=>s.jsxs("tr",{className:"text-center bg-white opacity-50",children:[s.jsx("td",{className:"px-4 py-2",children:s.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[s.jsx("p",{children:"-"}),s.jsx("p",{className:"w-16 h-16 rounded-full border flex items-center justify-center bg-white text-black opacity-50",children:"-"})]})}),Array(6).fill().map((l,m)=>s.jsxs("td",{className:"px-4 py-2",children:[s.jsx("div",{className:"font-bold text-[#BB5042] opacity-50",children:"-"}),s.jsx("p",{className:"text-xs text-gray-400 opacity-50",children:"-"})]},m))]},a+c.length))]})]})})})]})};export{u as default};