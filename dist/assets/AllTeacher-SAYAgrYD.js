import{r as x,j as e}from"./index-CFOxCBHO.js";import{e as o,f as m,g as u}from"./index-CU-una1u.js";import"./iconBase-Bq1UqAJY.js";const c=[{id:1,picture:"http://localhost:5173/teacher.jpg",studentId:"DM 16000024",name:"John Doe",subject:"Math",Designation:"Senior Teacher"},{id:2,picture:"https://randomuser.me/api/portraits/women/44.jpg",studentId:"DM 16000025",name:"Jane Smith",subject:"Bangla",Designation:"Trainee Teacher"},{id:3,picture:"https://randomuser.me/api/portraits/men/85.jpg",studentId:"DM 16000026",name:"Sam Johnson",subject:"English",Designation:"Senior Teacher"},{id:4,picture:"https://randomuser.me/api/portraits/women/65.jpg",studentId:"DM 16000027",name:"Emily Davis",subject:"Science",Designation:"Junior Teacher"},{id:5,picture:"https://randomuser.me/api/portraits/men/76.jpg",studentId:"DM 16000028",name:"Michael Brown",subject:"Geography",Designation:"Senior Teacher"},{id:6,picture:"https://randomuser.me/api/portraits/women/88.jpg",studentId:"DM 16000029",name:"Sophia Wilson",subject:"Math",Designation:"Teacher"},{id:7,picture:"https://randomuser.me/api/portraits/men/92.jpg",studentId:"DM 16000030",name:"James Anderson",subject:"English",Designation:"Senior Teacher"},{id:8,picture:"https://randomuser.me/api/portraits/women/52.jpg",studentId:"DM 16000031",name:"Olivia Martinez",subject:"Math",Designation:"Junior Teacher"},{id:9,picture:"https://randomuser.me/api/portraits/men/49.jpg",studentId:"DM 16000032",name:"Liam Taylor",subject:"Physics",Designation:"Senior Teacher"},{id:10,picture:"https://randomuser.me/api/portraits/women/60.jpg",studentId:"DM 16000033",name:"Isabella Thomas",subject:"Chemistry",Designation:"Senior Teacher"}],n=8;function f(){const[s,i]=x.useState(1),a=Math.ceil(c.length/n),l=()=>{i(t=>t>1?t-1:t)},d=()=>{i(t=>t<a?t+1:t)},p=t=>{i(t)},h=c.slice((s-1)*n,s*n);return e.jsxs("div",{className:"pr-8 pb-6 mt-0",children:[e.jsx("h3",{className:"text-[31px] font-semibold mb-6",children:"Teacher Directory"}),e.jsxs("div",{className:"w-full bg-white mr-4 pb-2 mt-0",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("input",{className:"px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]",type:"text",name:"search",placeholder:"Search by Student Name or ID"}),e.jsxs("div",{className:"relative w-full md:w-[170px]",children:[e.jsxs("select",{className:"appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10",children:[e.jsx("option",{value:"",children:"Select Subject"}),e.jsx("option",{children:"Bangla"}),e.jsx("option",{children:"English"}),e.jsx("option",{children:"Math"}),e.jsx("option",{children:"Biology"})]}),e.jsx(o,{className:"absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"})]}),e.jsxs("div",{className:"relative w-full md:w-[170px]",children:[e.jsxs("select",{className:"appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full",children:[e.jsx("option",{value:"",children:"Designation"}),e.jsx("option",{children:"Junior Teacher"}),e.jsx("option",{children:"Senior Teacher"}),e.jsx("option",{children:"Trainne Teacher"}),e.jsx("option",{children:"Teaher"})]}),e.jsx(o,{className:"absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"})]}),e.jsx("button",{className:"px-5 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto",children:"Search"})]}),e.jsx("div",{className:"mt-5",children:e.jsx("span",{className:"font-semibold text-[17px]",children:"Total Number of Teachers: 535"})})]}),e.jsxs("div",{className:"w-full text-center bg-white",children:[e.jsx("div",{className:"overflow-x-auto rounded-t-[12px]",children:e.jsxs("table",{className:"min-w-full border-[1px] table-auto text-center",children:[e.jsx("thead",{className:"bg-[#E4EBE6] h-[60px] text-center",children:e.jsxs("tr",{className:"text-[#465049] text-[16px] text-center",children:[e.jsx("th",{className:"px-4 py-2",children:"SL"}),e.jsx("th",{className:"px-4 py-2",children:"Picture"}),e.jsx("th",{className:"px-4 py-2",children:"Teacher Name"}),e.jsx("th",{className:"px-4 py-2",children:"Subject"}),e.jsx("th",{className:"px-4 py-2",children:"Designation"})]})}),e.jsx("tbody",{children:h.map((t,r)=>e.jsxs("tr",{className:"border-b text-[16px] text-gray-700",children:[e.jsx("td",{className:"px-4 py-2 text-center",children:(s-1)*n+r+1}),e.jsx("td",{className:"px-4 py-2 flex justify-center",children:e.jsx("img",{src:t.picture,alt:t.name,className:"w-[60px] h-[60px] rounded-full"})}),e.jsx("td",{className:"px-4 py-2 text-[#939393] text-center",children:e.jsx("a",{className:"text-[#0318CF] font-medium text-[16px] hover:text-[#BB5042]",href:"http://localhost:5173/teacher/dashboard/teacher-fullinfo",children:t.name})}),e.jsx("td",{className:"px-4 py-2 text-center",children:t.subject}),e.jsx("td",{className:"px-4 py-2 text-center",children:t.Designation})]},t.id))})]})}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:l,className:`w-10 h-10 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${s===1?"opacity-50 cursor-not-allowed":""}`,disabled:s===1,children:e.jsx(m,{className:"text-xl"})}),[...Array(a)].map((t,r)=>e.jsx("button",{onClick:()=>p(r+1),className:`w-10 h-10 flex items-center justify-center border-[1px] border-[#BB5042] rounded ${s===r+1?"bg-[#BB5042] text-white":"bg-transparent text-[#BB5042] hover:bg-[#BB5042] hover:text-white"}`,children:r+1},r)),e.jsx("button",{onClick:d,className:`w-10 h-10 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${s===a?"opacity-50 cursor-not-allowed":""}`,disabled:s===a,children:e.jsx(u,{className:"text-xl"})})]})})]})]})}export{f as default};
