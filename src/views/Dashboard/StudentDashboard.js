import React from "react";
import DashLayout from "../../components/dashLayout/layout";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import QueueIcon from "@mui/icons-material/Queue";
import LogoutIcon from "@mui/icons-material/Logout";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Chart } from "react-google-charts";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AllOutIcon from '@mui/icons-material/AllOut';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ContrastIcon from "@mui/icons-material/Contrast";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { styled } from "@mui/material/styles";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
const items = [
  { name: "Dashboard", icon: <HomeIcon /> },
  { name: "Attendance", icon: <QueueIcon /> },
  { name: "Permissions", icon: <InboxIcon /> },
  { name: "Log out", icon: <LogoutIcon /> },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "20vh",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const data = [
  ["Month", "present", "Absent", "permissions"],
  ["week1", 1000, 400, 200],
  ["week2", 1170, 460, 250],
  ["week3", 660, 1120, 300],
  ["week4", 1030, 540, 350],
  ["week5", 640, 640, 1350],
];

export const options = {
  chart: {
    title: "attendance Overview",
  },
};

const View = () => {
  return (
    <DashLayout siderItems={items}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>
        <Grid item xs={3} spacing={2}>
          <Item className="bg-secondary text-white">
            <h1 className="box__container-dash">Hour of study</h1>
            <AccessTimeIcon /> Start Hour
            <span className="box__container-time">8:00 A.M</span>
          </Item>
          <Item className="bg-secondary text-white">
            <AccessAlarmsIcon /> End Hour
            <span className="box__container-time">16:00 P.M</span>
          </Item>
        </Grid>
        <Paper elevation={2} />

        <Grid className="chart__container">
          <Chart
            chartType="Bar"
            width="50rem"
            height="320px"
            data={data}
            options={options}
          />
        </Grid>
      </Grid>

      <Container sx={{ paddingTop: "3rem", marginRight: "10rem" }}>
        <Box
          sx={{
            bgcolor: "#a8ccd1",
            height: "38vh",
            padding: "1rem",
            width: "100%",
          }}
        >
          <h1 className="mb-3 statistics__level">
            General statistics of your participation
          </h1>
          <Grid container spacing={3}>
            <Grid item spacing={1} xs={12} sm={3}>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "25vh",
                  backgroundColor: "white",
                  borderRadius: "5%",
                }}
              >
                <ElectricBoltIcon
                  fontSize="large"
                  className="statistics__level-icon"
                />
                <h1 className="statistics__level-content">Daily</h1>

                <p className="statistics__level-content-word">
                  65{" "}
                  <span className="statistics__level-content-percentage">
                    %
                  </span>
                </p>
              </Box>
            </Grid>
            <Grid item spacing={2} xs={12} sm={3}>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "25vh",
                  backgroundColor: "white",
                  borderRadius: "5%",
                }}
              >
                <ContrastIcon
                  fontSize="large"
                  className="statistics__level-icon"
                />
                <h1 className="statistics__level-content">Week</h1>
                <p className="statistics__level-content-word">
                  80{" "}
                  <span className="statistics__level-content-percentage">
                    %
                  </span>
                </p>
              </Box>
            </Grid>
            <Grid item spacing={2} xs={12} sm={3}>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "25vh",
                  backgroundColor: "white",
                  borderRadius: "5%",
                }}
              >
                <StarOutlineIcon
                  fontSize="large"
                  className="statistics__level-icon"
                />
                <h1 className="statistics__level-content">Month</h1>
                <p className="statistics__level-content-word">
                  78{" "}
                  <span className="statistics__level-content-percentage">
                    %
                  </span>
                </p>
              </Box>
            </Grid>
            <Grid item spacing={2} xs={12} sm={3}>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "25vh",
                  backgroundColor: "white",
                  borderRadius: "5%",
                }}
              >
                <AllOutIcon fontSize="large"
                  className="statistics__level-icon"/>
                <h1 className="statistics__level-content">Pending</h1>
                <p className="statistics__level-content-word">
                  85{" "}
                  <span className="statistics__level-content-percentage">
                    %
                  </span>
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </DashLayout>
  );
};

export default View;
