import * as React from "react";
import "./style.css";

const Taps = () => {
  const [toggle, setToggle] = React.useState(0);

  const updateToggle = (index: number) => {
    setToggle(index);
  };
  // create tabs
  return (
    <div className='d-flex justify-content-center align-items-center'>
       <div className='col-6 tab p-5'>
        <ul className='d-flex'>
          <li className='flex-fill active-content ' onClick={() => updateToggle(1)}>
            lorem
          </li>
          <li className='flex-fill' onClick={() => updateToggle(2)}>
            soso
          </li>
          <li className='flex-fill' onClick={() => updateToggle(3)}>
            koloe
          </li>
        </ul>
        <div className={toggle === 1 ? "show-content" : "content"}>
          <h1>lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni
            totam optio cupiditate laudantium maxime impedit natus, perspiciatis
            deleniti veniam exercitationem aliquid reprehenderit asperiores ex,
            atque sapiente distinctio ipsum eveniet.
          </p>
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <h1>now</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni
            totam optio cupiditate laudantium maxime impedit natus, perspiciatis
            deleniti veniam exercitationem aliquid reprehenderit asperiores ex,
            atque sapiente distinctio ipsum eveniet.
          </p>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <h1>lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni
            totam optio cupiditate laudantium maxime impedit natus, perspiciatis
            deleniti veniam exercitationem aliquid reprehenderit asperiores ex,
            atque sapiente distinctio ipsum eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Taps;

//   import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role='tabpanel'
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
// <Box
//   sx={{
//     flexGrow: 1,
//     bgcolor: "background.paper",
//     display: "flex",
//     height: 224,
//   }}
// >
//   <Tabs
//     orientation='vertical'
//     variant='scrollable'
//     value={value}
//     onChange={handleChange}
//     aria-label='Vertical tabs example'
//     sx={{ borderRight: 1, borderColor: "divider" }}
//   >
//     <Tab label='Item One' {...a11yProps(0)} />
//     <Tab label='Item Two' {...a11yProps(1)} />

//   </Tabs>
//   <TabPanel value={value} index={0}>
//     Item One
//   </TabPanel>
//   <TabPanel value={value} index={1}>
//     Item Two
//   </TabPanel>

// </Box>
//   );
// }
